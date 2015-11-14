define(['app'], function (app) {
    // controller
    app.controller('MainCtrl', function ($css,$scope,$state) {
      //清空所有样式
      $css.removeAll();
      //加载工作交办样式
      $css.add('lib/angular-bootstrap/bootstrap.min.css');
		$state.go('first');
    });
});
