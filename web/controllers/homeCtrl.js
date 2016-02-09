var app = angular.module('squareApp');

app.controller('homeCtrl', function($scope) {
	$scope.loggedIn = function() {
		if(document.cookie)
			return true;
		else
			return false;
	}
});