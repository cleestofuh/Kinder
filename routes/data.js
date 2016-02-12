var datajson = require('../data.json');

exports.giveData = function(req, res){
  
	res.render('data', {kinderact:datajson["kinders"]});
};
