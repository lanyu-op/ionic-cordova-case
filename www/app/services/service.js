define([
  'app'
], function (app) {
  'use strict';

  app.service('myService', [
    function () {
      this.getName = function () {
        return 'Ionic-Heads';
      };
    }
  ]);
});
