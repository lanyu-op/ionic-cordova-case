define(['app'], function (app) {
app.controller('amapCtrl', function(Amap,$ionicLoading,$scope,$rootScope,$ionicPopup,$http,$q) {
  $scope.gogo=function(){
    alert(8);
  }
  Amap.promise.then(function () {
    // do something after Amap API loaded

    var map = new AMap.Map('mapContainer');
    map.setZoom(12);
    map.setCenter([116.480983, 39.989628]);
    var marker = new AMap.Marker({
      position: [116.480983, 39.989628],
      map:map
    });
    map.plugin(["AMap.ToolBar"], function() {
      var toolBar = new AMap.ToolBar();
      map.addControl(toolBar);
    });
    var infowindow = new AMap.InfoWindow({
      content: '<h3>高德地图</h1><a href="http://www.baidu.com">高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。</a>',
      offset: new AMap.Pixel(0, -30),
      size:new AMap.Size(230,0)
    });
    infowindow.open(map,new AMap.LngLat(116.480983, 39.989628));



  });




   });

});
