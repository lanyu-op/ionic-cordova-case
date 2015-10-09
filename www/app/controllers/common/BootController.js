define(['app'], function (app) {
    // controller
    app.controller('MainCtrl', function ($scope,$state) {
		$state.go('first');
    });
});
