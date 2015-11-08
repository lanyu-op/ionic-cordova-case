angular.module('l42y.amap.map', [
  'l42y.amap'
]).directive('amapMap', function (
  $window,
  Amap
) {
  return {
    scope: {
      fitView: '=amapMapFitView'
    },
    restrict: 'EA',
    template: '<div ng-transclude></div>',
    transclude: true,
 /*   controller: function ($scope, $element, $attrs) {
      var self = this;

      Amap.promise.then(function () {
        var options = $scope.$parent.$eval($attrs.amapMapOptions);
        self.map = new $window.AMap.Map($element[0], options);

        $scope.$watchCollection('fitView', function (overlays) {
          if (overlays) {
            self.map.setFitView(overlays);
          };
        });
      });
    },
    controllerAs: 'amap'
    */
  };
});
