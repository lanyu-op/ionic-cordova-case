define(['app'], function (app) {
    // controller
    app.controller('MainCtrl', function ($ionicPopover,$scope,$ionicModal,$rootScope,$http, $timeout,$ionicPopup,$cordovaSQLite) {
  // properties
		$scope.loginData = {};
		
		  $ionicPopover.fromTemplateUrl('my-popover.html', {
		    scope: $scope
		  }).then(function(popover) {
		    $scope.popover = popover;
		  });
		  $scope.openPopover = function($event) {
		    $scope.popover.show($event);
		  };
		  // Create the login modal that we will use later
			//登录
		  $ionicModal.fromTemplateUrl('app/templates/user/login.html', {
		    scope: $scope
		  }).then(function(modal) {
		    $scope.modal = modal;
		  });
		  //注册
		  $ionicModal.fromTemplateUrl('app/templates/user/reg.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    $scope.regmodal = modal;
		  });
		  //修改个人资料
		  $ionicModal.fromTemplateUrl('app/templates/user/myinfo.html', {
		    scope: $scope
		  }).then(function(modal) {
		    $scope.myinfomodal = modal;
		  });
		  // Triggered in the login modal to close it
		  $scope.closeLogin = function() {
		    $scope.modal.hide();
		  };
		  $scope.closeReg = function() {
		    $scope.regmodal.hide();
		  };		  
		  $scope.closeMyinfo = function() {
		    $scope.myinfomodal.hide();
		  };		
		  // Triggered in the login modal to close it
		  $scope.reguser = function() {
	
		    //$scope.modal.hide();
		      $scope.regmodal.show();
		  };
		  //sqlite声明
		  if (window.cordova) {
	      // App syntax
	      db = $cordovaSQLite.openDB("ly_oa.db");
			} else {
			      // Ionic serve syntax
			      db = window.openDatabase("ly_oa.db", "1.0", "oa DB",  1024 * 1024 * 100);
			}
		
		 //$cordovaSQLite.execute(db, "DROP TABLE loginuser");
		 $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS loginuser (id integer primary key,username text,email text,nickname text, org text,staff text)");

		 $scope.initdb = function() {
	
		 		var query2 = "SELECT * FROM loginuser";
			    $cordovaSQLite.execute(db, query2, []).then(function(res) {
			    	
			        if(res.rows.length > 0) {
			        //console.log(res.rows.item(0));
			      	$scope.isshow={display:""};
			      	 $scope.loginData=res.rows.item(0);
					$rootScope.userinfo=res.rows.item(0);
			        }else{
			        $scope.isshow={display:"none"};
			        }
			    }, function (err) {
			        console.error(err);
			    });

		}
		 $scope.initdb();
		  $scope.x='1';//默认在线

		 $scope.selectAction = function(x) {
		 	if(x==5){
			$scope.isshow={display:"none"};
		 	$cordovaSQLite.execute(db, "delete from loginuser");
		 	$rootScope.userinfo=null;
		 	
		 	}
		 	if(x==6){
		 		$scope.iset();
		 	}
		 	

		}

		 $scope.upuserdb = function(model) {
		 var query2 = "SELECT id FROM loginuser";
		$cordovaSQLite.execute(db, query2, []).then(function(res) {
			
			        if(res.rows.length > 0) {
			           // for(var i = 0; i < res.rows.length; i++) {
					        var query = "UPDATE loginuser SET username = ?,email = ?,nickname = ?,org = ?,staff = ?";
					        $cordovaSQLite.execute(db, query, [model.username,'','','','']).then(function(res) {
					        	//console.log(model);
					            //console.log("INSERT ID test-> " + res.insertId);
					        }, function (err) {
					            console.log(err);
					        });		
			           // }
			        }else{
				       
				        var query = "INSERT INTO loginuser(username,email,nickname,org,staff) VALUES (?,?,?,?,?)";
				        $cordovaSQLite.execute(db, query, [model.username, model.email,'','','']).then(function(res) {
				           // console.log("INSERT ID test-> " + res.insertId);
				        }, function (err) {
				        	alert(2);
				            console.log(err);
				        });			        	
			        }
			    }, function (err) {
			        console.error(err);
			    });
		 	
		 	
		 	


		}
		  // Open the login modal
		  $scope.login = function() {
		  	if($rootScope.userinfo&&$rootScope.userinfo!=""){
		  		//修改资料、头像菜单

		  		return false;
		  	}
		    $scope.modal.show();
		  };
		  $scope.iset = function() {
		  	if($rootScope.userinfo&&$rootScope.userinfo!=""){
		  		//完善资料
		  		$scope.myinfomodal.show();
		  		return false;
		  	}
		    
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
                	//console.log(data.username+data.email);
                    window.location.href = "#/app/index";
                    $scope.loginData=data;
                    $scope.upuserdb($scope.loginData);
                    $rootScope.userinfo=$scope.loginData;
                      $scope.isshow={display:""};
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
