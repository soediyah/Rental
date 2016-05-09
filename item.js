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
		
		connection.query("SELECT * from tbl_item",function(err, rows, fields){
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
	var nama_item = req.body.nama_item;
	var gambar_item = req.body.gambar_item;
	var desc_item = req.body.desc_item;
	var harga_item = req.body.harga_item;
	var id_kategori = req.body.id_kategori;
	var no_polisi = req.body.no_polisi;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!nama_item && !!gambar_item && !!desc_item && !!harga_item && !!id_kategori && !!no_polisi){
		connection.query("INSERT INTO tbl_item VALUES('',?,?,?,?,?,?)",[nama_item,gambar_item,desc_item,harga_item,id_kategori,no_polisi],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Tbl_item Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : nama_item, gambar_item, desc_item, harga_item, id_kategori, no_polisi)";
		res.json(data);
	}
},
	put: function(req,res){
	var id_item = req.params.id_item;
	var nama_item = req.body.nama_item;
	var gambar_item = req.body.gambar_item;
	var desc_item = req.body.desc_item;
	var harga_item = req.body.harga_item;
	var id_kategori = req.body.id_kategori;
	var no_polisi = req.body.no_polisi;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!id_item && !!nama_item && !!gambar_item && !!desc_item && !!harga_item && !!id_kategori && !!no_polisi){
		connection.query("UPDATE tbl_item SET nama_item=?, gambar_item=?, desc_item=?, harga_item=?, id_kategori=?, no_polisi=? WHERE id_item=?",[nama_item,gambar_item,desc_item,harga_item,id_kategori,no_polisi,id_item],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Updating data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Updated Tbl_item Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : id_item, nama_item, gambar_item, desc_item, harga_item, id_kategori, no_polisi)";
		res.json(data);
	}
},
	delete: function(req,res){
	var id_item = req.params.id_item;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!id_item){
		connection.query("DELETE FROM tbl_item WHERE id_item=?",[id_item],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error deleting data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Delete Tbl_item Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : id_item)";
		res.json(data);
	}
}
};
