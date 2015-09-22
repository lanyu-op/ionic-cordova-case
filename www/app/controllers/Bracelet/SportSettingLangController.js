define(['app'], function (app) {
app.controller('LanguageCtrl', function($scope,$translate) {
	$scope.title="SelectLanguage_Lang";
	$scope.changeLanguage = function (key) {
	   $translate.use(key);
	};
});
});