
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
		
		connection.query("SELECT * from tbl_alamat",function(err, rows, fields){
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
	var alamat = req.body.alamat;
	var no_ktp = req.body.no_ktp;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!alamat && !!no_ktp){
		connection.query("INSERT INTO tbl_alamat VALUES('',?,?,?)",[alamat, no_ktp],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["Rental"] = "tbl_alamat Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : alamat, no_ktp)";
		res.json(data);
	}
},
	put: function(req,res){
	var id_alamat = req.params.id_alamat;
	var alamat = req.body.alamat;
	var no_ktp = req.body.no_ktp;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!id_alamat && !!alamat && !!no_ktp){
		connection.query("UPDATE tbl_alamat SET alamat=?, no_ktp=? WHERE id_alamat=?",[alamat,no_ktp,id_alamat],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Updating data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Updated tbl_alamat Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : id_alamat, alamat, no_ktp)";
		res.json(data);
	}
},
	delete: function(req,res){
	var id_alamat = req.params.id_alamat;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!id_alamat){
		connection.query("DELETE FROM tbl_alamat WHERE id_alamat=?",[id_alamat],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error deleting data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Delete tbl_alamat Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : id_alamat)";
		res.json(data);
	}
}
};