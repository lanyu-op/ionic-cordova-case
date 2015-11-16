define(['app'], function (app) {
app.controller('ShowTaskCtrl', function($stateParams,$css,$scope,$rootScope,$ionicPopup,$http,$state,$q) {
    //console.log($stateParams.params);
    //console.log($rootScope.workitem);
    console.log($rootScope.workitem.workdata);
    
    //alert($stateParams.params);
    $scope.download=function(url){
    	window.location.href=window.siteResurl+url;
    	alert(3);
    }
  //每次进入页面执行
  $scope.$on('$ionicView.beforeEnter',function(){
$scope.workdata=$rootScope.workitem.workdata;
  });
  $scope.$on('$ionicView.afterEnter',function() {

  });
 
 


});

});
