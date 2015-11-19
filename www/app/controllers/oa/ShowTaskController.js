define(['app'], function (app) {
app.controller('ShowTaskCtrl', function($stateParams,$css,$scope,$rootScope,$ionicPopup,$http,$state,$q) {
    //console.log($stateParams.params);
    //console.log($rootScope.workitem);
    //console.log($rootScope.workitem.workdata);
    //alert($stateParams.params);
    $scope.download=function(url){
    	$scope.isclik=url;
    	//console.log(url);
    	//console.log(url.indexOf('.jpg'));
    	if(url.lastIndexOf('.jpg')!=-1||url.lastIndexOf('.jpeg')!=-1||url.lastIndexOf('.bmp')!=-1||url.lastIndexOf('.png')!=-1||url.lastIndexOf('.gif')!=-1){
    		var ref = cordova.InAppBrowser.open(window.siteResurl+url, '_self', 'location=no');
    	//alert("图片");
    	}else{
    		//alert("文件");
    		var ref = cordova.InAppBrowser.open(window.siteResurl+url, '_system', 'location=no');
    	}
    	//var ref = cordova.InAppBrowser.open(window.siteResurl+url, '_blank', 'location=no');
		
		//var ref = cordova.InAppBrowser.open(window.siteResurl+url, '_system', 'location=no');
    	//window.location.href=window.siteResurl+url;
    	//alert(3);
    }
  //每次进入页面执行
  $scope.$on('$ionicView.beforeEnter',function(){
$scope.workdata=$rootScope.workitem.workdata;
  });
  $scope.$on('$ionicView.afterEnter',function() {

  });
 
 


});

});
