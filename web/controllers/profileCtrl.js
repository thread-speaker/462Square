var app = angular.module('squareApp')

app.controller('profileCtrl', function($scope, $routeParams) {
	$scope.currentUser = function() {
		if($routeParams.user == localStorage.currentUser)
			return true;
		return false;
	}
	
	$scope.noCheckins = function() {
		if($scope.checkins.items)
			return $scope.checkins.items.length == 0;
		return true;
	}
	
	var users = JSON.parse(localStorage.users)
	for(i = 0; i < users.length; i++){
		if(users[i].username == $routeParams.user) {
			$scope.selectedUser = users[i];
			break;
		}
	}
	
	$scope.checkins = "(Retrieving checkin information...)";
	
	$.ajax({
		url: "https://api.foursquare.com/v2/users/self/checkins?oauth_token=" + $scope.selectedUser.accessToken + "&v=20160131&m=swarm"
	})
	.done(function (data) {
		$scope.retrievingMessage = "";
		$scope.checkins = data.response.checkins;
		$scope.$apply();
	})
	
});