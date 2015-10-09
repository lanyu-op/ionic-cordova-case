define(['app'], function (app) {
app.controller('DiscussCtrl', function($scope,$ionicPopup,$http,$cordovaSQLite) {
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
        $scope.title   = "圈子动态";
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
