//加载Js完毕，执行angular
			angular.module('starter', ['ionic','ngCordova.plugins.toast','oc.lazyLoad', 'pascalprecht.translate','starter.controllers'])

			.run(function($ionicPlatform,$ionicPopup,$rootScope, $location,$timeout, $ionicHistory,$cordovaToast) {
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
				  	if($location.path()=='/app/index'){
				  		showConfirm();
				  	}else if($rootScope.$viewHistory.backView){
							$rootScope.$viewHistory.backView.go();
				  	}else{
				  		showConfirm();
				  	}

				    return false;
				}, 101);
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


				    controller: 'HomeCtrl',


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
						resolve: {
				            EChartCtrl: function($ocLazyLoad){

				                return $ocLazyLoad.load(
				                    {
				                        name: "starter.function.chartscontroller",  //controller所在的module name
				                        files: [
					"lib/highcharts-ng/dist/highcharts-ng.js",
			  	"lib/highcharts-ng/dist/highstock.js"
				                        ]//文件位置
				                    }
				                )
				            }
				    	}
				      }
				    }
				  })
				  //echarts
				  .state('app.echarts', {
				    url: '/echarts',
				    views: {
				      'menuContent': {
				        templateUrl: 'templates/charts/echarts.html',
						controller: 'EChartCtrl',
						/**
						resolve: {
						    data: function ($http) {
						        return $http.get('ticket.action?method=projectTickets').then(function (data) {
						            return data;
						        }, function () {
						            return {};
						        });
						    }
						}
						**/
				    //路由懒加载,进入该路由后，执行如下完成后加载页面。所以下面加载的文件可以执行，可以加载一些CSS和Js文件。
						resolve: {
				            EChartCtrl: function($ocLazyLoad){

				                return $ocLazyLoad.load(
				                    {
				                        name: "starter.function.chartscontroller",  //controller所在的module name
				                        files: [
				                        		"lib/iu-echarts/example/libs/echarts.min.js",
												"lib/iu-echarts/src/iuChart.js"
				                        ]//文件位置
				                    }
				                )
				            }
				    	}

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






