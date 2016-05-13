var mysql = require('mysql');
var knex = require('knex')({
	client: 'mysql',
	connection: {
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'rental'
	}
});

module.exports = {
	get: function(callback){
		var model = knex.select().table('tbl_item')
		.select(`tbl_item.id`,`nama_item`,`gambar_item`,`desc_item`,`harga_sewa`,`id_kategori`,`no_polisi`);
		model.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		});

	},

	getid: function(Id, callback){
		var model = knex.select().table('tbl_item')
		.whereRaw('tbl_item.id = ?', [Id])
		.select(`tbl_item.id`,`nama_item`,`gambar_item`,`desc_item`,`harga_sewa`,`id_kategori`,`no_polisi`);
		model.then(function (rows){
			callback(null, rows);
		}, function (err){
			callback(err)
		})
		.catch(function (err){
			callback(err)
		});
		 
	},

	post: function(req, callback){
		var nama_item = req.body.nama_item;
		var gambar_item = req.body.gambar_item;
		var desc_item = req.body.desc_item;
		var harga_sewa = req.body.harga_sewa;
		var id_kategori = req.body.id_kategori;
		var no_polisi = req.body.no_polisi;

		var model = knex('tbl_item')
		.insert({
			'nama_item':nama_item,
			'gambar_item':gambar_item,
			'desc_item':desc_item,
			'harga_sewa':harga_sewa,
			'id_kategori':id_kategori,
			'no_polisi':no_polisi
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		})
	},
	
	put: function(req, callback){
		var Id = req.params.id
		var nama_item = req.body.nama_item;
		var gambar_item = req.body.gambar_item;
		var desc_item = req.body.desc_item;
		var harga_sewa = req.body.harga_sewa;
		var id_kategori = req.body.id_kategori;
		var no_polisi = req.body.no_polisi;
		
		var model = knex('tbl_item')
        .where('id',Id)
        .update({
           'nama_item':nama_item,
			'gambar_item':gambar_item,
			'desc_item':desc_item,
			'harga_sewa':harga_sewa,
			'id_kategori':id_kategori,
			'no_polisi':no_polisi
		})
         .then(function (rows){
                 callback(null, rows);
             })
         .catch(function (err){
                 callback(err)
             }); 

	},

	delete: function (Id, callback){
   		var model = knex('tbl_item')
        .where('id' ,Id)
        .del()
        .then(function (rows){
                callback(null, rows);
            })
        .catch(function (err){
                callback(err)
            }); 

	}

}
