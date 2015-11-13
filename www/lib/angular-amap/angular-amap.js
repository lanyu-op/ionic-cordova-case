angular.module('l42y.amap', [
]).provider('Amap', function (
) {
  var reference = 'angularAmapCallback';

  var provider = {
    config: {
      key: null,
      version: '1.3'
    },
    $get: function (
      $q,
      $window,
      $location
    ) {
      var deferred = $q.defer();

      function callback () {
      	//console.log('加载成功！');
      	//alert('加载成功！')
        deferred.resolve();
      }

      $window[reference] = callback;
      (function (document, script, scriptElement) {
        scriptElement = document.createElement(script);
        //$location.protocol()
        scriptElement.src ='http://' +
          'webapi.amap.com/maps?v=' + provider.config.version +
          '&key=' + provider.config.key +
          '&callback=' + reference;
        document.body.appendChild(scriptElement);
        //console.log('正在加载。。。。');
       // alert('正在加载！'+$location.protocol() + '://' +
       //   'webapi.amap.com/maps?v=' + provider.config.version +
       //   '&key=' + provider.config.key +
       //   '&callback=' + reference);
      }($window.document, 'script'));

      var service = {
        promise: deferred.promise
      };

      return service;
    }
  };

  return provider;
});
