var friendNumber = 0;
var streakjson = require('../streak.json');

var data = JSON.parse(streakjson);
$(data[id]).click(showStreak);

function showStreak(e) {
  e.preventDefault();
  var theID = $(this).attr('id');
  var friendID = "#" + theID;
  $(friendID).find(".fr").toggle();
  console.log(theID);
}

