define(['app'], function (app) {
app.controller('HistoryChart', function($scope) {
  $scope.title="8月30日活动记录";
  $scope.chartTypes = [
    {"id": "line", "title": "Line"},
    {"id": "spline", "title": "Smooth line"},
    {"id": "area", "title": "Area"},
    {"id": "areaspline", "title": "Smooth area"},
    {"id": "column", "title": "Column"},
    {"id": "bar", "title": "Bar"},
    {"id": "pie", "title": "Pie"},
    {"id": "scatter", "title": "Scatter"}
  ];

  $scope.dashStyles = [
    {"id": "Solid", "title": "Solid"},
    {"id": "ShortDash", "title": "ShortDash"},
    {"id": "ShortDot", "title": "ShortDot"},
    {"id": "ShortDashDot", "title": "ShortDashDot"},
    {"id": "ShortDashDotDot", "title": "ShortDashDotDot"},
    {"id": "Dot", "title": "Dot"},
    {"id": "Dash", "title": "Dash"},
    {"id": "LongDash", "title": "LongDash"},
    {"id": "DashDot", "title": "DashDot"},
    {"id": "LongDashDot", "title": "LongDashDot"},
    {"id": "LongDashDotDot", "title": "LongDashDotDot"}
  ];

  $scope.chartSeries = [
    {"name": '总和',
     "data": [
                [Date.UTC(2010, 1, 1), 29.9],
                [Date.UTC(2010, 1, 2), 71.5],
                [Date.UTC(2010, 1, 3), 33.4],
                [Date.UTC(2010, 1, 6), 129.2],
                [Date.UTC(2010, 1, 7), 12.0],
                [Date.UTC(2010, 1, 8), 234.0],
                [Date.UTC(2010, 1, 9), 29.9],
                [Date.UTC(2010, 1, 10), 71.5],
                [Date.UTC(2010, 1, 11), 106.4],
                [Date.UTC(2010, 1, 12), 31.2],
                [Date.UTC(2010, 1, 13), 144.0],
                [Date.UTC(2010, 1, 14), 233.0],
                [Date.UTC(2010, 2, 1), 29.9],
                [Date.UTC(2010, 2, 2), 71.5],
                [Date.UTC(2010, 2, 3), 106.4],
                [Date.UTC(2010, 2, 6), 129.2],
                [Date.UTC(2010, 2, 7), 144.0],
                [Date.UTC(2010, 2, 8), 176.0],
             ]

    }

  ];

  $scope.chartStack = [
    {"id": '', "title": "No"},
    {"id": "normal", "title": "Normal"},
    {"id": "percent", "title": "Percent"}
  ];

  $scope.addPoints = function () {
    var seriesArray = $scope.chartConfig.series;
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
  };

  $scope.addSeries = function () {
    var rnd = []
    for (var i = 0; i < 10; i++) {
      rnd.push(Math.floor(Math.random() * 20) + 1)
    }
    $scope.chartConfig.series.push({
      data: rnd
    })
  }

  $scope.removeRandomSeries = function () {
    var seriesArray = $scope.chartConfig.series;
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray.splice(rndIdx, 1)
  }

  $scope.removeSeries = function (id) {
    var seriesArray = $scope.chartConfig.series;
    seriesArray.splice(id, 1)
  }

  $scope.toggleHighCharts = function () {
    this.chartConfig.useHighStocks = !this.chartConfig.useHighStocks
  }

  $scope.replaceAllSeries = function () {
    var data = [
      { name: "first", data: [10] },
      { name: "second", data: [3] },
      { name: "third", data: [13] }
    ];
    $scope.chartConfig.series = data;
  };

  $scope.chartConfig = {
    options: {

      chart: {
        type: 'line',
         zoomType:'x',
         backgroundColor: '#2dabb6',
      },
      type:'datetime',
      yAxis : {

      		 title:{
      		 text:null
   			},

			tickWidth:0,    //设置刻度标签宽度
			lineWidth:0,//设置坐标宽度
		    gridLineWidth: 0,
		    labels:{
                enabled:false //设置刻度是否显示
            }

		},
		xAxis: {

			//tickInterval: 5,间隔值
		    type: 'datetime',//定义x轴上日期的显示格式
		    //lineWidth:0,//设置刻度线不可见
			labels:{
				style:{"color":"#ffffff"},
				//step:2,//空间上间隔2个刻度
				 formatter:function(){
				 	return  Highcharts.dateFormat('%m/%d', this.value);
					//	 var vDate=new Date(this.value);
	    	          //   return vDate.getFullYear()+"-"+(vDate.getMonth()+1)+"-"+vDate.getDate();
				  }

			}

		   // categories: categories,
		},

      plotOptions: {

        series: {
        	marker:{
				//fillColor:'none' //设置所有数据点的颜色值
				//enabled: false
			},
        	color:'#F6B13A',
        	cursor:'pointer',
        	allowPointSelect: true,//点可选中
			events:{
				click: function(event) {
				//alert("点击了："+this.name);
				alert(event.point.category);
				}
			}
          //stacking: ''
        }
      }
    },
    series: $scope.chartSeries,
    title: {
      text: null
    },

    credits: {
      enabled: false
    },
    exporting:{
      enabled:false
     },
    loading: false,
    size: {},
    useHighStocks:false//时间模式
  }

  $scope.reflow = function () {
    $scope.$broadcast('highchartsng.reflow');
  };

   });
});
