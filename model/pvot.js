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
		var model = knex.select().table('tbl_pvot')
		model.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		});

	},

	getid: function(Id, callback){
		var model = knex.select().table('tbl_pvot')
		.whereRaw('tbl_pvot.id = ?', [Id])
		.select(`tbl_pvot.id`,`id_pembayaran`,`id_denda`)
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
		var id_pembayaran = req.body.id_pembayaran;
		var id_denda = req.body.id_denda;

		var model = knex('tbl_pvot')
		.insert({
			'id_pembayaran':id_pembayaran,
			'id_denda':id_denda
			
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
		var No_booking = req.body.no_booking;
		var Id_denda = req.body.id_denda;
		var model = knex('tbl_pvot')
        .where('id',Id)
        .update({
           'no_booking': No_booking,
			'id_denda':Id_denda,
      })
         .then(function (rows){
                 callback(null, rows);
             })
         .catch(function (err){
                 callback(err)
             }); 

	},

	delete: function (Id, callback){
   		var model = knex('tbl_pvot')
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
