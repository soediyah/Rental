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

app.get('/api',function(req,res){
	res.send('Rental VPAS');
});

//tbl_pegawai
app.get('/api/tbl_pegawai', pegawaiController.get);
app.post('/api/tbl_pegawai', pegawaiController.post);
app.put('/api/tbl_pegawai/:id', pegawaiController.put);
app.delete('/api/tbl_pegawai/:id', pegawaiController.delete);

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
app.put('/tbl_pembayaran/:no_booking', pembayaranController.put);
app.delete('/tbl_pembayaran/:no_booking', pembayaranController.delete);

//tbl_kategori
app.get('/tbl_kategori', kategoriController.get);
app.post('/tbl_kategori', kategoriController.post);
app.put('/tbl_kategori/:id_kategori', kategoriController.put);
app.delete('/tbl_kategori/:id_kategori', kategoriController.delete);

//tbl_denda
app.get('/tbl_denda', dendaController.get);
app.post('/tbl_denda', dendaController.post);
app.put('/tbl_denda/:id_denda', dendaController.put);
app.delete('/tbl_denda/:id_denda', dendaController.delete);

//tbl_telepon
app.get('/tbl_telepon', teleponController.get);
app.post('/tbl_telepon', teleponController.post);
app.put('/tbl_telepon/:id_telepon', teleponController.put);
app.delete('/tbl_telepon/:id_telepon', teleponController.delete);

//tbl_pvot
app.get('/tbl_pvot', pvotController.get);
app.post('/tbl_pvot', pvotController.post);
app.put('/tbl_pvot/:id_pvot', pvotController.put);
app.delete('/tbl_pvot/:id_pvot', pvotController.delete);

<<<<<<< HEAD
//tbl_item
app.get('/tbl_item', itemController.get);
app.post('/tbl_item', itemController.post);
app.put('/tbl_item/:id_item', itemController.put);
app.delete('/tbl_item/:id_item', itemController.delete);
=======
//tbl_alamat
app.get('/tbl_alamat', alamatController.get);
app.post('/tbl_alamat', alamatController.post);
app.put('/tbl_alamat/:id_alamat', alamatController.put);
app.delete('/tbl_alamat/:id_alamat', alamatController.delete);

>>>>>>> c89428b7179aeed830c1fa14ff5a78a0f806a0db
http.listen(1999,function(){
	console.log("Connected & Listen to port 1999");
});