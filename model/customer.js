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
		var model = knex.select().table('tbl_customer')
		.leftJoin('tbl_telepon', 'tbl_customer.no_ktp', 'tbl_telepon.no_ktp')
		.select(`tbl_customer.no_ktp`,`nama_customer`,`id_pegawai`);
		model.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		});

	},

<<<<<<< HEAD
	getid: function(no_ktp, callback){
		var model = knex.select().table('tbl_customer')
		.leftJoin('tbl_telepon', 'tbl_customer.no_ktp', 'tbl_telepon.no_ktp')
		.whereRaw('tbl_customer.no_ktp = ?', [no_ktp])
		.select(`tbl_customer.no_ktp`,`nama_customer`,`id_pegawai`)

	model.then(function (rows){
=======
	getid: function(No_ktp, callback){
		var model = knex.select().table('tbl_customer')
		.leftJoin('tbl_telepon', 'tbl_customer.no_ktp', 'tbl_telepon.no_ktp')
		.where('no_ktp', [No_ktp])
		.select(`tbl_customer.no_ktp`,`nama_customer`,`id_pegawai`);
		model.then(function (rows){
>>>>>>> bdf8d827e35f589679d826b33d6ed648a5e33439
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
		var nama_customer = req.body.nama_customer;
		var id_pegawai = req.body.id_pegawai;

		var model = knex('tbl_customer')
		.insert({
			'no_ktp':no_ktp,
			'nama_customer':nama_customer,
			'id_pegawai':id_pegawai
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
		var nama_customer = req.body.nama_customer;
		var id_pegawai = req.body.id_pegawai;
		var model = knex('tbl_customer')
        .where('no_ktp',no_ktp)
        .update({
           'no_ktp': no_ktp,
			'nama_customer':nama_customer,
			'id_pegawai':id_pegawai
      })
         .then(function (rows){
                 callback(null, rows);
             })
         .catch(function (err){
                 callback(err)
             }); 

	},

	delete: function (no_ktp, callback){
   		var model = knex('tbl_customer')
        .where('no_ktp' ,no_ktp)
        .del()
        .then(function (rows){
                callback(null, rows);
            })
        .catch(function (err){
                callback(err)
            }); 

	}

}