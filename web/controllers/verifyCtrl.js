var app = angular.module('squareVerifyApp');

app.controller('verifyCtrl', function($scope, $location) {
	var token = $location.hash().split('=')[1];
	var username = localStorage.currentUser;
	localStorage[username].accessToken = token;
	$scope.verificationMessage = "verified with token: " + token;
});