angular.module('l42y.amap.toolbar', [
  'l42y.amap',
  'l42y.amap.map'
]).directive('amapToolbar', function (
  $window,
  Amap
) {
  return {
    require: 'amapMap',
    restrict: 'A',
    link: function ($scope, $element, $attrs, amap) {
      Amap.promise.then(function () {
        amap.map.plugin('AMap.ToolBar', function () {
          var toolbar;
          var toolbarOptions = {};

          if ($attrs.amapToolbar.length) {
            var options = $scope.$eval($attrs.amapToolbar);
            if (angular.isObject(options)) toolbarOptions = options;
          }

          if ($attrs.amapToolbars) {
            var toolbars = $attrs.amapToolbars.split(/[\s,]+/);
            toolbarOptions.ruler = toolbars.indexOf('ruler') !== -1;
            toolbarOptions.direction = toolbars.indexOf('direction') !== -1;

            toolbar = new $window.AMap.ToolBar(toolbarOptions);

            if (toolbars.indexOf('labels') === -1) toolbar.showLabels = false;
            if (toolbars.indexOf('location') === -1) toolbar.hideLocation();
          } else {
            toolbar = new $window.AMap.ToolBar(toolbarOptions);
          }

          amap.map.addControl(toolbar);
        });
      });
    }
  };
});
