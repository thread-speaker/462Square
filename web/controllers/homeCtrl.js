var app = angular.module('squareApp');

app.controller('homeCtrl', function($scope) {
	$scope.loggedIn = false;
	if (document.cookie) {
		$scope.username = localStorage.username;
		$scope.loggedIn = true;
	}
});
