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
var pembayaranController = require('./controller/pembayaran_controller.js');
var itemController = require('./controller/item_controller.js');
var kategoriController = require('./controller/kategori_controller.js');
var teleponController = require('./controller/telepon_controller.js');
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


//tbl_pembayaran
app.get('/api/tbl_pembayaran', pembayaranController.get);
app.get('/api/tbl_pembayaran/:no_booking', pembayaranController.getid);
app.post('/api/tbl_pembayaran', pembayaranController.post);
app.put('/api/tbl_pembayaran/:no_booking', pembayaranController.put);
app.delete('/api/tbl_pembayaran/:no_booking', pembayaranController.delete);


//tbl_item
app.get('/api/tbl_item', itemController.get);
app.get('/api/tbl_item/:id', itemController.getid)
app.post('/api/tbl_item', itemController.post);
app.put('/api/tbl_item/:id', itemController.put);
app.delete('/api/tbl_item/:id', itemController.delete);

//tbl_kategori
app.get('/api/tbl_kategori', kategoriController.get);
app.get('/api/tbl_kategori/:id', kategoriController.getid);
app.post('/api/tbl_kategori', kategoriController.post);
app.put('/api/tbl_kategori/:id', kategoriController.put);
app.delete('/api/tbl_kategori/:id', kategoriController.delete);

//tbl_telepon
app.get('/api/tbl_telepon', teleponController.get);
app.get('/api/tbl_telepon/:id', teleponController.getid);
app.post('/api/tbl_telepon', teleponController.post);
app.put('/api/tbl_telepon/:no_ktp', teleponController.put);
app.delete('/api/tbl_telepon/:no_ktp', teleponController.delete);

http.listen(1999,function(){
	console.log("Connected & Listen to port 1999");
});