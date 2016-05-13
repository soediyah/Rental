var app   = require('express')();
var http = require('http').Server(app);
var mysql = require('mysql');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//module exports
var pegawaiController = require('./controller/pegawai_controller.js');
var customerController = require('./controller/customer_controller.js');
var dendaController =  require('./controller/denda_controller.js');
<<<<<<< HEAD
var pembayaranController = require('./controller/pembayaran_controller.js');
=======
<<<<<<< HEAD
var itemController = require('./controller/item_controller.js');
=======
var kategoriController = require('./controller/kategori_controller.js');
>>>>>>> 1bb26c5b44bd6bc19851865f8743f7be77f098ab
>>>>>>> 8d677c31c07342eba72294ee93d61822492b515d
app.get('/api',function(req,res){
	res.send('Rental VPAS');
});

//tbl_pegawai
app.get('/api/tbl_pegawai/:id', pegawaiController.getid);
app.get('/api/tbl_pegawai', pegawaiController.get);
app.post('/api/tbl_pegawai', pegawaiController.post);
app.put('/api/tbl_pegawai/:id', pegawaiController.put);
app.delete('/api/tbl_pegawai/:id', pegawaiController.delete);

//tbl_customer
app.get('/api/tbl_customer', customerController.get);
app.get('/api/tbl_customer/:no_ktp', customerController.getid);
app.post('/api/tbl_customer', customerController.post);
app.put('/api/tbl_customer/:no_ktp', customerController.put);
app.delete('/api/tbl_customer/:no_ktp', customerController.delete);

//tbl_denda
app.get('/api/tbl_denda', dendaController.get);
app.get('/api/tbl_denda/:id', dendaController.getid);
app.post('/api/tbl_denda', dendaController.post);
app.put('/api/tbl_denda/:id', dendaController.put);
app.delete('/api/tbl_denda/:id', dendaController.delete);

<<<<<<< HEAD
//tbl_pembayaran
app.get('/api/tbl_pembayaran', pembayaranController.get);
app.get('/api/tbl_pembayaran/:no_booking', pembayaranController.getid);
app.post('/api/tbl_pembayaran', pembayaranController.post);
app.put('/api/tbl_pembayaran/:no_booking', pembayaranController.put);
app.delete('/api/tbl_pembayaran/:no_booking', pembayaranController.delete);


=======
<<<<<<< HEAD
//tbl_item
app.get('/api/tbl_item', itemController.get);
app.get('/api/tbl_item/:id', itemController.getid)
app.post('/api/tbl_item', itemController.post);
app.put('/api/tbl_item/:id', itemController.put);
app.delete('/api/tbl_item/:id', itemController.delete);
=======
//tbl_kategori
app.get('/api/tbl_kategori', kategoriController.get);
app.get('/api/tbl_kategori/:id', kategoriController.getid);
app.post('/api/tbl_kategori', kategoriController.post);
app.put('/api/tbl_kategori/:id', kategoriController.put);
app.delete('/api/tbl_kategori/:id', kategoriController.delete);
>>>>>>> 1bb26c5b44bd6bc19851865f8743f7be77f098ab
>>>>>>> 8d677c31c07342eba72294ee93d61822492b515d

http.listen(1999,function(){
	console.log("Connected & Listen to port 1999");
});