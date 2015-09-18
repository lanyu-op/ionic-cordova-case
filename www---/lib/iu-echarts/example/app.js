
/**
 * @module chart example
 * @author huk/2015.01.15
 */
var app = angular.module('example', ['iu'])
    .controller('ChartController',['$scope','$timeout',function($scope,$timeout){
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
    }]);