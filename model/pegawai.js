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
		var model = knex.select().table('tbl_pegawai')
		.leftJoin('tbl_customer', 'tbl_pegawai.id', 'tbl_customer.id_pegawai')
		.leftJoin('tbl_penyewaan', 'tbl_pegawai.id', 'tbl_penyewaan.id_pegawai')
		.select(`tbl_pegawai.id`,`nama_pegawai`,`email_pegawai`,`password_pegawai`);
		model.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		});

	},

<<<<<<< HEAD
	getid: function(Id, callback){
		var model = knex.select().table('tbl_pegawai')
		.leftJoin('tbl_customer', 'tbl_pegawai.id', 'tbl_customer.id_pegawai')
		.leftJoin('tbl_penyewaan', 'tbl_pegawai.id', 'tbl_penyewaan.id_pegawai')
		.whereRaw('tbl_pegawai.id = ?', [Id])
=======
		getid: function(callback){
		var Id =req.params.id;

		knex.select().table('tbl_pegawai')
		.join('tbl_customer', 'tbl_pegawai.id', 'tbl_customer.id_pegawai')
		.join('tbl_penyewaan', 'tbl_pegawai.id', 'tbl_penyewaan.id_pegawai')
		.join('tbl_pembayaran', 'tbl_pegawai.id', 'tbl_pembayaran.id_pegawai')
		.whereRaw('tbl_pegawai = ?', [Id])
>>>>>>> c3e4dfd29bb511670a6a7966b4b89c901d08901a
		.select(`tbl_pegawai.id`,`nama_pegawai`,`email_pegawai`,`password_pegawai`)
		model.then(function (rows){
			callback(null, rows);
		}, function (err){
			callback(err)
		})
		 
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
	
	put: function(req,res){
		var id = req.params.id;
		var nama_pegawai = req.body.nama_pegawai;
		var email_pegawai = req.body.email_pegawai;
		var password_pegawai = req.body.password_pegawai;
		var data = {
			"error":1,
			"Rental":""
		};
		if(!!id && !!nama_pegawai && !!email_pegawai && !!password_pegawai){
			connection.query("UPDATE tbl_pegawai SET nama_pegawai=?, email_pegawai=?, password_pegawai=? WHERE id=?",[nama_pegawai,email_pegawai,password_pegawai,id],function(err, rows, fields){
				if(!!err){
					data["Rental"] = "Error Updating data";
				}else{
					data["error"] = 0;
					data["Rental"] = "Updated Tbl_pegawai Successfully";
				}
				res.json(data);
			});
		}else{
			data["Rental"] = "Please provide all required data (i.e : id, nama_pegawai, email_pegawai, password_pegawai)";
			res.json(data);
		}
	},
	delete: function(req,res){
		var id = req.params.id;
		var data = {
			"error":1,
			"Rental":""
		};
		if(!!id){
			connection.query("DELETE FROM tbl_pegawai WHERE id=?",[id],function(err, rows, fields){
				if(!!err){
					data["Rental"] = "Error deleting data";
				}else{
					data["error"] = 0;
					data["Rental"] = "Delete Tbl_pegawai Successfully";
				}
				res.json(data);
			});
		}else{
			data["Rental"] = "Please provide all required data (i.e : id )";
			res.json(data);
		}
	}
};
