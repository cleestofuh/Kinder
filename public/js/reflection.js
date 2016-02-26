$(function () {
    $('#reflectionChart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'YOUR HAPPINESS'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Charity',
                y: 56.33
            }, {
                name: 'Love',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Compassion',
                y: 10.38
            }, {
                name: 'Time',
                y: 4.77
            }, {
                name: 'Energy',
                y: 0.91
            }, {
                name: 'Health',
                y: 0.2
            }]
        }]
    });
});
