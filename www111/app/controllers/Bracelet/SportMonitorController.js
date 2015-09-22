define(['app'], function (app) {
app.controller('SportMonitorCtrl', function($scope, $cordovaBLE,$timeout,$ionicPopup, historyList, heartRate,$cordovaSQLite) {
		//sqlite操作


        $scope.title="今日活动"; //今日活动
        $scope.TodayNumber_Lang="TodayNumber_Lang";
		$scope.Km_Lang="Km_Lang";
		$scope.Kcal_Lang="Kcal_Lang";

        $scope.heart = 0;
        $scope.steps = 0;
        var bluetooth_parameters = window.localStorage.getItem('BLUETOOTH_DEVICE_PARAMETERS_ID');
        var onData = function(result) {
            var data = new Uint8Array(result);
            $scope.heart = data[1];  //心跳数据
            $scope.steps = addUpData(data[2]);  //运动数据
            $scope.$digest();
        };

        //判断是否为空
        var is_null = function(string) {
            if (string !== null || string !== undefined || string !== '') {
                return string; //如果不为空 则返回
            } else {
                return false;
            }
        };
        //数据累加
        var addUpData = function( data ) {
            var oldData = window.localStorage.getItem('BLUETOOTH_DEVICE_TEMPORARY_DATA');
            if( ! is_null( oldData ) ) {
                oldData = 0;
            }
            var newData = parseInt(oldData) + parseInt(data);
            window.localStorage.setItem('BLUETOOTH_DEVICE_TEMPORARY_DATA', newData);
            return newData;
        };

        //返回错误信息
        var ErrorMessage = function() {
            $ionicPopup.alert({
                title:'发现一个错误',
                template: "请先连接蓝牙"
            });
        };

        var connectSuccess = function() {
            ble.notify(bluetooth_parameters, heartRate.service, heartRate.measurement, onData, ErrorMessage);
        };

        //因为第二次登陆 如果直接connect会直接崩溃  所以做个这种措施来避免
        // 每次进来都要走一遍 连接蓝牙的操作
        var connectNow = function() {
            window.localStorage.setItem('BLUETOOTH_DEVICE_TEMPORARY_DATA', 0);
            ble.connect(bluetooth_parameters, connectSuccess, scanBluetooth);
        };

        //如果 蓝牙ID存在的话 则自动去搜索蓝牙
        var scanBluetooth = function() {
            ble.disconnect(bluetooth_parameters);
            $cordovaBLE.scan([], 5).then(
                function() {
                    var devicesList = $cordovaBLE.devices;
                    var checked = false;
                    for(var i in devicesList) {
                        if( devicesList[i].id == bluetooth_parameters) {
                            connectNow();
                            checked = true;
                        }
                    }
                    if( !checked ) {
                        scanBluetooth();
                    }
                }
            )
        };

        //判断 蓝牙连接参数是否存在
        if( bluetooth_parameters) {
            $timeout(function() {
                $cordovaBLE.isConnected(bluetooth_parameters)
                    .then(function(){
                        connectSuccess();
                    }, function(){
                        connectNow();
                    });
            },3000);
        } else {
            ErrorMessage();
        }

        //滑动隐藏
        $scope.slideHasChanged = function( e ){
            $scope.halee = true;
            if(1 != e) {
            	$scope.title="TodayActive_Lang";
                $scope.halee = false;
            } else {
            	$scope.title="HeartRate_Lang";
            }
        };


		$scope.$on('$ionicView.enter', function(){
			//alert($scope.halee);
            if($scope.halee) {
            	//alert('这是心率');
            	//提示：默认情况下ion-view是缓存的，这个情况下是缓存页面title是无法赋翻译值。cache-view设置false，可赋值。
				$scope.title="HeartRate_Lang";
            }else{
            	//alert('这是今日活动');
            	$scope.title="TodayActive_Lang";
            }
		});

        //把运动列表数据遍历到页面上
        $scope.sportListData = historyList;
   });
});
