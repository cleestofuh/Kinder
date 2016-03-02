$('select').on(
  { "focus": function() {
      //console.log('clicked!', this, this.value);
      this.selectedIndex = -1;
    }
  , "change": function() {
      ga("send", "event", "select", "click");
      choice = $(this).val();

      document.getElementById('selectedCat').innerHTML = choice + ":";

      if(choice == "Time") {
        document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel very happy!";
      }
      else if(choice == 'Health') {
        document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel pretty happy!";
      }
      else if(choice == 'Energy') {
        document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel fairly happy!";
      }
      else if(choice == 'Other') {
        document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel somewhat happy.";
      }
      else if(choice == 'Love') {
        document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel the happiest! Keep at it!";
      }
      else if(choice == 'Charity') {
        document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel the least happy. What can you do to change this?";
      }

    }
  });


google.charts.load("44", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['GRAPES', 'YOUR HAPPINESS'],
    ['Love', 9],
    ['Time', 6.5],
    ['Energy', 5],
    ['Charity', 2],
    ['Health', 6],
    ['Other', 4]
  ]);

  var options = {
    title: 'Your Happiness',
    pieHole: 0.2,
    backgroundColor: '#E0D2E7',
    'chartArea': {'width': '80%', 'height': '80%'},
    'fontName': 'Open Sans Condensed',
    'fontSize': '16'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
