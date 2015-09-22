define(['app'], function (app) {
app.controller('AppBlue', function($scope, $cordovaBLE, $ionicPopup) {
        $scope.title   = "设备列表";
        $scope.devices = $cordovaBLE.devices;
        var success = function () {
            if ($scope.devices.length < 1) {
                // a better solution would be to update a status message rather than an alert
                alert("Didn't find any Bluetooth Low Energy devices.");
            }
        };

        var failure = function (error) {
            alert(error);
        };
        // pull to refresh
        $scope.onRefresh = function() {
            $cordovaBLE.scan([], 5).then(
                success, failure
            ).finally(
                function() {
                    $scope.$broadcast('scroll.refreshComplete');
                }
            )
        };

        $scope.onRecordBluetoothId = function( id, rssi, name) {  //记录蓝牙信息
            if( id && rssi && name) {
                window.localStorage.setItem("BLUETOOTH_DEVICE_PARAMETERS_ID", id);
                window.localStorage.setItem("BLUETOOTH_DEVICE_PARAMETERS_RSSI", rssi);
                window.localStorage.setItem("BLUETOOTH_DEVICE_PARAMETERS_NAME", name);
                $ionicPopup.alert({
                    title:'连接成功',
                    template: '请返回主页'
                });
            } else {
                $ionicPopup.alert({
                    title:'未知错误',
                    template: '出现一个未知错误,请重新连接蓝牙'
                });
            }
        };
});
});