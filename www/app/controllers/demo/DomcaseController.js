define([
  'app',

], function (app) {
  'use strict';
//DOM操作
app.controller('DomcaseCtrl', function($scope,$compile) {
     	$scope.test=function(){
     		alert("这是填充dom的事件操作！");
     	}
     	$scope.insertDom=function(){
    		//通过$compile动态编译html
				var html="<div ng-click='test()'><h1>这是填充进来的dom</h1></div>";
				var template = angular.element(html);
				var mobileDialogElement = $compile(template)($scope);
				angular.element(document).find($("#th1")).append(mobileDialogElement); 		
 
     	}


});
});