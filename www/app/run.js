define([
  'app',
], function (app) {
  'use strict';
  // the run blocks
  app.run(function($ionicPlatform,$ionicPopup,$rootScope, $location,$timeout, $ionicHistory,$cordovaToast) {
				 function showConfirm() {
			    var confirmPopup = $ionicPopup.confirm({
			        title: '<strong>退出应用?</strong>',
			        template: '你确定要退出应用吗?',
			        okText: '退出',
			        cancelText: '取消'
			    });
			    confirmPopup.then(function (res) {
			        if (res) {
			            ionic.Platform.exitApp();
			        } else {
			            // Don't close
			        }
			    });
			  }
				//注意：$cordovaToast是消息提示框，若要使用需要安装才支持。命令cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
			  $ionicPlatform.ready(function() {
			    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			    // for form inputs)
			    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
						alert(3);
			      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			      cordova.plugins.Keyboard.disableScroll(true);

			    }
			    if (window.StatusBar) {
			      // org.apache.cordova.statusbar required
			      StatusBar.styleLightContent();
			    }
			  });
				//双击退出
				$ionicPlatform.registerBackButtonAction(function (e) {
						e.preventDefault();
				    //判断处于哪个页面时退出
				  	if($location.path()=='/app/index'){
				  		showConfirm();
				  	}else if($rootScope.$viewHistory.backView){
							$rootScope.$viewHistory.backView.go();
				  	}else{
				  		showConfirm();
				  	}

				    return false;
				}, 101);
			});
});
