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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 238a7b7002e23cc10684b33ffa3cfc5d1adf7937
	getid: function(No_ktp, callback){
		var model = knex.select().table('tbl_customer')
		.leftJoin('tbl_telepon', 'tbl_customer.no_ktp', 'tbl_telepon.no_ktp')
		.where('no_ktp', [No_ktp])
		.select(`tbl_customer.no_ktp`,`nama_customer`,`id_pegawai`);

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 107a1fa426f83515562b32e1a9db0fce095224d3

	getid: function(Id, callback){
		var model = knex.select().table('tbl_pegawai')
		.leftJoin('tbl_telepon', 'tbl_telepon.no_ktp', 'tbl_customer.no_ktp')
		.whereRaw('tbl_customer.no_ktp = ?', [Id])
		.select(`tbl_customer.no_ktp`,`nama_customer`,`id_pegawai`);

>>>>>>> 277bec1e9eb78dd438244e13042400bf067c15ed
	getid: function(no_ktp, callback){
		var model = knex.select().table('tbl_customer')
		.leftJoin('tbl_telepon', 'tbl_customer.no_ktp', 'tbl_telepon.no_ktp')
		.whereRaw('tbl_customer.no_ktp = ?', [no_ktp])
		.select(`tbl_customer.no_ktp`,`nama_customer`,`id_pegawai`)
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 8fa88edcd69090b0a5eea01ea2ee90fa7c96542d
>>>>>>> 9e12ca6522353b0c1d4800a4567ef16ff1c94835
>>>>>>> 107a1fa426f83515562b32e1a9db0fce095224d3
>>>>>>> 277bec1e9eb78dd438244e13042400bf067c15ed
>>>>>>> 238a7b7002e23cc10684b33ffa3cfc5d1adf7937
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