var app = angular.module('squareApp');

app.controller('loginCtrl', function($scope) {
	$scope.loginFailMessage = "";
	
	$scope.login = function(username) {
		if(!localStorage.users){
			$scope.loginFailMessage = "User not found."
			return;
		}
		var users = JSON.parse(localStorage.users);
		for(i = 0; i < users.length; i++){
			if(users[i].username == username){
				$scope.loginFailMessage = "";

				localStorage.currentUser = username;
				createCookie("username", username, 1);

				window.location = "#home";
				return;
			}					
		}
		
		$scope.loginFailMessage = "User not found."
	};
	
	$scope.register = function(username) {
		$scope.loginFailMessage = "";
		
		if(localStorage.users) {
			var users = JSON.parse(localStorage.users);
			for(i = 0; i < users.length; i++){
				if(users[i].username == username){
					$scope.loginFailMessage = "User already exists."
					return;
				}					
			}
			add(username, users);
		}
		else {
			users = [];
			
			add(username, users);
		}
	}
});

function add(username, users) {
	users.push({ "username" : username });
	localStorage.users = JSON.stringify(users);

	localStorage.currentUser = username;
	createCookie("username", username, 1);

	window.location = "https://foursquare.com/oauth2/authenticate?client_id=3ANHQ4B311FDPQUSHWQDEVRSQQVDCDD5HBCVPHBEMMLETFTA"
							+ "&response_type=token&redirect_uri=http://54.201.68.154:3000/verify.html";
}