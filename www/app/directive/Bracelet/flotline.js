define([
  'app'
], function (app) {
  'use strict';
app.directive('dynamicChart', function(){
         return {
            restrice: 'AE',
            link: function(scope, element, attrs) {
                var data = [];
                var totalDataLong = 30;
                var jumpTime = 1000;

                function heartData() {
                    if(data.length >= totalDataLong) {
                        data = data.slice(1);
                    }
                    data.push(scope[attrs.crHeart]);

                    var res = [];
                    for (var i = 0; i < totalDataLong; ++i) {
                        res.push([i, data[i]])
                    }

                    return res;
                }

                //var data = [[1, 10], [2, 20]];
                var options = {
                    series: {
                        label: "Server Process Data",
                        lines: {
                            show: true,
                            lineWidth: 0.2,
                            fill: 0.6
                        },

                        color: '#00BCD4',
                        shadowSize: 0
                    },
                    yaxis: {
                        min: 0,
                        max: 200,
                        tickColor: '#9f9f9f',
                        font: {
                            lineHeight: 13,
                            style: "normal",
                            color: "#5b5b5b"
                        },
                        shadowSize: 0

                    },
                    xaxis: {
                        tickColor: '#fff',
                        show: true,
                        font: {
                            lineHeight: 13,
                            style: "normal",
                            color: "#fff"
                        },
                        shadowSize: 0,
                        min: 0,
                        max: 30
                    },
                    grid: {
                        borderWidth: 1,
                        borderColor: '#fff',
                        labelMargin: 10,
                        hoverable: true,
                        clickable: true,
                        mouseActiveRadius: 6
                    },
                    legend: {
                        container: '.flc-dynamic',
                        backgroundOpacity: 0.5,
                        noColumns: 0,
                        backgroundColor: "white",
                        lineWidth: 0
                    }
                };
                var plot = $.plot(element, [heartData()], options);

                function update() {
                    plot.setData([heartData()]);
                    // Since the axes don't change, we don't need to call plot.setupGrid()

                    plot.draw();
                    setTimeout(update, jumpTime);
                }
                update();
            }
        }

});
});