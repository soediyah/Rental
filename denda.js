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
		
		connection.query("SELECT * from tbl_denda",function(err, rows, fields){
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
	var nama_denda = req.body.nama_denda;
	var harga_denda = req.body.harga_denda;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!nama_denda && !!harga_denda){
		connection.query("INSERT INTO tbl_denda VALUES('',?,?)",[nama_denda,harga_denda],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Tbl_denda Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : nama_denda, harga_denda)";
		res.json(data);
	}
},
	put: function(req,res){
	var id_denda = req.params.id_denda;
	var nama_denda = req.body.nama_denda;
	var harga_denda = req.body.harga_denda;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!id_denda && !!nama_denda && !!harga_denda){
		connection.query("UPDATE tbl_denda SET nama_denda=?, harga_denda=? WHERE id_denda=?",[nama_denda,harga_denda,id_denda],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Updating data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Updated Tbl_denda Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : id_denda, nama_denda, harga_denda)";
		res.json(data);
	}
},
	delete: function(req,res){
	var id_denda = req.params.id_denda;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!id){
		connection.query("DELETE FROM tbl_denda WHERE id_denda=?",[id_denda],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error deleting data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Delete Tbl_denda Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : id_denda )";
		res.json(data);
	}
}
};
