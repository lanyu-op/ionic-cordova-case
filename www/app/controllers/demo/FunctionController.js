define([
  'app'
], function (app) {
  'use strict';
//设备列表
app.controller('FunctionlistCtrl', function($scope) {
     	 $scope.title="FunctionList_Lang";

})
.controller('LanguageCtrl', function($scope,$translate) {
	$scope.title="SelectLanguage_Lang";
	$scope.changeLanguage = function (key) {
	   $translate.use(key);
	};
});
});