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
		var model = knex.select().table('tbl_alamat')
		.select(`tbl_alamat.id`,`alamat`,`no_ktp`);
		model.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		});

	},

	getid: function(Id, callback){
		var model = knex.select().table('tbl_alamat')
		.whereRaw('tbl_alamat.id = ?', [Id])
		.select(`tbl_alamat.id`,`alamat`,`no_ktp`);
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
		var alamat = req.body.alamat;
		var no_ktp = req.body.no_ktp;

		var model = knex('tbl_alamat')
		.insert({
			'alamat':alamat,
			'no_ktp':no_ktp
			
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
		var alamat = req.body.alamat;
		var no_ktp = req.body.no_ktp;
		var model = knex('tbl_alamat')
        .where('id',Id)
        .update({
        	'id':Id,
           'alamat': alamat,
			'no_ktp':no_ktp,
	
      })
         .then(function (rows){
                 callback(null, rows);
             })
         .catch(function (err){
                 callback(err)
             }); 

	},

	delete: function (Id, callback){
   		var model = knex('alamat')
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