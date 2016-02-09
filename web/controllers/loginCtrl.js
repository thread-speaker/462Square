var app = angular.module('squareApp');

app.controller('loginCtrl', function($scope) {
	$scope.loginFailMessage = "";
	
	$scope.login = function(username) {
		if(localStorage[username]) {
			$scope.loginFailMessage = "";
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

			localStorage[username] = username;
			createCookie("username", username, 1);
			window.location = "#home";
		}
		else {
			$scope.loginFailMessage = "User already exists."
		}
	}
});