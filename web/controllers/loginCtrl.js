var app = angular.module('squareApp');

app.controller('loginCtrl', function($scope) {
	$scope.loginFailMessage = "";
	
	$scope.login = function(username) {
		if(localStorage[username]) {
			$scope.loginFailMessage = "";

			localStorage.currentUser = { "username" : username };
			createCookie("username", username, 1);

			window.location = "#home";
		}
		else {
			$scope.loginFailMessage = "User not found."
		}
	};
	
	$scope.register = function(username) {
		if(!localStorage[username]) {
			$scope.loginFailMessage = "";

			localStorage[username] = JSON.stringify({ "username" : username });
			localStorage.currentUser = username;
			createCookie("username", username, 1);

			window.location = "https://foursquare.com/oauth2/authenticate?client_id=3ANHQ4B311FDPQUSHWQDEVRSQQVDCDD5HBCVPHBEMMLETFTA"
									+ "&response_type=token&redirect_uri=http://54.201.68.154:3000/verify.html";
		}
		else {
			$scope.loginFailMessage = "User already exists."
		}
	}
});