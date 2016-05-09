var app   = require('express')();
var http = require('http').Server(app);
var mysql = require('mysql');
var bodyParser = require("body-parser");
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'rental',
});

var pegawaiController = require('./pegawai');
var customerController = require('./customer');
var penyewaanController = require('./penyewaan');
var pembayaranController = require('./pembayaran');
var kategoriController = require('./kategori');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
	var data = {
		"Data":""
	};
	data["Data"] = "Welcome to Rental Mobil...";
	res.json(data);
});

//tbl_pegawai
app.get('/tbl_pegawai', pegawaiController.get);
app.post('/tbl_pegawai', pegawaiController.post);
app.put('/tbl_pegawai/:id', pegawaiController.put);
app.delete('/tbl_pegawai/:id', pegawaiController.delete);

//tbl_customer
app.get('/tbl_customer', customerController.get);
app.post('/tbl_customer', customerController.post);
app.put('/tbl_customer/:id', customerController.put);
app.delete('/tbl_customer/:id', customerController.delete);

//tbl_penyewaan
app.get('/tbl_penyewaan', penyewaanController.get);
app.post('/tbl_penyewaan', penyewaanController.post);
app.put('/tbl_penyewaan/:id', penyewaanController.put);
app.delete('/tbl_penyewaan/:id', penyewaanController.delete);

//tbl_pembayaran
app.get('/tbl_pembayaran', pembayaranController.get);
app.post('/tbl_pembayaran', pembayaranController.post);
app.put('/tbl_pembayaran/:id', pembayaranController.put);
app.delete('/tbl_pembayaran/:id', pembayaranController.delete);

//tbl_kategori
app.get('/tbl_kategori', kategoriController.get);
app.post('/tbl_kategori', kategoriController.post);
app.put('/tbl_kategori/:id', kategoriController.put);
app.delete('/tbl_kategori/:id', kategoriController.delete);


http.listen(1999,function(){
	console.log("Connected & Listen to port 1999");
});