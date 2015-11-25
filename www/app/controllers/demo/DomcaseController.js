define([
  'app',

], function (app) {
  'use strict';
//设备列表
app.controller('DomcaseCtrl', function($scope,$compile) {
     	
//通过$compile动态编译html
var html="<div ng-click='test()'><h1>222222222222222222</h1></div>";
var template = angular.element(html);
var mobileDialogElement = $compile(template)($scope);
angular.element(document).find($("ion-item")[0]).append(mobileDialogElement);

});
});