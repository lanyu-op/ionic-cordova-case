# [angular](https://angularjs.org)-[amap](http://lbs.amap.com/api/javascript-api/summary-3/)

## Installation

1. `bower install --save L42y/angular-amap`

2. including script file provided by this component into your application

3. adding `l42y.amap` as a module dependency to your application

## Usage

```js
angular.module('App', [
    'l42y.amap'
]).config(function (
    AmapProvider
) {
    AmapProvider.config = {
        key: null, // Amap API key, see http://api.amap.com/key
        version: '1.3' // which Amap API version to use, see http://lbs.amap.com/api/javascript-api/changelog/
    };
}).controller('AppCtrl', function (
    Amap
) {
    Amap.promise.then(function () {
        // do something after Amap API loaded
    });
})
```

## License

[WTFPL](http://wtfpl.org)
