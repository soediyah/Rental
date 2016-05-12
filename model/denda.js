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
		var model = knex.select().table('tbl_denda')
		model.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		});

	},

	getid: function(Id, callback){
		var model = knex.select().table('tbl_denda')
		.whereRaw('tbl_denda.id = ?', [Id])
		.select(`tbl_denda.id`,`nama_denda`,`harga_denda`)
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
		var nama_denda = req.body.nama_denda;
		var harga_denda = req.body.harga_denda;

		var model = knex('tbl_denda')
		.insert({
			'nama_denda':nama_denda,
			'harga_denda':harga_denda
			
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
		var nama_denda = req.body.nama_denda;
		var harga_denda = req.body.harga_denda;
		var model = knex('tbl_denda')
        .where('id',Id)
        .update({
           'nama_denda': nama_denda,
			'harga_denda':harga_denda,
	
      })
         .then(function (rows){
                 callback(null, rows);
             })
         .catch(function (err){
                 callback(err)
             }); 

	},

	delete: function (Id, callback){
   		var model = knex('tbl_denda')
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
