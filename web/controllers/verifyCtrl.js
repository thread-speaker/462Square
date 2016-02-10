var app = angular.module('squareVerifyApp');

app.controller('verifyCtrl', function($scope, $location) {
	var token = $location.path().split('=')[1];
	var username = localStorage.currentUser;
	var user = JSON.parse(localStorage[username]);
	user.accessToken = token;
	localStorage[username] = JSON.stringify(user);
	$scope.verificationMessage = "verified with token: " + token;
});