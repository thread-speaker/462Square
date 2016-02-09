var app = angular.module('squareApp');

app.controller('loginCtrl', function($scope) {
	eraseCookie("username");
	delete localStorage.username;
	$scope.loggedIn = false;
	$scope.login = function(username) {
		createCookie("username", username, 1);
		localStorage.username = username;
		if (localStorage[username]) {
			localStorage[username] = localStorage[username] || 1;
		}
		window.location = "#home";
	}
});
