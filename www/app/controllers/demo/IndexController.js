define(['app'], function (app) {
    // controller
    app.controller('firstPageCtrl', function (socket,$css,$scope,$ionicModal,$http, $timeout,$ionicPopup,$state) {
  // properties

       socket.on('connect',function(){
        //Add user called nickname
        socket.emit('add user','nickname');
        alert("http://chat.socket.io");
       });
      $scope.$on('$ionicView.afterEnter',function(){
        //清空所有样式
        //$css.removeAll();

      });
      //加载样式
      //$css.add('css/WorkTask.css');
        $scope.GoPage = function (target,param) {
        $state.go(target,{params:param,xxx:'111',zzz:'222'});
        }

    });
});
