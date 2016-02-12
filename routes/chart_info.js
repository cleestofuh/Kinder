var datajson = require('../data.json');

exports.giveChart = function(req, res){
  res.render('chart_info', {
    'kinderact': datajson
  });
};
