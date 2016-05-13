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
		var model = knex.select().table('tbl_pembayaran')
		.leftJoin('tbl_pvot', 'tbl_pembayaran.no_booking', 'tbl_pvot.no_booking')
		.select(`tbl_pembayaran.no_booking`,`harga_sewa`,`total_denda`,`tgl_pembayaran`,`id_pegawai`);
		model.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		});

	},

	getid: function(No_booking, callback){
		var model = knex.select().table('tbl_pembayaran')
		.leftJoin('tbl_pvot', 'tbl_pembayaran.no_booking', 'tbl_pvot.no_booking')
		.leftJoin('tbl_pegawai', 'tbl_pembayaran.')
		.whereRaw('tbl_pembayaran.no_booking = ?', [No_booking])
		.select(`tbl_pembayaran.no_booking`,`harga_sewa`,`total_denda`,`tgl_pembayaran`,`id_pegawai`);
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
		var Harga_sewa = req.body.harga_sewa;
		var Total_denda = req.body.total_denda;
		var Tgl_pembayaran = req.body.tgl_pembayaran;
		var Id_pegawai = req.body.id_pegawai;

		var model = knex('tbl_pembayaran')
		.insert({
			'harga_sewa':Harga_sewa,
			'total_denda':Total_denda,
			'tgl_pembayaran':Tgl_pembayaran,
			'id_pegawai':Id_pegawai
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		})
	},
	
	put: function(req, callback){
		var No_booking = req.params.no_booking;
		var Harga_sewa = req.body.harga_sewa;
		var Total_denda = req.body.total_denda;
		var Tgl_pembayaran = req.body.tgl_pembayaran;
		var Id_pegawai = req.body.id_pegawai;
		var model = knex('tbl_pembayaran')
        .where('no_booking',No_booking)
        .update({
           'harga_sewa': Harga_sewa,
			'total_denda':Total_denda,
			'tgl_pembayaran':Tgl_pembayaran,
			'id_pegawai':Id_pegawai
      })
         .then(function (rows){
                 callback(null, rows);
             })
         .catch(function (err){
                 callback(err)
             }); 

	},

	delete: function (No_booking, callback){
   		var model = knex('tbl_pembayaran')
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