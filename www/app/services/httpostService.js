define([
  'app'
], function (app) {
  'use strict';

  app.service('httpostService', 
    function ($http,$q) {
    	//q.defer同步方式，等同then的用法
        this.post=function(){
        	var deferred=$q.defer();
    		$http({
 			   url:window.siteurl+'sms/QueryWorkTask',
 			   method:"POST",
 			   headers: {
 					'Content-Type': 'application/x-www-form-urlencoded'
 			   },
 			   data: {
 	           // map: params,
 	            //test: 'test_lwp'
 			   }
 			}).success(function(data){
 				deferred.resolve(data);
 				//console.log(data);
 				//$scope.list=data.concat($scope.list);
      //$ionicLoading.hide();
 				//$scope.list=data;
 				//alert(data);
 				//console.log($scope.list);
 				//alert(JSON.stringify(data));
 	            //window.location.href = "Gulugulus/subMenu";
 				//$rootScope.rPostData=data;
 
 	        }).error(function(error){
 				alert(error);
 	        }).finally(function() {
 	           //$scope.$broadcast('scroll.refreshComplete');
 	        });	
    		return deferred.promise;
    	};

   
    	
    }
  );
});
