var datajson = require('../public/data.json');
var i = 5;
var j = 5;
exports.giveData = function(req, res){

  var newKinderYou = {
        "datamodal": "ykModal" + i,
        "act": req.query.whatyoudo,
        "description": req.query.howyoufeel,
        "rating": req.query.rating
    };

  var newKinderOther = {
        "datamodal": "okModal5" + j,
        "act": req.query.whatyoudoO,
        "description": req.query.howyoufeelO,
        "rating": req.query.ratingO
    };

  datajson["yourkinders"].push(newKinderYou);
  datajson["otherkinders"].push(newKinderOther);
  i++;
  j++;
	res.render('data', {kinderact:datajson["yourkinders"]});
};

exports.projectInfo = function (req, res) {
  var projectID = req.params.datamodal;
  console.log(projectID);
  console.log("hello");

  var project = datajson[1];
  console.log(datajson[1]);
  res.json(project);
}
