define(['app'], function (app) {
    // controller
    app.controller('MainCtrl', function ($scope,$ionicModal,$http, $timeout,$ionicPopup) {
  // properties
		$scope.loginData = {};

		  // Create the login modal that we will use later

		  $ionicModal.fromTemplateUrl('app/templates/user/login.html', {
		    scope: $scope
		  }).then(function(modal) {
		    $scope.modal = modal;
		  });
		  $ionicModal.fromTemplateUrl('app/templates/user/reg.html', {
		    scope: $scope
		  }).then(function(modal) {
		    $scope.regmodal = modal;
		  });
		  // Triggered in the login modal to close it
		  $scope.closeLogin = function() {
		    $scope.modal.hide();
		  };
		  $scope.closeReg = function() {
		    $scope.regmodal.hide();
		  };		  
		  // Triggered in the login modal to close it
		  $scope.reguser = function() {
	
		    //$scope.modal.hide();
		      $scope.regmodal.show();
		  };
		  // Open the login modal
		  $scope.login = function() {
		    $scope.modal.show();
		  };

		  // Perform the login action when the user submits the login form
		  $scope.doLogin = function() {
		    //console.log('Doing login', $scope.loginData.password);
		    if(!$scope.loginData.password||!$scope.loginData.username){
		    	return false;
		    }

		    // Simulate a login delay. Remove this and replace with your login
		    // code if using a login system
            var shapassword=hex_sha1($scope.loginData.password);
			$http({
			   url:window.siteurl+'index/ValidateUser',
			   method:"POST",
			   headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
			   },
                params:{
                    'username':$scope.loginData.username,
                    'password':shapassword
                }
			   //data: $scope.loginData
			}).success(function(data){
				//$scope.list=data.concat($scope.list);
				//alert(data);
				console.log(data.code);
                if(data.code==100){
                    window.location.href = "#/app/index";
                }else{
                    $ionicPopup.alert({
                        title:'登录失败',
                        template: "检查用户名密码"
                    });
                }
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
		  // Perform the login action when the user submits the login form
		  $scope.doReg = function() {
		    //console.log('Doing login', $scope.loginData.password);
		    if(!$scope.loginData.password||!$scope.loginData.username||!$scope.loginData.email){
		    	return false;
		    }

		    // Simulate a login delay. Remove this and replace with your login
		    // code if using a login system
            var shapassword=hex_sha1($scope.loginData.password);
			$http({
			   url:window.siteurl+'index/AddUser',
			   method:"POST",
			   headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
			   },
                params:{
                    'name':$scope.loginData.username,
                    'pwd':shapassword,
                    'email':$scope.loginData.email
                }
			   //data: $scope.loginData
			}).success(function(data){
				//$scope.list=data.concat($scope.list);
				//alert(data);
				console.log(data.code);
                if(data.code==100){
                   // window.location.href = "#/app/index";
				
                    var ss=$ionicPopup.alert({
                        title:'恭喜',
                        template: "注册成功！"
                    });
                    ss.then(function(res) {
				$scope.closeReg();
					  });
                }else{
                    $ionicPopup.alert({
                        title:'注册失败',
                        template: "检查相关信息！"
                    });
                }
				//alert(JSON.stringify(data));
	            //window.location.href = "Gulugulus/subMenu";
	        }).error(function(error){
				alert(error);
	        }).finally(function() {
	                    //$scope.$broadcast('scroll.refreshComplete');
	        })

		  };		  
     });
});
