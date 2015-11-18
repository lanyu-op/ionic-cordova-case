require.config({
  baseUrl: 'app',
  paths: {
    'ionic': '../lib/ionic/js/ionic.bundle',
    'ngCordova':'../lib/ngCordova/dist/ng-cordova',
    'ocLazyLoad':'../lib/ocLazyLoad/dist/ocLazyLoad',
    'angular-translate':'../lib/angular-translate/angular-translate',
    'angular-translate-languager':'services/language',
    //'iuChart':"../lib/iu-echarts/src/iuChart",
    //'echarts':"../lib/iu-echarts/example/libs/echarts.min",
    'jquery': '../lib/jquery/jquery',
    'angularzh':'../lib/angular/angular-locale_zh-ch',
    //
    'angularAMD':'../lib/angularAMD/angularAMD.min', //for lazy load
    'ngload':'../lib/angularAMD/ngload.min', //for lazy load
    'angularUiRouterExtra':'../lib/ui-router-extra/release/ct-ui-router-extras.min', //for lazy load
    'ui-router':'../lib/ionic/js/angular-ui/angular-ui-router',
    //'angular-route': '../lib/angular-ui-router',
    'angular':'../lib/ionic/js/angular/angular',
    'lazy-image':'../lib/angular-lazy-image/lazy-image',
    'file-upload':'../lib/ng-file-upload/ng-file-upload',
    'moment':'../lib/moment/min/moment.min',
    'angular-ui-calendar':'../lib/angular-ui-calendar/src/calendar',
    'fullcalendar':'../lib/fullcalendar/dist/fullcalendar.min',
    'gcal':'../lib/fullcalendar/dist/gcal',
    'angular-bootstrap':'../lib/angular-bootstrap/ui-bootstrap-tpls',
    'angularCss':'../lib/angular-css/angular-css.min',
    'angular-amap':'../lib/angular-amap/angular-amap',//高德地图
    'angular-amap-map':'../lib/angular-amap/angular-amap-map',//高德地图
    'angular-amap-toolbar':'../lib/angular-amap/angular-amap-toolbar',//高德地图

  },
  // if you are using jquery you have to add a shim for ionic and add jquery as deps
  shim: {
    'angular-ui-calendar':['ionic'],
    'angular-bootstrap':['ionic'],
    'gcal':['fullcalendar'],
    'angularCss':['ionic'],
    'angularzh':['ionic'],
    //'ionic': {deps: ['jquery']},
    //'ngCordova':['ionic'],//需要依赖ionic中的angularjs
		'ocLazyLoad': ['ionic'],//需要依赖ionic中的angularjs
		//'angular-translate':['ionic'],//需要依赖ionic中的angularjs
		//'iuChart':{deps: ['jquery','ionic']},
		//'echarts':{deps: ['jquery','ionic']},
		'file-upload': ['ionic'],
		 "angular": {exports: "angular" },
		//'angularAMD':["ionic"],
    //'ui-router':  ["ionic"],
    //'ngload':{
    //    deps:['angularAMD']
    //},
    'angular-amap':['ionic'],
    'angular-amap-map':['angular-amap'],
    'angular-amap-toolbar':['angular-amap'],
    'ngCordova':['ionic'],//需要依赖ionic中的angularjs
    'angular-translate':['ionic'],//需要依赖ionic中的angularjs
    'lazy-image':['ionic']
    //'angularUiRouterExtra':{
    //    deps:['ionic']
   // }
  },
  deps:['app']
  // sometimes you need to set the loading priority especially
  // priority: [
  //   'jquery',
  //   'ionic'
  // ]
});
