// requires routes, config, run they implicit requiring the app
//require引入路径。
require([
  'routes',
  'config',
  'run',
  '../app/services/language'
], function () {
  'use strict';
  // Here you have to set your app name to bootstrap it manually
  angular.bootstrap(document, ['app']);
});
