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
		var model = knex.select().table('tbl_telepon')
		.select(`tbl_telepon.id`,`no_telepon`,`no_ktp`);
		model.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		});

	},

	getid: function(Id, callback){
		var model = knex.select().table('tbl_telepon')
		.whereRaw('tbl_telepon.id = ?', [Id])
		.select(`tbl_telepon.id`,`no_telepon`,`no_ktp`);
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
		var no_telepon = req.body.no_telepon;
		var no_ktp = req.body.no_ktp;
		
		var model = knex('tbl_telepon')
		.insert({
			'no_telepon':no_telepon,
			'no_ktp':no_ktp,
			
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
		var no_telepon = req.body.no_telepon;
		var no_ktp = req.body.no_ktp;
		var model = knex('tbl_telepon')
        .where('id',Id)
        .update({
           'no_telepon': no_telepon,
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
   		var model = knex('tbl_telepon')
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
