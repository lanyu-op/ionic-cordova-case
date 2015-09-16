// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'pascalprecht.translate','starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
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
})

.config(function($stateProvider, $urlRouterProvider,$translateProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
	  .state('app', {
	    url: '/app',
	    abstract: true,
	    templateUrl: 'templates/main.html',
	    controller: 'HomeCtrl'
	  })
  //首页
	  .state('app.index', {
	    url: '/index',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/firstindex.html',

	      }
	    }
	  })
	  //图表列表
	  .state('app.chartslist', {
	    url: '/chartslist',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/charts/chartslist.html',
					controller: 'ChartslistCtrl'
	      }
	    }
	  })
	  //设备列表
	  .state('app.devicelist', {
	    url: '/devicelist',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/device/devicelist.html',
					controller: 'DevicelistCtrl'
	      }
	    }
	  })
	  //功能列表
	  .state('app.functionlist', {
	    url: '/functionlist',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/function/functionlist.html',
					controller: 'FunctionlistCtrl'
	      }
	    }
	  })
	  //highcharts
	  .state('app.highcharts', {
	    url: '/highcharts',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/charts/highcharts.html',
					//controller: 'FunctionlistCtrl'
	      }
	    }
	  })
	  //echarts
	  .state('app.echarts', {
	    url: '/echarts',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/charts/echarts.html',
					//controller: 'FunctionlistCtrl'
	      }
	    }
	  })
	  //国际化
    .state('app.languageSettings', {
        url: '/languageSet',
        views: {
            'menuContent': {
                templateUrl: 'templates/function/language-setting.html',
                controller: 'LanguageCtrl'
            }
        }
    })
	  ;
		//国际化配置
		$translateProvider.translations('en', translationsEN);
		$translateProvider.translations('zh', translationZH);
		//$translateProvider.preferredLanguage('en');
		//$translateProvider.fallbackLanguage('en');
		$translateProvider.determinePreferredLanguage();//这个方法是获取手机默认语言设置
		$translateProvider.registerAvailableLanguageKeys(['en','zh'],{
			'en-*':'en',
			'zh-*':'zh'
		}
		);
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/index');

});
