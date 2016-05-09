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

	connection.query("SELECT * from tbl_pembayaran",function(err, rows, fields){
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
	var harga_sewa = req.body.harga_sewa;
	var total_denda = req.body.total_denda;
	var tgl_pembayaran = req.body.tgl_pembayaran;
	var id_pegawai = req.body.id_pegawai;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!harga_sewa && !!total_denda && !!tgl_pembayaran && !!id_pegawai){
		connection.query("INSERT INTO tbl_pembayaran VALUES('',?,?,?,?)",[harga_sewa,total_denda,tgl_pembayaran,id_pegawai],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["Rental"] = "tbl_pembayaran Added Successfully";
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
	var harga_sewa = req.body.harga_sewa;
	var total_denda = req.body.total_denda;
	var tgl_pembayaran = req.body.tgl_pembayaran;
	var id_pegawai = req.body.id_pegawai;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!id && !!harga_sewa && !!total_denda && !!tgl_pembayaran && !!id_pegawai){
		connection.query("UPDATE tbl_pembayaran SET harga_sewa=?, total_denda=?, tgl_pembayaran=?, id_pegawai=? WHERE id=?",[harga_sewa,total_denda,tgl_pembayaran,id_pegawai,id],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Updating data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Updated tbl_pembayaran Successfully";
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
		connection.query("DELETE FROM tbl_pembayaran WHERE id=?",[id],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error deleting data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Delete tbl_pembayaran Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : id )";
		res.json(data);
	}
}
};
