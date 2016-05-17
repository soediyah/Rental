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
		.leftJoin('tbl_pvot', 'tbl_pembayaran.id', 'tbl_pvot.id_pembayaran')
		.select(`tbl_pembayaran.id`,`harga_sewa`,`total_denda`,`tgl_pembayaran`,`id_pegawai`,`no_booking`);
		model.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		});

	},

	getid: function(Id, callback){
		var model = knex.select().table('tbl_pembayaran')
		.leftJoin('tbl_pvot', 'tbl_pembayaran.id', 'tbl_pvot.id_pembayaran')
		.whereRaw('tbl_pembayaran.id = ?', [Id])
		.select(`tbl_pembayaran.id`,`harga_sewa`,`total_denda`,`tgl_pembayaran`,`id_pegawai`,`no_booking`);
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
		var No_booking = req.body.no_booking;

		var model = knex('tbl_pembayaran')
		.insert({
			'harga_sewa':Harga_sewa,
			'total_denda':Total_denda,
			'tgl_pembayaran':Tgl_pembayaran,
			'id_pegawai':Id_pegawai,
			'no_booking':No_booking
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		})
	},
	
	put: function(req, callback){
		var Id = req.params.id;
		var No_booking = req.params.no_booking;
		var Harga_sewa = req.body.harga_sewa;
		var Total_denda = req.body.total_denda;
		var Tgl_pembayaran = req.body.tgl_pembayaran;
		var Id_pegawai = req.body.id_pegawai;
		var model = knex('tbl_pembayaran')
        .where('id',Id)
        .update({
           'harga_sewa': Harga_sewa,
			'total_denda':Total_denda,
			'tgl_pembayaran':Tgl_pembayaran,
			'id_pegawai':Id_pegawai,
			'no_booking':No_booking
      })
         .then(function (rows){
                 callback(null, rows);
             })
         .catch(function (err){
                 callback(err)
             }); 

	},

	delete: function (Id, callback){
   		var model = knex('tbl_pembayaran')
        .where('id' ,Id)
        .del()
        .then(function (rows){
                callback(null, rows);
            })
        .catch(function (err){
                callback(err)
            }); 

	}

}