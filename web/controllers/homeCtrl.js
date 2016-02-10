var app = angular.module('squareApp');

app.controller('homeCtrl', function($scope) {
	if(localStorage.users) {
		$scope.users = JSON.parse(localStorage.users);
		
		$scope.view = function(username) {
			window.location = "#profile?user=" + username
		}
	}
});