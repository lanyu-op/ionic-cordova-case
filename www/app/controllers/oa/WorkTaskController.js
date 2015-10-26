define(['app'], function (app) {
app.controller('WorkTaskCtrl', function($ionicLoading,$scope,$rootScope,$ionicPopup,$http,$cordovaSQLite,$state) {
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  //每次进入页面执行
  $scope.$on('$ionicView.enter',function(){

    var arr=new Array();
    $rootScope.tasktext='';
    $rootScope.files=arr;
    $rootScope.personone=arr;
    $rootScope.personmore=arr;
  });
	//页头跳转

    $scope.GoPage = function (target,param) {
    	//$rootScope.files=;

      	//$rootScope.tasktext='';
      	//$scope.files={};
      	//console.log('===='+$rootScope.tasktext)
        $state.go(target,{});
    }
	//var appElement = document.querySelector('[ng-controller=NewTaskCtrl]');//获得绑定controllerdom节点
	//var $scope = angular.element(appElement).scope(); //获得$scope对象
	//$scope.apply();//刷新数据

    $scope.doSomething = function() {
		$state.go('app');
    }
	var arr=[{
	                    "username":'张三',
	                    "sex":'09:26',
	                    "say":'反对法激动ifjfdfjsdifjdiofhdfoihd',
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl',
	                    "st":'ssss'
	                } ,
	                {
	                    "username":'李四',
	                    "sex":'09:26',
	                    "say":15,
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl'
	                } ,
	                {
	                    "username":'王五',
	                    "sex":'09:26',
	                    "say":15,
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl'
	                } ,
	                {
	                    "username":'功六',
	                    "sex":'09:26',
	                    "say":15,
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl'
	                } ,
	                {
	                    "username":'雪七',
	                    "sex":'09:26',
	                    "say":15,
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl'
	                }];
	    $scope.runtimeImageSrc="img/ionic.png";
	   // var arr1=[{"manid":12,"st":23,"spu":3,"svu":4,"ssu":5,"sbj":6,"zan":0,"random":0.505913405213505}];
       // $scope.title   = "工作任务";
       // $scope.list = arr1;
        // pull to refresh
        $scope.onRefresh = function() {

			$http({
			   url:window.siteurl+'sms/QueryWorkTask',
			   method:"POST",
			   headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
			   },
			   data: {
	           // map: params,
	            //test: 'test_lwp'
			   }
			}).success(function(data){
				//$scope.list=data.concat($scope.list);
        $ionicLoading.hide();
				$scope.list=data;
				//alert(data);
				//console.log($scope.list);
				//alert(JSON.stringify(data));
	            //window.location.href = "Gulugulus/subMenu";
	        }).error(function(error){
				alert(error);
	        }).finally(function() {
	                    $scope.$broadcast('scroll.refreshComplete');
	        })
        };




   });

app.controller('NewTaskCtrl', function($ionicLoading,$scope,$ionicPopup,$http,$cordovaSQLite,$state,Upload,$rootScope,$stateParams,$timeout) {
    //2级域定义
    $scope.xxx = $scope;
    //每次进入页面执行
    $scope.$on('$ionicView.enter',function(){
      $scope.tasktext=$rootScope.tasktext;
      $scope.personone = $rootScope.personone;
      $scope.personmore=$rootScope.personmore;
      $scope.files=$rootScope.files;
    });
//bootstrap日历
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();
    $scope.maxDate = new Date(2020, 5, 22);

    $scope.open = function($event) {
      $scope.status.opened = true;
    };

    $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.status = {
      opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 2);
    $scope.events =
      [
        {
          date: tomorrow,
          status: 'full'
        },
        {
          date: afterTomorrow,
          status: 'partially'
        }
      ];

    $scope.getDayClass = function(date, mode) {
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0,0,0,0);

        for (var i=0;i<$scope.events.length;i++){
          var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

          if (dayToCheck === currentDay) {
            return $scope.events[i].status;
          }
        }
      }

      return '';
    };
    //大日历
    $scope.eventSources = [];
//选择负责人完毕
    //console.log("----"+$stateParams.userid+$stateParams.username+$stateParams.img);
    //alert($stateParams);
    $scope.GoPageClear = function (target,param) {
      //$rootScope.files=;

      $scope.tasktext='';
      //$scope.files={};
      $state.go(target,{});
    }
    //提交
    $scope.submitWork = function () {
      var tasktxt=	$scope.tasktext;
      var taskleader=	$scope.personone;
      console.log("------------:"+tasktxt);
      $http({
        url:window.siteurl+'sms/BaseAddWorkTask',
        method:"POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          tasktxt: tasktxt,
          taskleader:taskleader,
          random:Math.random()
        }
      }).success(function(data){
        //$scope.list=data.concat($scope.list);
        //alert(data);
        console.log(data);
        //alert(JSON.stringify(data));
        //window.location.href = "Gulugulus/subMenu";
        $state.go("app.workTask",{});
      }).error(function(error){
        alert(error);
      }).finally(function() {
        $scope.$broadcast('scroll.refreshComplete');
      })
    }

    //负责指定完跳转
    $scope.GoPage = function (target,param) {
      $rootScope.files=$scope.files;
      $rootScope.tasktext=$scope.tasktext;

      $state.go(target,{});
    }
    $scope.checkText = function () {
      //if ($scope.tasktext.length > 5) {
      //   alert("text is too long");
      //  $scope.tasktext = $scope.tasktext.substr(0, 5);

      //}
    }
    var arr=new Array();
    //回调负责人信息
    /*
     if(typeof($stateParams.userid)!='undefined'){
     arr.push({"userid":$stateParams.userid,"username":$stateParams.username,"img":$stateParams.img});
     //console.log(arr);
     $rootScope.personone=arr;
     $scope.personone = $rootScope.personone;

     }else{
     //$scope.personone = $rootScope.personone;
     }
     */
    //绑定负责人信息
    //$scope.$watch('username', function() {
    //   $scope.username = $rootScope.username;
    //  console.log($rootScope.username);
    // });
    //setTimeout(function() {
    //$scope.message = $rootScope.username;
    //$scope.$apply();
    //}, 2000);


    //do sth later, such as log



    //新建清空信息
    //if(typeof($stateParams.isclear)!='undefined'){
    //$scope.tasktext='';
    //$scope.files=arr;
    //$rootScope.personone=arr;
    //$rootScope.arr1=arr;

    //console.log($stateParams.isclear);
    //}else{
    //$scope.tasktext='';
    //console.log($stateParams.isclear);
    //}
    //回调分派人信息
    //console.log($rootScope.arr1);
    //if(typeof($rootScope.arr1)!='undefined'){
    //	console.log("---------------"+$rootScope.arr1);
    //	$scope.personmore=$rootScope.arr1;

    //}else{
    //$scope.personmore=arr;
    //}

    ///$scope.personone="111";
//附件上传
//提交附件
    $scope.submit = function() {
      if (form.file.$valid && $scope.file && !$scope.file.$error) {
        $scope.upload($scope.file);
      }
    };
    // upload on file select or drop
    $scope.upload = function (file) {
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          Upload.upload({
            url: 'upload/url',
            data: {file: file, 'username': $scope.username}
          }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          }, function (resp) {
            console.log('Error status: ' + resp.status);
          }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
          });
        }
      }
    };
    $scope.uploadFiles = function (files) {
      //console.log(files);
      if(files!=null){
        if(typeof($scope.files)!='undefined'){
          $scope.files = $scope.files.concat(files);
        }else{
          $scope.files = (files);
        }

      }
      /*
       if (files && files.length) {
       Upload.upload({
       url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
       data: {
       files: files
       }
       }).then(function (response) {
       $timeout(function () {
       $scope.result = response.data;
       });
       }, function (response) {
       if (response.status > 0) {
       $scope.errorMsg = response.status + ': ' + response.data;
       }
       }, function (evt) {
       $scope.progress =
       Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
       });
       }
       */
    };





  });



  app.controller('SelectMorePersonCtrl', function($ionicLoading,$timeout,$scope,$rootScope,$ionicPopup,$http,$ionicScrollDelegate,$state, filterFilter) {
    /*
     $ionicHistory.nextViewOptions({
     historyRoot: true,
     disableAnimate: true,
     expire: 300
     });
     */
    $scope.$on('$ionicView.enter',function(){
      //$scope.selected = [];

    });

    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $timeout(function () {
      $ionicLoading.hide();

    }, 1000);
    //复选框处理
    $scope.selected = [];//选择的用户id
    $scope.selectedTags = [];//选择的用户名称
    $scope.selectedImgs = [];//选择的用户头像

    var updateSelected = function(action,id,name){

      if(action == 'add'){
        $scope.selected.push({'userid':id,'username':name,'img':name});
        console.log("添加："+$scope.selected.length);
        console.log($scope.selected);
        //$scope.selectedTags.push(name);
      }

      if(action == 'remove' ){
        for (var i = 0; i < $scope.selected.length; i++) {
          if($scope.selected[i].userid==id){
            //console.log("删除："+$scope.selected[i].userid+"="+id);

            $scope.selected.splice(i,1);
            console.log($scope.selected);
          }
        }


      }
      $rootScope.personmore=$scope.selected;
    }

    $scope.updateSelection = function($event, id){

      var checkbox = $event.target;
      var action = (checkbox.checked?'add':'remove');
      updateSelected(action,id,checkbox.name);
      //console.log($scope.selected);

    }

    $scope.isSelected = function(id){
      return $scope.selected.indexOf(id)>=0;
    }

    ////


    var letters = $scope.letters = [];
    var contacts = $scope.contacts = [];

    var currentCharCode = 'A'.charCodeAt(0) - 1;
    $scope.ctrlScope = $scope;
    //window.CONTACTS is defined below
    window.CONTACTS
      .sort(function(a, b) {
        return a.last_name > b.last_name ? 1 : -1;
      })
      .forEach(function(person) {
        //Get the first letter of the last name, and if the last name changes
        //put the letter in the array
        var personCharCode = person.last_name.toUpperCase().charCodeAt(0);
        //We may jump two letters, be sure to put both in
        //(eg if we jump from Adam Bradley to Bob Doe, add both C and D)
        var difference = personCharCode - currentCharCode;
        for (var i = 1; i <= difference; i++) {
          addLetter(currentCharCode + i);
        }
        currentCharCode = personCharCode;
        contacts.push(person);
      });

    //If names ended before Z, add everything up to Z
    for (var i = currentCharCode + 1; i <= 'Z'.charCodeAt(0); i++) {
      addLetter(i);
    }

    function addLetter(code) {
      var letter = String.fromCharCode(code);
      contacts.push({
        isLetter: true,
        letter: letter
      });
      letters.push(letter);
    }

    //Letters are shorter, everything else is 52 pixels
    $scope.getItemHeight = function(item) {
      return item.isLetter ? 40 : 100;
    };
    $scope.getItemWidth = function(item) {
      return '100%';
    };

    $scope.scrollBottom = function() {
      $ionicScrollDelegate.scrollBottom(true);
    };

    var letterHasMatch = {};
    $scope.getContacts = function() {
      letterHasMatch = {};
      //Filter contacts by $scope.search.
      //Additionally, filter letters so that they only show if there
      //is one or more matching contact
      return contacts.filter(function(item) {
        var itemDoesMatch = !$scope.search || item.isLetter ||
          item.first_name.toLowerCase().indexOf($scope.search.toLowerCase()) > -1 ||
          item.last_name.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;

        //Mark this person's last name letter as 'has a match'
        if (!item.isLetter && itemDoesMatch) {
          var letter = item.last_name.charAt(0).toUpperCase();
          letterHasMatch[letter] = true;
        }

        return itemDoesMatch;
      }).filter(function(item) {
        //Finally, re-filter all of the letters and take out ones that don't
        //have a match
        if (item.isLetter && !letterHasMatch[item.letter]) {
          return false;
        }
        return true;
      });
    };
    //负责指定完跳转
    $scope.GoPage = function (target,param) {

      $state.go(target,{});
    }

    $scope.clearSearch = function() {

      $scope.search = '';
    };
////////////////


////////////////



  });

  app.controller('SelectPersonCtrl', function($ionicLoading,$timeout,$scope,$rootScope,$ionicPopup,$http,$ionicScrollDelegate,$state, filterFilter) {
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $timeout(function () {
      $ionicLoading.hide();

    }, 2000);
    $scope.$on('$ionicView.beforeEnter',function(){
      //$scope.isselect=-1;

    });
    var letters = $scope.letters = [];
    var contacts = $scope.contacts = [];

    var currentCharCode = 'A'.charCodeAt(0) - 1;
    $scope.ctrlScope = $scope;
    //window.CONTACTS is defined below
    window.CONTACTS
      .sort(function(a, b) {
        return a.last_name > b.last_name ? 1 : -1;
      })
      .forEach(function(person) {
        //Get the first letter of the last name, and if the last name changes
        //put the letter in the array
        var personCharCode = person.last_name.toUpperCase().charCodeAt(0);
        //We may jump two letters, be sure to put both in
        //(eg if we jump from Adam Bradley to Bob Doe, add both C and D)
        var difference = personCharCode - currentCharCode;
        for (var i = 1; i <= difference; i++) {
          addLetter(currentCharCode + i);
        }
        currentCharCode = personCharCode;
        contacts.push(person);
      });

    //If names ended before Z, add everything up to Z
    for (var i = currentCharCode + 1; i <= 'Z'.charCodeAt(0); i++) {
      addLetter(i);
    }

    function addLetter(code) {
      var letter = String.fromCharCode(code);
      contacts.push({
        isLetter: true,
        letter: letter
      });
      letters.push(letter);
    }

    //Letters are shorter, everything else is 52 pixels
    $scope.getItemHeight = function(item) {
      return item.isLetter ? 40 : 100;
    };
    $scope.getItemWidth = function(item) {
      return '100%';
    };

    $scope.scrollBottom = function() {
      $ionicScrollDelegate.scrollBottom(true);
    };

    var letterHasMatch = {};
    $scope.getContacts = function() {
      letterHasMatch = {};
      //Filter contacts by $scope.search.
      //Additionally, filter letters so that they only show if there
      //is one or more matching contact
      return contacts.filter(function(item) {
        var itemDoesMatch = !$scope.search || item.isLetter ||
          item.first_name.toLowerCase().indexOf($scope.search.toLowerCase()) > -1 ||
          item.last_name.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;

        //Mark this person's last name letter as 'has a match'
        if (!item.isLetter && itemDoesMatch) {
          var letter = item.last_name.charAt(0).toUpperCase();
          letterHasMatch[letter] = true;
        }

        return itemDoesMatch;
      }).filter(function(item) {
        //Finally, re-filter all of the letters and take out ones that don't
        //have a match
        if (item.isLetter && !letterHasMatch[item.letter]) {
          return false;
        }
        return true;
      });
    };
    //负责指定完跳转
    $scope.GoPage = function (target,param) {
      //console.log($rootScope.tasktext);

      $state.go(target,{});
      // $state.go(target,{userid:$scope.isselect,username:$rootScope.username,img:$rootScope.img});
    }
    //选择
    $scope.selectitem = function(id,username,img) {
      var arr=new Array();
      $scope.isselect= id;

      arr.push({"userid":id,"username":username,"img":img});
      $rootScope.personone=arr;
      //alert(id);
    };
    $scope.clearSearch = function() {

      $scope.search = '';
    };
////////////////


////////////////



  });
});
