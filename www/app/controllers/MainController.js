define(['app'], function (app) {
    // controller
    app.controller('MainCtrl', function ($scope,$ionicModal, $timeout) {
  // properties
		$scope.loginData = {};

		  // Create the login modal that we will use later

		  $ionicModal.fromTemplateUrl('app/templates/user/login.html', {
		    scope: $scope
		  }).then(function(modal) {
		    $scope.modal = modal;
		  });

		  // Triggered in the login modal to close it
		  $scope.closeLogin = function() {
		    $scope.modal.hide();
		  };

		  // Open the login modal
		  $scope.login = function() {
		    $scope.modal.show();
		  };

		  // Perform the login action when the user submits the login form
		  $scope.doLogin = function() {
		    console.log('Doing login', $scope.loginData);

		    // Simulate a login delay. Remove this and replace with your login
		    // code if using a login system
		    $timeout(function() {
		      $scope.closeLogin();
		    }, 1000);
		  };
     });
});
