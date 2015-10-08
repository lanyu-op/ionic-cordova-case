window.siteurl="http://www.360lzy.com/markethelper/lanyu_sport/";
define([
	'angular',
	'angularAMD',
	'ngCordova',
	'angular-translate',
	'angular-translate-languager',
	'ionic',
	'jquery',
	'ocLazyLoad'
	//'angularUiRouterExtra',
], function (angular,angularAMD) {
'use strict';
// the app with its used plugins
var app = angular.module('app', [
'ionic', 'ngCordova', 'ngCordova.plugins.ble','pascalprecht.translate','oc.lazyLoad'
	//'ionic','pascalprecht.translate','ui.router', 'ngCordova','ngCordova.plugins.ble'
]);
// config
app.config(function($stateProvider, $urlRouterProvider, $translateProvider,$httpProvider){

// default
$urlRouterProvider.otherwise("/app/index");
$stateProvider
//入口
.state('app', angularAMD.route({
	url: '/app',
	abstract: true,
	templateUrl: 'app/templates/main.html',
	resolve: {
	loadController: ['$q', '$stateParams',
	function ($q, $stateParams)
	{
	    // get the controller name === here as a path to Controller_Name.js
	    // which is set in main.js path {}
	    var load1 = "app/controllers/MainController.js";
        var load2 = "app/common/sha1.js";
	    var deferred = $q.defer();
	    require([load1,load2], function () { deferred.resolve(); });
	    return deferred.promise;
	    }]
	},
	controllerProvider: function ($stateParams)
	{
	    // get the controller name === here as a dynamic controller Name
	   // var controllerName = controllerNameByParams($stateParams);
	    return "MainCtrl";
	}
}))
//首页
.state('app.index', angularAMD.route({
	url: '/index',
	views: {
	  'menuContent': {
	  	templateUrl: 'app/templates/firstindex.html'
	  }
	}
}))
//图表列表
.state('app.chartslist', angularAMD.route({
	url: '/chartslist',
	views: {
	  'menuContent': {
	    templateUrl: 'app/templates/charts/chartslist.html',
		controller: 'ChartslistCtrl'
	  }
	},
	resolve: {
	    loadController: ['$q', '$stateParams',
        function ($q, $stateParams)
        {
            // get the controller name === here as a path to Controller_Name.js
            // which is set in main.js path {}
            var controllerName = "app/controllers/frameworkcontroller1.js";
            var deferred = $q.defer();
            require([controllerName], function () { deferred.resolve(); });
            return deferred.promise;
        }]
	}
}))
//highchart图
.state('app.highchart', angularAMD.route({
	url: '/highchart',
	views: {
	  'menuContent': {
		templateUrl: 'app/templates/charts/highcharts.html',
		controller: 'HighchartChart'
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
	        var load3 = "app/controllers/HighchartController.js";
            var deferred = $q.defer();
            require([load1,load2,load3], function () { deferred.resolve(); });
            return deferred.promise;
		}]
	}
}))
//设备列表
.state('app.devicelist', angularAMD.route({
	url: '/devicelist',
	views: {
	  'menuContent': {
	    templateUrl: 'app/templates/device/devicelist.html'
		//controller: 'DevicelistCtrl'
	   }
	}
}))
//功能列表
.state('app.functionlist', angularAMD.route({
	url: '/functionlist',
	views: {
	  'menuContent': {
	    templateUrl: 'app/templates/function/functionlist.html'
		//controller: 'FunctionlistCtrl'
	   }
	}
}))
//sqlite示例sqlite
.state('app.sqlite', angularAMD.route({
	    url: '/sqlite',
	    views: {
	      'menuContent': {
	        templateUrl: 'app/templates/function/sqlite.html',
			controller: 'SqliteCtrl'
	      }
	    },
		resolve: {
		    loadController: ['$q', '$stateParams',
		    function ($q, $stateParams)
		    {
		        // get the controller name === here as a path to Controller_Name.js
		        // which is set in main.js path {}
		        var load1 = "app/controllers/SqliteController.js";
	            var deferred = $q.defer();
	            require([load1], function () { deferred.resolve(); });
	            return deferred.promise;
		    }]
		}
}))
//圈子
.state('app.discuss', angularAMD.route({
	    url: '/discuss',
	    views: {
	      'menuContent': {
	        templateUrl: 'app/templates/discuss/dsindex.html',
			controller: 'DiscussCtrl'
	      }
	    },
		resolve: {
		    delay: ['$q', '$stateParams','$ocLazyLoad',
		    function ($q, $stateParams,$ocLazyLoad)
		    {
		        // get the controller name === here as a path to Controller_Name.js
		        // which is set in main.js path {}
//加载样式,JS加载交给requirejs管理。
				$ocLazyLoad.load(
					[
                        {
                            name: 'css',
                            insertBefore: '#app-level',
                            files: [
                                'css/discuss.css',
                            ]
                        }
                    ]
				);
//requirejs加载js
		        var load1 = "app/controllers/discuss/DsMainController.js";
	            var deferred = $q.defer();
	            require([load1], function () { deferred.resolve(); });

	            return deferred.promise;
		    }]
		}
}))

//选择语言
.state('app.languageSet', angularAMD.route({
	url: '/languageSet',
	views: {
	  'menuContent': {
		templateUrl: 'app/templates/function/language-setting.html',
		controller: 'LanguageCtrl'
	  }
	},
	resolve: {
	    loadController: ['$q', '$stateParams',
	    function ($q, $stateParams)
	    {
	        // get the controller name === here as a path to Controller_Name.js
	        // which is set in main.js path {}
	        var load1 = "app/controllers/functioncontroller.js";
            var deferred = $q.defer();
            require([load1], function () { deferred.resolve(); });
            return deferred.promise;
	    }]
	}
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
});
app.run(function($ionicPlatform, $ionicPopup,$rootScope, $location,$timeout, $ionicHistory) {
	function showConfirm() {
    var confirmPopup = $ionicPopup.confirm({
        title: '<strong>退出应用?</strong>',
        template: '你确定要退出应用吗?',
        okText: '退出',
        cancelText: '取消'
    });
    confirmPopup.then(function (res) {
        if (res) {
            ionic.Platform.exitApp();
        } else {
            // Don't close
        }
    });
  	}
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
	//双击退出
	$ionicPlatform.registerBackButtonAction(function (e) {
		e.preventDefault();
	    //判断处于哪个页面时退出
	  	//if($location.path()=='/app/index'){
	  	showConfirm();
	  	//}else
	  	//if($rootScope.$viewHistory.backView){
		//	$rootScope.$viewHistory.backView.go();
	  	//}else{
	  	//	showConfirm();
	  	//}
	    return false;
	}, 101);
  });
  return  angularAMD.bootstrap(app);     //replace angular.bootstrap(document, ['app']);

});
