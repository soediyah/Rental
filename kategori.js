
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
		
		connection.query("SELECT * from tbl_kategori",function(err, rows, fields){
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
	var nama_kategori = req.body.nama_kategori;
	var gambar_kategori = req.body.gambar_kategori;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!nama_kategori && !!gambar_kategori){
		connection.query("INSERT INTO tbl_kategori VALUES('',?,?,?)",[nama_kategori, gambar_kategori],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["Rental"] = "tbl_kategori Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : nama_kategori, gambar_kategori)";
		res.json(data);
	}
},
	put: function(req,res){
	var id = req.params.id;
	var nama_kategori = req.body.nama_kategori;
	var gambar_kategori = req.body.gambar_kategori;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!id && !!nama_kategori && !!gambar_kategori){
		connection.query("UPDATE tbl_kategori SET nama_kategori=?, gambar_kategori=? WHERE id=?",[nama_kategori,gambar_kategori,id],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Updating data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Updated tbl_kategori Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : id, nama_kategori, gambar_kategori)";
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
		connection.query("DELETE FROM tbl_kategori WHERE id=?",[id],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error deleting data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Delete tbl_kategori Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : id )";
		res.json(data);
	}
}
};
