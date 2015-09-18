/*global require*/
'use strict';

require.config({
	paths: {
		//要加载的路径定义
		// 3rd party libs
		'ionic': '../lib/ionic/js/ionic.bundle',
		'ocLazyLoad':'../lib/ocLazyLoad/dist/ocLazyLoad',
		//'cordova': '../cordova',
		'ngCordova':'../lib/ngCordova/dist/ng-cordova',
		'angular-translate':'../lib/angular-translate/angular-translate',
		// modules
		//'core': 'core/core-module',
		//'playlists': 'features/playlists/playlists-module',

		// controllers
		//'home-controller': 'core/controllers/home-controller',
		//'playlists-controller': 'features/playlists/controllers/playlists-controller',
		//service
		//'services':'features/playlists/services',
		// Main entry
		'app': 'app'
	},
	shim: {
		//angular: {
		//	exports: 'angular'
		//}
		'ngCordova':['ionic'],//需要依赖ionic中的angularjs
		'ocLazyLoad': ['ionic'],//需要依赖ionic中的angularjs
		'angular-translate':['ionic'],//需要依赖ionic中的angularjs
		//定义App的核心依赖项
		'app': ['ionic', // 3rd party libs
		 //'core',
		'angular-translate',
		 //'playlists', // modules
		 //'playlists-controller',
		 'ocLazyLoad',
		 'ngCordova',
		 //'services'
		]
	},
	//deps: ['app']
});
require([
	//加载第一层js，只下载了ionic和app的基本执行js文件
	'app'
	//'angular'
], function () {
	require([
		//加载第二层js，加载翻译库
		//'controllers/todo',
		//'directives/todoFocus',
		//'directives/todoEscape',
		//'services/todoStorage'
		'../js/controllers',
		'../js/core/language'
	], function () {
		//启动主模块，加载各个控制器
		//angular
		//	.module('starter1', []);
			//.controller('TodoController', todoCtrl);
		angular.bootstrap(document, ['starter']);
	});
});