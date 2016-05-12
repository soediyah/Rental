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
app.get('/api/tbl_pegawai/:id', pegawaiController.get);
app.post('/api/tbl_pegawai', pegawaiController.post);
app.put('/api/tbl_pegawai/:id', pegawaiController.put);
app.delete('/api/tbl_pegawai/:id', pegawaiController.delete);


http.listen(1999,function(){
	console.log("Connected & Listen to port 1999");
});