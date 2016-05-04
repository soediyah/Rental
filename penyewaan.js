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
		
		connection.query("SELECT * from tbl_penyewaan",function(err, rows, fields){
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
	var tgl_pinjam = req.body.tgl_pinjam;
	var jam_pinjam = req.body.jam_pinjam;
	var tgl_kembali = req.body.tgl_kembali;
	var jam_kembali = req.body.jam_kembali;
	var harga_sewa = req.body.harga_sewa;
	var desc_item = req.body.desc_item;
	var id_pegawai = req.body.id_pegawai;
	var id_item = req.res.id_item;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!no_ktp && !!tgl_pinjam && !!jam_pinjam && !! tgl_kembali && !! jam_kembali && !! harga_sewa && !! desc_item && !! id_pegawai && !! id_item){
		connection.query("INSERT INTO tbl_penyewaan VALUES('',?,?,?,?,?,?,?,?,?)",[no_ktp,tgl_pinjam,jam_pinjam,tgl_kembali,jam_kembali,harga_sewa,desc_item,id_pegawai,id_item],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["Rental"] = "tbl_penyewaan Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : no_ktp, tgl_pinjam, jam_pinjam, tgl_kembali, jam_kembali, harga_sewa, desc_item, id_pegawai, id_item)";
		res.json(data);
	}
},
put: function(req,res){
	var no_booking = req.params.no_booking;
	var no_ktp = req.body.no_ktp;
	var tgl_pinjam = req.body.tgl_pinjam;
	var jam_pinjam = req.body.jam_pinjam;
	var tgl_kembali = req.body.jam_kembali;
	var jam_kembali = req.body.jam_kembali;
	var harga_sewa = req.body.harga_sewa;
	var desc_item = req.body.desc_item;
	var id_pegawai = req.body.id_pegawai;
	var id_item = req.body.id_item;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!no_booking && !!no_ktp && !!tgl_pinjam && !!jam_pinjam && !!tgl_kembali && !!jam_kembali && !!harga_sewa && !!desc_item && !!id_pegawai && !!id_item){
		connection.query("UPDATE tbl_penyewaan SET no_ktp=?, tgl_pinjam=?, jam_pinjam=?, tgl_kembali=?, jam_kembali=?, harga_sewa=?, desc_item=?, id_pegawai=?, id_item=? WHERE no_booking=?",[no_ktp,tgl_pinjam,jam_pinjam,tgl_kembali,jam_kembali,harga_sewa,desc_item,id_pegawai,id_item,no_booking],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error Updating data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Updated Tbl_penyewaan Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : no_booking, no_ktp, tgl_pinjam, jam_pinjam, tgl_kembali, jam_kembali, harga_sewa, desc_item, id_pegawai, id_item)";
		res.json(data);
	}
},
delete: function(req,res){
	var no_booking = req.params.no_booking;
	var data = {
		"error":1,
		"Rental":""
	};
	if(!!id){
		connection.query("DELETE FROM tbl_penyewaan WHERE no_booking=?",[no_booking],function(err, rows, fields){
			if(!!err){
				data["Rental"] = "Error deleting data";
			}else{
				data["error"] = 0;
				data["Rental"] = "Delete Tbl_penyewaan Successfully";
			}
			res.json(data);
		});
	}else{
		data["Rental"] = "Please provide all required data (i.e : no_booking )";
		res.json(data);
	}
}


};
