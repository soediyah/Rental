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
		.leftJoin('tbl_telepon', 'tbl_telepon.no_ktp', 'tbl_customer.no_ktp')
		.select(`tbl_customer.no_ktp`,`nama_customer`,`id_pegawai`);
		model.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		});

	},

	getid: function(no_ktp, callback){
		var model = knex.select().table('tbl_customer')
		.leftJoin('tbl_telepon', 'tbl_telepon.no_ktp', 'tbl_customer.no_ktp')
		.whereRaw('tbl_customer.no_ktp = ?', [no_ktp])
		.select(`tbl_customer.no_ktp`,`nama_customer`,`id_pegawai`)
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
		var Nama_pegawai = req.body.nama_pegawai;
		var Email_pegawai = req.body.email_pegawai;
		var Password_pegawai = req.body.password_pegawai;

		var model = knex('tbl_pegawai')
		.insert({
			'nama_pegawai':Nama_pegawai,
			'email_pegawai':Email_pegawai,
			'password_pegawai':Password_pegawai
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		})
	},
	
	put: function(req, callback){
		var Id = req.params.id
		var Nama_pegawai = req.body.nama_pegawai;
		var Email_pegawai = req.body.email_pegawai;
		var Password_pegawai = req.body.password_pegawai;
		var model = knex('tbl_pegawai')
        .where('id',Id)
        .update({
           'nama_pegawai': Nama_pegawai,
			'email_pegawai':Email_pegawai,
			'password_pegawai':Password_pegawai
      })
         .then(function (rows){
                 callback(null, rows);
             })
         .catch(function (err){
                 callback(err)
             }); 

	},

	delete: function (Id, callback){
   		var model = knex('tbl_pegawai')
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