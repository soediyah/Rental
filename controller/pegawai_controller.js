var model = require('../model/pegawai.js');
var data ={
	"status" : "",
	"detail" : ""
};

module.exports = {
	get: 
	function(req,res){
		model.get(function (error,result){
			if(result.length == 0){
				data["status"] = "error";
				data["detail"] = error;
			}
			else{
				data["status"] = "success";
				data["detail"] = result;
			}
			res.json(data);
		});
		
		