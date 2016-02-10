var app = angular.module('squareVerifyApp');

app.controller('verifyCtrl', function($scope, $location) {
	var token = $location.path().split('=')[1];
	var username = localStorage.currentUser;
	var users = JSON.parse(localStorage.users);
	for(i = 0; i < users.length; i++){
		if(users[i].username == username){
			$scope.user = users[i];
			$scope.userIdx = i;
		}
	}
	$scope.user.accessToken = token;
	users[$scope.userIdx] = $scope.user;
	localStorage.users = JSON.stringify(users);
	window.location = "/"
});