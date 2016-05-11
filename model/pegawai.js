
var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'rental',
var knex = require('knex')(connection)
});

module.exports = {
	get: function(callback){
		knex.select().table('tbl_pegawai')
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		});

	},

	post: function(req, callback){
	var Id = req.params.id;
	var Nama_pegawai = req.body.nama_pegawai;
	var Email_pegawai = req.body.email_pegawai;
	var Password_pegawai = req.body.password_pegawai;
	
	knex('tbl_pegawai')
		.insert({
			'id':Id,
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
