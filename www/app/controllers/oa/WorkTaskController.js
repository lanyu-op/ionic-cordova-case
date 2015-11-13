define(['app'], function (app) {
app.controller('WorkTaskCtrl', function($ionicLoading,$scope,$rootScope,$ionicPopup,$http,$cordovaSQLite,$state,WorkTaskService,$q) {


  //每次进入页面执行
  $scope.$on('$ionicView.enter',function(){

    var arr=new Array();
    $rootScope.tasktext='';
    $rootScope.files=arr;
    $rootScope.personone=arr;
    $rootScope.personmore=arr;
    //$scope.onRefresh();
  });
	//页头跳转

    $scope.GoPage = function (target,param) {
    	//$rootScope.files=;

      	//$rootScope.tasktext='';
      	//$scope.files={};
      	//console.log('===='+$rootScope.tasktext)
        $state.go(target,{});
    }
	//var appElement = document.querySelector('[ng-controller=NewTaskCtrl]');//获得绑定controllerdom节点
	//var $scope = angular.element(appElement).scope(); //获得$scope对象
	//$scope.apply();//刷新数据

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
	    $scope.runtimeImageSrc="img/ionic.png";

        // pull to refresh
        $scope.onRefresh = function() {
        	//$scope.list=[];
        	//刷新实现添加在service里通用方法，在其他controler可以调用。
	        var promise=WorkTaskService.worktasklist();
	        promise.then(function(items) {
	        	//list赋值时会卡UI动画效果，这里去掉UI动画
	        	$scope.list=items.data;
	        	//console.log(items.data);
	        	$scope.$broadcast('scroll.refreshComplete');
	        });
     
        };




   });

});
