define([
  'app'
], function (app) {
  'use strict';
app.directive('easypiechart', [function() {
    return {
        restrict: 'AE',
        require: '?ngModel',
        scope: {
            percent: '=',
            options: '='
        },
        link: function (scope, element, attrs) {

            scope.percent = scope.percent || 0;

            /**
             * default easy pie chart options
             * @type {Object}
             */
            var options = {
                barColor: '#f6b13b', //bar����ɫ
                trackColor: '#238c95', //bar��ʣ����ɫ
                scaleColor: '#FFE6D9', //�̶�����ɫ
                scaleLength: 10, //�̶��߳���
                lineCap: 'round',
                lineWidth: 5, //bar�Ŀ��
                size: 240,
                rotate: 0,
                animate: {
                    duration: 3000,
                    enabled: true
                }
            };
            scope.options = angular.extend(options, scope.options);

            var pieChart = new EasyPieChart(element[0], options);

            scope.$watch('percent', function(newVal, oldVal) {
                pieChart.update(newVal);
            });
        }
    };
}]);

});