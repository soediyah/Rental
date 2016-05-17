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
		var model = knex.select().table('tbl_kategori')
		.select(`tbl_kategori.id`,`nama_kategori`,`gambar_kategori`);
		model.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		});

	},

	getid: function(Id, callback){
		var model = knex.select().table('tbl_kategori')
		.whereRaw('tbl_kategori.id = ?', [Id])
		.select(`tbl_kategori.id`,`tbl_kategori.nama_kategori`,`tbl_kategori.gambar_kategori`)
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
		var nama_kategori = req.body.nama_kategori;
		var gambar_kategori = req.body.gambar_kategori;
		
		var model = knex('tbl_kategori')
		.insert({
			'nama_kategori':nama_kategori,
			'gambar_kategori':gambar_kategori,
			
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
		var nama_kategori = req.body.nama_kategori;
		var gambar_kategori = req.body.gambar_kategori;
		var model = knex('tbl_kategori')
        .where('id',Id)
        .update({
           'nama_kategori': nama_kategori,
			'gambar_kategori':gambar_kategori,
	      })
         .then(function (rows){
                 callback(null, rows);
             })
         .catch(function (err){
                 callback(err)
             }); 

	},

	delete: function (Id, callback){
   		var model = knex('tbl_kategori')
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
