define(['app'], function (app) {
    // controller
    app.controller('firstPageCtrl', function ($scope,$ionicModal,$http, $timeout,$ionicPopup,$state) {
  // properties
        $scope.GoPage = function (target,param) {
        $state.go(target,{params:param,xxx:'111',zzz:'222'});
        }

    });
});
