define(['app'], function (app) {
app.controller('NewTaskCtrl', function($ionicLoading,$scope,$ionicPopup,$http,$cordovaSQLite,$state,Upload,$rootScope,$stateParams,$timeout) {
  //2级域定义
  $scope.xxx = $scope;
//bootstrap日历
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  $scope.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
  //大日历
  $scope.eventSources = [];
//选择负责人完毕
    //console.log("----"+$stateParams.userid+$stateParams.username+$stateParams.img);
    //alert($stateParams);
    $scope.GoPageClear = function (target,param) {
    	//$rootScope.files=;

      	$scope.tasktext='';
      	//$scope.files={};
        $state.go(target,{});
    }
	//提交
	$scope.submitWork = function () {
		var tasktxt=	$scope.tasktext;
		var taskleader=	$scope.personone;
		console.log("------------:"+tasktxt);
			$http({
			   url:window.siteurl+'sms/BaseAddWorkTask',
			   method:"POST",
			   headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
			   },
			   data: {
	            tasktxt: tasktxt,
	            taskleader:taskleader,
	            random:Math.random()
			   }
			}).success(function(data){
				//$scope.list=data.concat($scope.list);
				//alert(data);
				console.log(data);
				//alert(JSON.stringify(data));
	            //window.location.href = "Gulugulus/subMenu";
	             $state.go("app.workTask",{});
	        }).error(function(error){
				alert(error);
	        }).finally(function() {
	                    $scope.$broadcast('scroll.refreshComplete');
	        })
    }

    //负责指定完跳转
    $scope.GoPage = function (target,param) {
    	$rootScope.files=$scope.files;
      	$rootScope.tasktext=$scope.tasktext;

        $state.go(target,{a:Math.random()});
    }
    $scope.checkText = function () {
        //if ($scope.tasktext.length > 5) {
         //   alert("text is too long");
          //  $scope.tasktext = $scope.tasktext.substr(0, 5);

        //}
    }
    var arr=new Array();
		//回调负责人信息
		if(typeof($stateParams.userid)!='undefined'){
			arr.push({"userid":$stateParams.userid,"username":$stateParams.username,"img":$stateParams.img});
			//console.log(arr);
			$rootScope.personone=arr;
			$scope.personone = $rootScope.personone;

		}else{
			//$scope.personone = $rootScope.personone;
		}
		//新建清空信息
		if(typeof($stateParams.isclear)!='undefined'){
			$scope.tasktext='';
			$scope.files=arr;
			$rootScope.personone=arr;
			$rootScope.arr1=arr;

			//console.log($stateParams.isclear);
		}else{
			//$scope.tasktext='';
			//console.log($stateParams.isclear);
		}
		//回调分派人信息
		console.log($rootScope.arr1);
		if(typeof($rootScope.arr1)!='undefined'){
			console.log("---------------"+$rootScope.arr1);
			$scope.personmore=$rootScope.arr1;

		}else{
			//$scope.personmore=arr;
		}

    ///$scope.personone="111";
//附件上传
//提交附件
    $scope.submit = function() {
      if (form.file.$valid && $scope.file && !$scope.file.$error) {
        $scope.upload($scope.file);
      }
    };
    // upload on file select or drop
    $scope.upload = function (file) {
    	 if (files && files.length) {
    	 	for (var i = 0; i < files.length; i++) {
		        Upload.upload({
		            url: 'upload/url',
		            data: {file: file, 'username': $scope.username}
		        }).then(function (resp) {
		            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
		        }, function (resp) {
		            console.log('Error status: ' + resp.status);
		        }, function (evt) {
		            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
		            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
		        });
	        }
        }
    };
    $scope.uploadFiles = function (files) {
		//console.log(files);
		if(files!=null){
		if(typeof($scope.files)!='undefined'){
			$scope.files = $scope.files.concat(files);
		}else{
			$scope.files = (files);
		}

       }
        /*
        if (files && files.length) {
            Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {
                    files: files
                }
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                });
            }, function (response) {
                if (response.status > 0) {
                    $scope.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                $scope.progress =
                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
        */
    };





   });
});
