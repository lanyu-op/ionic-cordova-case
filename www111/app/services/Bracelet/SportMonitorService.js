define([
  'app'
], function (app) {
  'use strict';
//创建虚拟历史数据列表
	app.service("historyList", function(){
	        return [
	                {
	                    "startTime":'09:11',
	                    "endTime":'09:26',
	                    "sportTime":15,
	                    "distance":708,
	                    "calorie":20,
	                    "sportType":1//1是走  2是跑
	                } ,
	                {
	                    "startTime":'09:11',
	                    "endTime":'09:26',
	                    "sportTime":15,
	                    "distance":708,
	                    "calorie":20,
	                    "sportType":1//1是走  2是跑
	                } ,
	                {
	                    "startTime":'09:11',
	                    "endTime":'09:26',
	                    "sportTime":15,
	                    "distance":708,
	                    "calorie":20,
	                    "sportType":1//1是走  2是跑
	                } ,
	                {
	                    "startTime":'09:11',
	                    "endTime":'09:26',
	                    "sportTime":15,
	                    "distance":708,
	                    "calorie":20,
	                    "sportType":1//1是走  2是跑
	                } ,
	                {
	                    "startTime":'09:11',
	                    "endTime":'09:26',
	                    "sportTime":15,
	                    "distance":708,
	                    "calorie":20,
	                    "sportType":1//1是走  2是跑
	                } ,
	            ]
	});
	app.constant('heartRate',{service: '180d', measurement: '2a37'});
  app.constant('$ionicLoadingConfig', {template: '正在加载'});
});

