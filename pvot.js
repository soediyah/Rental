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
		
		connection.query("SELECT * from tbl_pvot",function(err, rows, fields){
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
	var no_booking = req.body.no_booking;
	var id_denda = req.body.id_denda;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!nama_kategori && !!gambar_kategori){
		connection.query("INSERT INTO tbl_pvot VALUES('',?,?)",[no_booking, id_denda],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["Rental"] = "tbl_pvot Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : no_booking, id_denda)";
		res.json(data);
	}
},
	put: function(req,res){
	var id_pvot = req.params.id_pvot;
	var no_booking = req.body.no_booking;
	var id_denda = req.body.id_denda;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!id_pvot && !!no_booking && !!id_denda){
		connection.query("UPDATE tbl_pvot SET no_booking=?, id_denda=? WHERE id_pvot=?",[id_pvot,no_booking,id_denda],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Updating data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Updated tbl_telepon Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : id_pvot, no_booking, id_denda)";
		res.json(data);
	}
},
	delete: function(req,res){
	var id_pvot = req.params.id_pvot;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!id_telepon){
		connection.query("DELETE FROM tbl_pvot WHERE id_pvot=?",[id_pvot],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error deleting data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Delete tbl_pvot Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : id_pvot )";
		res.json(data);
	}
}
};