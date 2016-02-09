var app = angular.module('462verify');

app.controller('verifyCtrl', function($scope, $location) {
	$scope.verified = false;
	var code = $location.hash().split('=')[1];
	console.log(code);
});
