var datajson = require('../data.json');

exports.giveData = function(req, res){
  var newKinderYou = {
        "datamodal": "dailyModal5",
        "act": req.query.whatyoudo,
        "description": req.query.howyoufeel,
        "rating": req.query.rating
    };

  var newKinderOther = {
        "datamodal": "dailyModal5",
        "act": req.query.whatyoudo,
        "description": req.query.howyoufeel,
        "rating": req.query.rating
    };

  datajson["kinders"].push(newKinderYou);
	res.render('data', {kinderact:datajson["kinders"]});
};
