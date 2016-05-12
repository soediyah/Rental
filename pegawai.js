
var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'rental',
});

module.exports = {
	get: function(req,res){
		
		var data = {
			"error":1,
			"Rental":""
		};
		
		connection.query("SELECT * from tbl_pegawai",function(err, rows, fields){
			if(rows.length != 0){
				data["error"] = 0;
				data["Rental"] = rows;
				res.json(data);
			}else{
				data["Rental"] = 'No rental Found..';
				res.json(data);
			}
		});
	},
	post: function(req,res){
	var nama_pegawai = req.body.nama_pegawai;
	var email_pegawai = req.body.email_pegawai;
	var password_pegawai = req.body.password_pegawai;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!nama_pegawai && !!email_pegawai && !!password_pegawai){
		connection.query("INSERT INTO tbl_pegawai VALUES('',?,?,?)",[nama_pegawai,email_pegawai,password_pegawai],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Tbl_pegawai Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : nama_pegawai, email_pegawai, password_pegawai)";
		res.json(data);
	}
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
	var model = knex('tbl_pegawai')
			.whereRaw("id = ?",[id])
			.del()
			.then(function)(rows){
				callback(null, rows);
			})
			.catch(function (err)){
				callback(err)
			})
		
}
};
