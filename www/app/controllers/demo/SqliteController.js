define(['app'], function (app) {
app.controller('SqliteCtrl', function($scope,$ionicPopup,$cordovaSQLite) {
	   	 if (window.cordova) {
	      // App syntax
	      db = $cordovaSQLite.openDB("ly_oa.db");
			} else {
			      // Ionic serve syntax
			      db = window.openDatabase("ly_oa.db", "1.0", "oa DB",  1024 * 1024 * 100);
			}

		 $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS company (id integer primary key, name text, phone text, email text)");

		 $scope.insert = function(model) {
		        console.log(model);
		        var query = "INSERT INTO company (name, phone, email) VALUES (?,?,?)";
		        $cordovaSQLite.execute(db, query, ['字段', '2', '3']).then(function(res) {
		            console.log("INSERT ID test-> " + res.insertId);
		        }, function (err) {
		            console.log(err);
		        });
		        var query2 = "SELECT id, name, phone, email FROM company";
			    $cordovaSQLite.execute(db, query2, []).then(function(res) {
			        if(res.rows.length > 0) {
			            for(var i = 0; i < res.rows.length; i++) {
			                //$scope.categories.push({id: res.rows.item(i).id, name: res.rows.item(i).name, phone: res.rows.item(i).phone, email: res.rows.item(i).email});
			            	var xxx={id: res.rows.item(i).id, name: res.rows.item(i).name, phone: res.rows.item(i).phone, email: res.rows.item(i).email};
			            	//console.log(xxx);
			            	alert("存入:"+res.rows.item(i).id+res.rows.item(i).name);
			            }
			        }
			    }, function (err) {
			        console.error(err);
			    });
		}

   });
});
