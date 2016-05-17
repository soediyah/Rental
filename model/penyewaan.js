var mysql = require('mysql');
var knex = require('knex')({
	client: 'mysql',
	connection: {
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'rental'
	}
});

module.exports = {
	get: function(callback){
		var model = knex.select().table('tbl_penyewaan')
		.select(`tbl_penyewaan.no_booking`,`no_ktp`,`tgl_pinjam`,`jam_pinjam`,`tgl_kembali`,`jam_kembali`,`harga_sewa`,`desc_item`,`id_pegawai`,`id_item`);
		model.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		});

	},

	getid: function(No_booking, callback){
		var model = knex.select().table('tbl_penyewaan')
		.whereRaw('tbl_penyewaan.no_booking = ?', [No_booking])
		.select(`tbl_penyewaan.no_booking`,`no_ktp`,`tgl_pinjam`,`jam_pinjam`,`tgl_kembali`,`jam_kembali`,`harga_sewa`,`desc_item`,`id_pegawai`,`id_item`);
		
		model.then(function (rows){
			callback(null, rows);
		}, function (err){
			callback(err)
		})
		.catch(function (err){
			callback(err)
		});
		 
	},

	post: function(req, callback){
		var no_ktp = req.body.no_ktp;
		var tgl_pinjam = req.body.tgl_pinjam;
		var jam_pinjam = req.body.jam_pinjam;
		var tgl_kembali = req.body.tgl_kembali;
		var jam_kembali = req.body.jam_kembali;
		var harga_sewa = req.body.harga_sewa;
		var desc_item = req.body.desc_item;
		var id_pegawai = req.body.id_pegawai;
		var id_item = req.body.id_item;

		var model = knex('tbl_penyewaan')
		.insert({
			'no_ktp':no_ktp,
			'tgl_pinjam':tgl_pinjam,
			'jam_pinjam':jam_pinjam,
			'tgl_kembali':tgl_kembali,
			'jam_kembali':jam_kembali,
			'harga_sewa':harga_sewa,
			'desc_item':desc_item,
			'id_pegawai':id_pegawai,
			'id_item':id_item
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		})
	},
	
	put: function(req, callback){
		var no_ktp = req.body.no_ktp;
		var tgl_pinjam = req.body.tgl_pinjam;
		var jam_pinjam = req.body.jam_pinjam;
		var tgl_kembali = req.body.tgl_kembali;
		var jam_kembali = req.body.jam_kembali;
		var harga_sewa = req.body.harga_sewa;
		var desc_item = req.body.desc_item;
		var id_pegawai = req.body.id_pegawai;
		var id_item = req.body.id_item;
		var model = knex('tbl_penyewaan')
        .where('no_booking',No_booking)
        .update({
          'no_ktp':no_ktp,
			'tgl_pinjam':tgl_pinjam,
			'jam_pinjam':jam_pinjam,
			'tgl_kembali':tgl_kembali,
			'jam_kembali':jam_kembali,
			'harga_sewa':harga_sewa,
			'desc_item':desc_item,
			'id_pegawai':id_pegawai,
			'id_item':id_item
      })
         .then(function (rows){
                 callback(null, rows);
             })
         .catch(function (err){
                 callback(err)
             }); 

	},

	delete: function (No_booking, callback){
   		var model = knex('tbl_penyewaan')
        .where('no_booking' ,No_booking)
        .del()
        .then(function (rows){
                callback(null, rows);
            })
        .catch(function (err){
                callback(err)
            }); 

	}

}