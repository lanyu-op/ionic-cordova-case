var require = {
  baseUrl: 'app',
  paths: {
    'ionic': '../lib/ionic/js/ionic.bundle',
    'ngCordova':'../lib/ngCordova/dist/ng-cordova',
    'ocLazyLoad':'../lib/ocLazyLoad/dist/ocLazyLoad',
    'angular-translate':'../lib/angular-translate/angular-translate',
    'angular-translate-languager':'../app/services/language',
    'iuChart':"../lib/iu-echarts/src/iuChart",
    'echarts':"../lib/iu-echarts/example/libs/echarts.min",
    'jquery': '../lib/jquery/jquery',
    //'angular':'../lib/angular/angular',
  },
  // if you are using jquery you have to add a shim for ionic and add jquery as deps
  shim: {
     'ionic': {deps: ['jquery']},
    'ngCordova':['ionic'],//需要依赖ionic中的angularjs
		'ocLazyLoad': ['ionic'],//需要依赖ionic中的angularjs
		'angular-translate':['ionic'],//需要依赖ionic中的angularjs
		'iuChart':{deps: ['jquery','ionic']},
		'echarts':{deps: ['jquery','ionic']}
  }
  // sometimes you need to set the loading priority especially
  // priority: [
  //   'jquery',
  //   'ionic'
  // ]
};
