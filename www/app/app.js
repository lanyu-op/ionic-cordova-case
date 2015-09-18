// The main app definition
// --> where you should load other module depdendencies
//define是引入main.js的paths
define([
  'ionic',
  'ngCordova',
  'angular-translate',
  'ocLazyLoad',

  //'angular-translate-languager'
], function () {
  'use strict';

  // the app with its used plugins
  var app = angular.module('app', [
    'ionic','ngCordova.plugins.toast','pascalprecht.translate','oc.lazyLoad','iu'
  ]);
  // return the app so you can require it in other components
  return app;
});
