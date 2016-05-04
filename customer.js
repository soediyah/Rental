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

	connection.query("SELECT * from tbl_customer",function(err, rows, fields){
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
	var no_ktp = req.body.no_ktp;
	var nama_customer = req.body.nama_customer;
	var id_pegawai = req.body.id_pegawai;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!no_ktp && !!nama_customer && !!id_pegawai){
		connection.query("INSERT INTO tbl_customer VALUES(?,?,?)",[no_ktp,nama_customer,id_pegawai],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Tbl_customer Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : no_ktp, nama_customer, id_pegawai)";
		res.json(data);
	}
},
	put: function(req,res){
	var no_ktp = req.params.no_ktp;
	var nama_customer = req.body.nama_customer;
	var id_pegawai = req.body.id_pegawai;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!no_ktp && !!nama_customer && !!id_pegawai){
		connection.query("UPDATE tbl_customer SET nama_customer=?, id_pegawai=? WHERE no_ktp=?",[nama_customer,id_pegawai,no_ktp],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Updating data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Updated Tbl_customer Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : no_ktp, nama_customer, id_pegawai)";
		res.json(data);
	}
},
	delete: function(req,res){
	var no_ktp = req.params.no_ktp;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!no_ktp){
		connection.query("DELETE FROM tbl_customer WHERE no_ktp=?",[no_ktp],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error deleting data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Delete Tbl_customer Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : no_ktp )";
		res.json(data);
	}
}
};



