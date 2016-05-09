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
		
		connection.query("SELECT * from tbl_telepon",function(err, rows, fields){
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
	var no_telepon = req.body.no_telepon;
	var no_ktp = req.body.no_ktp;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!nama_kategori && !!gambar_kategori){
		connection.query("INSERT INTO tbl_telepon VALUES('',?,?)",[no_telepon, no_ktp],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["Rental"] = "tbl_telepon Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : no_telepon, no_ktp)";
		res.json(data);
	}
},
	put: function(req,res){
	var id = req.params.id;
	var no_telepon = req.body.no_telepon;
	var no_ktp = req.body.no_ktp;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!id && !!nama_kategori && !!gambar_kategori){
		connection.query("UPDATE tbl_telepon SET no_telepon=?, no_ktp=? WHERE id=?",[no_telepon,no_ktp,id],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Updating data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Updated tbl_telepon Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : id, no_telepon, no_ktp)";
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
		connection.query("DELETE FROM tbl_telepon WHERE id=?",[id],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error deleting data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Delete tbl_telepon Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : id )";
		res.json(data);
	}
}
};