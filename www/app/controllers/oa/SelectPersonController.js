define(['app'], function (app) {
app.controller('SelectPersonCtrl', function($ionicLoading,$timeout,$scope,$rootScope,$ionicPopup,$http,$ionicScrollDelegate,$state, filterFilter) {
  /*
  $scope.$on('$ionicView.loaded',function(){
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });

  });
  $scope.$on('$ionicView.enter',function(){
    //$scope.selected = [];
    $ionicLoading.hide();
  });
  */
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
      $scope.getItemLHeight = function(item) {
        return item.isLetter ? 40 : 60;
      };
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
