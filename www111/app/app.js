// The main app definition
// --> where you should load other module depdendencies
//define是引入main.js的paths
define([
	'angular',
	'angularAMD',
	'ngCordova',
	//"ui-router",

//	'angularUiRouter',

	'angular-translate',
	'angular-translate-languager',
	'ionic',
	'jquery'
	//'angularUiRouterExtra',


  //'angular-translate-languager'
], function (angular,angularAMD) {
  'use strict';

  // the app with its used plugins
var app = angular.module('app', [
'ionic', 'ngCordova', 'ngCordova.plugins.ble','pascalprecht.translate'
	//'ionic','pascalprecht.translate','ui.router', 'ngCordova','ngCordova.plugins.ble'
	  ]);
// config
	//app.config(["$stateProvider", "$urlRouterProvider", '$translateProvider',registerRoutes]);
app.config(
	function($stateProvider, $urlRouterProvider, $translateProvider){
		  // default
  $urlRouterProvider.otherwise("/app/index");
  // route
  $stateProvider
    // home
	.state('app', angularAMD.route({
	    url: '/app',
	    abstract: true,
	    templateUrl: 'app/templates/main.html',
	}))
  //运动监控
  .state('app.index', angularAMD.route({
    url: '/index',
    views: {
		'menuContent': {
        templateUrl: 'app/templates/Bracelet/SportMonitor.html',
        controller: 'SportMonitorCtrl'
		}
	},
	resolve: {
	    loadController: ['$q', '$stateParams',
	    function ($q, $stateParams)
	    {
	        // get the controller name === here as a path to Controller_Name.js
	        // which is set in main.js path {}
	        var load1 = "app/controllers/Bracelet/SportMonitorController.js";//动态加载控制器
	        var load2 = 'app/services/Bracelet/SportMonitorService.js';//动态加载服务
	        var load3 = 'lib/easy-pie-chart/dist/easypiechart.min.js';//动态加载资源js
	        var load4 = 'lib/flot/jquery.flot.js';//动态加载资源js
	        var load5 = 'app/directive/Bracelet/easypiechart.js';//动态加载指令
	        var load6 = 'app/directive/Bracelet/flotline.js';//动态加载指令

            var deferred = $q.defer();
            require([load1,load2,load3,load4,load5,load6], function () { deferred.resolve(); });
            return deferred.promise;
	    }]
	    },
	}))
  //运动历史
  .state('app.history', angularAMD.route({
	url: '/history',
	views: {
	  'menuContent': {
		templateUrl: 'app/templates/Bracelet/history.html',
		controller: 'HistoryChart'
	  }
	},
	resolve: {
	    loadController: ['$q', '$stateParams',
	    function ($q, $stateParams)
	    {
	        // get the controller name === here as a path to Controller_Name.js
	        // which is set in main.js path {}
	        var load1 = "lib/highcharts-ng/dist/highcharts-ng.js";
	        var load2 = "lib/highcharts-ng/dist/highstock.js";
	        var load3 = "app/controllers/Bracelet/SportHistoryController.js";

            var deferred = $q.defer();
            require([load1,load2,load3], function () { deferred.resolve(); });
            return deferred.promise;
	    }]
	    },
  }))
  //设置
  .state('app.settings', angularAMD.route({
	url: '/settings',
	views: {
	  'menuContent': {
		templateUrl: 'app/templates/Bracelet/settings.html',
		controller: 'SettingsCtrl'
	  }
	},
	resolve: {
	    loadController: ['$q', '$stateParams',
	    function ($q, $stateParams)
	    {
	        // get the controller name === here as a path to Controller_Name.js
	        // which is set in main.js path {}
	        var load1 = "app/controllers/Bracelet/SportSettingController.js";


            var deferred = $q.defer();
            require([load1], function () { deferred.resolve(); });
            return deferred.promise;
	    }]
	    },
  }))

  //蓝牙设置
  .state('app.ble', angularAMD.route({
	url: '/ble',
	views: {
	  'menuContent': {
		templateUrl: 'app/templates/Bracelet/ble-list.html',
		controller: 'AppBlue'
	  }
	},
	resolve: {
	    loadController: ['$q', '$stateParams',
	    function ($q, $stateParams)
	    {
	        // get the controller name === here as a path to Controller_Name.js
	        // which is set in main.js path {}
	        var load1 = "app/controllers/Bracelet/SportBlueController.js";


            var deferred = $q.defer();
            require([load1], function () { deferred.resolve(); });
            return deferred.promise;
	    }]
	    },
  }))
  //选择语言
  .state('app.languageSet', angularAMD.route({
	url: '/languageSet',
	views: {
	  'menuContent': {
		templateUrl: 'app/templates/Bracelet/language-setting.html',
		controller: 'LanguageCtrl'
	  }
	},
	resolve: {
	    loadController: ['$q', '$stateParams',
	    function ($q, $stateParams)
	    {
	        // get the controller name === here as a path to Controller_Name.js
	        // which is set in main.js path {}
	        var load1 = "app/controllers/Bracelet/SportSettingLangController.js";


            var deferred = $q.defer();
            require([load1], function () { deferred.resolve(); });
            return deferred.promise;
	    }]
	    },
  }));

	//国际化配置
	$translateProvider.useSanitizeValueStrategy('escaped');
	$translateProvider.translations('en', translationsEN);
	$translateProvider.translations('zh', translationZH);
	//$translateProvider.preferredLanguage('en');
	//$translateProvider.fallbackLanguage('en');
	$translateProvider.determinePreferredLanguage();//这个方法是获取手机默认语言设置
	$translateProvider.registerAvailableLanguageKeys(['en','zh'],{
	'en-*':'en',
	'zh-*':'zh'
	});

	}
);




app.run(function($ionicPlatform,$rootScope, $location,$timeout, $ionicHistory) {

	//注意：$cordovaToast是消息提示框，若要使用需要安装才支持。命令cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
	$ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  	});

	});

  //app.init = function() {
  return  angularAMD.bootstrap(app);     //replace angular.bootstrap(document, ['app']);
 // };
  // return the app so you can require it in other components
  //return app;
});
