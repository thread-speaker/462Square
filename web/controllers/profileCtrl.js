var app = angular.module('squareApp');

app.controller('profileCtrl', function($scope,$location) {
	$scope.user = $location.url().split('?')[1].split('=')[1];
	$scope.checkins = JSON.parse(localStorage[$scope.user + 'checkins']);
	$scope.username = localStorage.username;
	console.log($scope.checkins);
});
