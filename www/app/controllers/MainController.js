define(['app'], function (app) {
    // controller
    app.controller('MainCtrl', function ($scope,$ionicModal,$http, $timeout) {
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
			$http({
			   url:window.siteurl+'index/ValidateUser',
			   method:"POST",
			   headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
			   },
                params:{
                    'username':$scope.loginData.username,
                    'password':$scope.loginData.password
                }
			   //data: $scope.loginData
			}).success(function(data){
				//$scope.list=data.concat($scope.list);
				//alert(data);
				console.log(data);
				//alert(JSON.stringify(data));
	            //window.location.href = "Gulugulus/subMenu";
	        }).error(function(error){
				alert(error);
	        }).finally(function() {
	                    //$scope.$broadcast('scroll.refreshComplete');
	        })
		    $timeout(function() {
		      $scope.closeLogin();
		    }, 1000);
		  };
     });
});
