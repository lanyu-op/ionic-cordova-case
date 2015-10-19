define(['app'], function (app) {
app.controller('NewTaskCtrl', function($scope,$ionicPopup,$http,$cordovaSQLite,$state,Upload,$rootScope,$stateParams,$timeout) {
$scope.xxx = $scope;

//选择负责人完毕
    //console.log("----"+$stateParams.userid+$stateParams.username+$stateParams.img);
    //alert($stateParams);
    $scope.GoPageClear = function (target,param) {
    	//$rootScope.files=;

      	$scope.tasktext='';
      	//$scope.files={};
        $state.go(target,{});
    }

    //负责指定完跳转
    $scope.GoPage = function (target,param) {
    	$rootScope.files=$scope.files;
      	$rootScope.tasktext=$scope.tasktext;
        $state.go(target,{});
    }
    $scope.checkText = function () {
        //if ($scope.tasktext.length > 5) {
         //   alert("text is too long");
          //  $scope.tasktext = $scope.tasktext.substr(0, 5);

        //}
    }
    var arr=new Array();

		if(typeof($stateParams.userid)!='undefined'){
			arr.push({"userid":$stateParams.userid,"username":$stateParams.username,"img":$stateParams.img});
			console.log(arr);
			$scope.personone = arr;
		}else{
			$scope.personone = arr;
		}
		if(typeof($stateParams.isclear)!='undefined'){
			$scope.tasktext='';
			$scope.files=arr;
			console.log($stateParams.isclear);
		}else{
			//$scope.tasktext='';
			console.log($stateParams.isclear);
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
	//页头跳转
    $scope.doSomething = function() {
		$state.go('app');
    }
	var arr=[{
	                    "username":'张三',
	                    "sex":'09:26',
	                    "say":'反对法激动ifjfdfjsdifjdiofhdfoihd',
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl',
	                    "st":'ssss'
	                } ,
	                {
	                    "username":'李四',
	                    "sex":'09:26',
	                    "say":15,
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl'
	                } ,
	                {
	                    "username":'王五',
	                    "sex":'09:26',
	                    "say":15,
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl'
	                } ,
	                {
	                    "username":'功六',
	                    "sex":'09:26',
	                    "say":15,
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl'
	                } ,
	                {
	                    "username":'雪七',
	                    "sex":'09:26',
	                    "say":15,
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl'
	                }];
	    $scope.runtimeImageSrc="img/userlogo.png";
	    var arr1=[{"manid":12,"st":23,"spu":3,"svu":4,"ssu":5,"sbj":6,"zan":0,"random":0.505913405213505}];
        $scope.title   = "工作任务";
        $scope.list = arr1;
        // pull to refresh
        $scope.onRefresh = function() {
	        var params={fromid:'my1'};
			$http({
			   url:window.siteurl+'sms/QuerySms',
			   method:"POST",
			   headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
			   },
			   data: {
	            map: params,
	            test: 'test_lwp'
			   }
			}).success(function(data){
				$scope.list=data.concat($scope.list);
				//alert(data);
				console.log(data);
				//alert(JSON.stringify(data));
	            //window.location.href = "Gulugulus/subMenu";
	        }).error(function(error){
				alert(error);
	        }).finally(function() {
	                    $scope.$broadcast('scroll.refreshComplete');
	        })
        };




   });
});
