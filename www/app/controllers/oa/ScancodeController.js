define(['app'], function (app) {
	app.controller('ScancodeCtrl', function($ionicLoading,$cordovaBarcodeScanner,$scope,$ionicPopup,$http,$cordovaSQLite,$state,Upload,$rootScope,$stateParams,$timeout) {

		$scope.scanBarcode = function() {
			$cordovaBarcodeScanner.scan().then(function(imageData) {
				alert(imageData.text);
				console.log("Barcode Format -> " + imageData.format);
				console.log("Cancelled -> " + imageData.cancelled);
			}, function(error) {
				console.log("An error happened -> " + error);
			});
		};


   });
});
