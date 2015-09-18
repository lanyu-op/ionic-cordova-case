angular.module('starter.function.chartscontroller', ['iu','highcharts-ng'])

//图表列表
.controller('ChartslistCtrl', function($scope) {
     	 $scope.title="ChartsList_Lang";

})
//echart案例
.controller('EChartCtrl',['$scope','$timeout',function($scope,$timeout){
      'use strict';
      var chartProvinceApi, chartCityApi, chart2GApi, chart3GApi,
          data = [2.0, 4.9, 7.0, 23.2, 25.6, 760.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 20];
      $scope.chartProvinceOption = {
        version: 1,
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['flow(GB)', 'last week flow(GB)'],
          y: 'bottom'
        },
        toolbox: {
          show: false
        },
        grid: {
          x: 30,
          y: 10,
          x2: 10,
          y2: 55
        },
        padding: 0,
        calculable: true,
        xAxis: [
          {
            axisLabel: {
              interval: 0
            },
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitArea: {show: true}
          }
        ],
        series: [
          {
            name: 'Over All(GB)',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 760.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: 'Last Week(GB)',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          }
        ],
        onRegisterApi: function (chartApi) {
          chartProvinceApi = chartApi;
        }
      };
      $scope.chartCityOption = {
        version: 1,
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['City(GB)'],
          y: 'bottom'
        },
        toolbox: {
          show: false
        },
        grid: {
          x: 30,
          y: 10,
          x2: 10,
          y2: 55
        },
        padding: 0,
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['北京', '上海', '桂林', '大连', '南昌', '广州', '深圳', '武汉', '长沙', '哈尔滨', '南京', '西安', '拉萨']
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitArea: {show: true}
          }
        ],
        series: [
          {
            name: 'flow(GB)',
            type: 'line',
            smooth: true,
            data: data
          }],
        onRegisterApi: function (chartApi) {
          chartCityApi = chartApi;
        }
      };
      $scope.chart2GOption = {
        version: 1,
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['2G flow(GB)', '2G Last Week(GB)'],
          y: 'bottom'
        },
        toolbox: {
          show: false
        },
        grid: {
          x: 50,
          y: 10,
          x2: 10,
          y2: 55
        },
        padding: 0,
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitArea: {show: true}
          }
        ],
        series: [
          {
            name: '2G(GB)',
            type: 'line',
            smooth: true,
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 760.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '2G Last Week(GB)',
            type: 'line',
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          }
        ],
        onRegisterApi: function (chartApi) {
          chart2GApi = chartApi;
        }
      };
      $scope.chart3GOption = {
        version: 1,
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['3G网络流量(GB)', '3G网络上周流量均值(GB)'],
          y: 'bottom'
        },
        toolbox: {
          show: false
        },
        grid: {
          x: 50,
          y: 10,
          x2: 10,
          y2: 55
        },
        padding: 0,
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitArea: {show: true}
          }
        ],
        series: [
          {
            name: '3G网络流量(GB)',
            type: 'line',
            smooth: true,
            data: [12.0, 4.9, 7.0, 23.2, 25.6, 70.7, 135.6, 162.2, 32.6, 120.0, 36.4, 93.3]
          },
          {
            name: '3G网络上周流量均值(GB)',
            type: 'line',
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 30.7, 25.6, 32.2, 18.7, 18.8, 16.0, 22.3]
          }
        ],
        onRegisterApi: function (chartApi) {
          chart2GApi = chartApi;
        }
      };

      function updateData(){
        $timeout(function(){
          $scope.chartCityOption.series[0].data = getRandomData();
          $scope.chartCityOption.version++;
          updateData();
        },3000);
      }

      function getRandomData() {
        if (data.length > 0) {
          data = data.slice(1);
        }

        while (data.length < 13) {
          var prev = data.length > 0 ? data[data.length - 1] : 50;
          var y =toFix2 (prev + Math.random() * 10 - 5);
          if (y < 0) {
            y = 0;
          }

          if (y > 100) {
            y = 100;
          }

          data.push(y);
        }

       return data;
      }

      function toFix2(value){
        var temp = Math.pow(10, 2);
        return  Math.round(value*temp)/temp;
      }

      updateData();
    }])
//highcharts
.controller('HighchartsCtrl', function ($scope) {
  $scope.title="highchart示例";
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
        //zoomType:'x',
         backgroundColor: '#2dabb6',
      },
      type:'datetime',
      yAxis : {

      		 title:{
      		 text:null
   			},

			tickWidth:0,//设置刻度标签宽度
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











