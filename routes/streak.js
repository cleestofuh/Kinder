var streakjson = require('../streak.json');


exports.giveStreak = function(req, res){
  res.render('streak', {
    'streak': streakjson
  });
};

/*
var data = JSON.parse(streakjson);
$(data[id]).click(showStreak);

function showStreak(e) {
  e.preventDefault();
  var theID = $(this).attr('id');
  var friendID = "#" + theID;
  $(friendID).find(".fr").toggle();
  console.log(theID);
}
*/