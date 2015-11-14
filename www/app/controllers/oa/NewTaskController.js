define(['app'], function (app) {
app.controller('NewTaskCtrl', function($css,$q,$ionicLoading,$scope,$ionicPopup,$http,$cordovaSQLite,$state,Upload,$rootScope,$stateParams,$timeout) {
  //document.getElementById('global-css').setAttribute('href',themeFile);


  //2级域定义
  $scope.xxx = $scope;
  //每次进入页面执行
  $scope.$on('$ionicView.beforeEnter',function(){

    $scope.tasktext=$rootScope.tasktext;
    $scope.personone = $rootScope.personone;
    $scope.personmore=$rootScope.personmore;
    $scope.files=$rootScope.files;
    $scope.progress =-1;
    console.log($scope.dt.Format("yyyy-MM-dd"));
  });
  //
  $scope.$on('$ionicView.leave',function() {
    //$css.remove('lib/angular-bootstrap/bootstrap.min.css');
  });

//bootstrap日历
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
 // $scope.disabled = function(date, mode) {
  //  return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  //};

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
	//提交工作单
	$scope.submitWork = function () {

		if($scope.tasktext&&$scope.tasktext!=""){
			//console.log("------------:"+$scope.tasktxt);
			$scope.upload($scope.files);
		}

  }

    //负责指定完跳转
    $scope.GoPage = function (target,param) {
    	$rootScope.files=$scope.files;
      $rootScope.tasktext=$scope.tasktext;

        $state.go(target,{});
    }
    $scope.clearfile= function (f) {
    	$index=$scope.files.indexOf(f);
 			$scope.files.splice($index,1);
    }
    $scope.checkText = function () {
        //if ($scope.tasktext.length > 5) {
         //   alert("text is too long");
          //  $scope.tasktext = $scope.tasktext.substr(0, 5);

        //}
    }
    var arr=new Array();
		//回调负责人信息
  /*
		if(typeof($stateParams.userid)!='undefined'){
			arr.push({"userid":$stateParams.userid,"username":$stateParams.username,"img":$stateParams.img});
			//console.log(arr);
			$rootScope.personone=arr;
			$scope.personone = $rootScope.personone;

		}else{
			//$scope.personone = $rootScope.personone;
		}
		*/
    //绑定负责人信息
    //$scope.$watch('username', function() {
   //   $scope.username = $rootScope.username;
    //  console.log($rootScope.username);
   // });
  //setTimeout(function() {
    //$scope.message = $rootScope.username;
    //$scope.$apply();
  //}, 2000);


    //do sth later, such as log



		//新建清空信息
		//if(typeof($stateParams.isclear)!='undefined'){
			//$scope.tasktext='';
			//$scope.files=arr;
			//$rootScope.personone=arr;
			//$rootScope.arr1=arr;

			//console.log($stateParams.isclear);
		//}else{
			//$scope.tasktext='';
			//console.log($stateParams.isclear);
		//}
		//回调分派人信息
		//console.log($rootScope.arr1);
		//if(typeof($rootScope.arr1)!='undefined'){
		//	console.log("---------------"+$rootScope.arr1);
		//	$scope.personmore=$rootScope.arr1;

		//}else{
			//$scope.personmore=arr;
		//}

    ///$scope.personone="111";
//附件上传
//提交附件
    $scope.submit = function() {
      if (form.file.$valid && $scope.file && !$scope.file.$error) {
        $scope.upload($scope.file);
      }
    };
    // upload on file select or drop
    $scope.upload = function (files) {
    var tasktxt=	$scope.tasktext;
		var taskleader=	$scope.personone;
		var taskpersonmore=	$scope.personmore;
    		//上传文件先定义异步坑
    	var deferred=$q.defer();
    	var z=0;
    	var arr=new Array();
        if (files && files.length) {
        	for (var i = 0; i < files.length; i++) {
            Upload.upload({
                url: window.siteurl+'sms/UploadFiles',
                data: {
                    Filedata: files[i],
                    //'username': 'file'
                }
            }).then(function (response) {
            	z++;
            	console.log("循环"+z);
            	arr.push(response.data);
            	//打包数组
            	if(z==files.length){
            		console.log("成功了，则填充坑");
            		//console.log(arr);
            		deferred.resolve(arr);
            	}

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
        }else{
        	deferred.resolve(arr);
        }
        //上传完毕后，判断坑里是否有蛋
        //console.log(deferred.promise);

        	var promise=deferred.promise;
	        promise.then(function(items) {
	 				var fujiantmp=new Array();
	       	        //如果返回值不是0，则说明至少有一个上传成功，更新后台数据
					        if(items.length>0){
					        	fujiantmp=items
								  } 	else{

								  }
					        	console.log(items);
					        	//console.log("要更新的工作id："+id);

											$http({
											   url:window.siteurl+'sms/BaseAddWorkTask',
											   method:"POST",
											   headers: {
													'Content-Type': 'application/x-www-form-urlencoded'
											   },
											   data: {
									            tasktxt: tasktxt,
									            creatime:$scope.dt.Format("yyyy-MM-dd"),
									            taskleader:taskleader,
									            taskpersonmore:taskpersonmore,
									            fujian:fujiantmp,
									            random:Math.random()
											   }
											}).success(function(data){
												/////上传图片
												$state.go("app.workTask",{});
												//$scope.list=data.concat($scope.list);
												//alert(data);
												//console.log("===============:::"+data.createid);
												//alert(JSON.stringify(data));
									            //window.location.href = "Gulugulus/subMenu";

									    }).error(function(error){
												alert(error);
									    }).finally(function() {
									                   // $scope.$broadcast('scroll.refreshComplete');
									    });




	        });



    };
    $scope.uploadFiles = function (files) {
		console.log(files);
		if(files!=null){
				if(typeof($scope.files)!='undefined'){
					$scope.files = $scope.files.concat(files);
				}else{
					$scope.files = (files);
				}

    }



    };





   });
});
//时间格式化函数
Date.prototype.Format =  function(fmt)
{ //author: meizz
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}
