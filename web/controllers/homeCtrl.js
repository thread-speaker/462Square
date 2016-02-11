var app = angular.module('squareApp');

app.controller('homeCtrl', function($scope) {
	console.log(localStorage);
	$scope.username = localStorage.username;
	$scope.code = localStorage[$scope.username+'code'];

	$scope.loggedIn = false;
	if ($scope.username && $scope.code) {
		$scope.loggedIn = true;
		$scope.wat = "UJABUJA";
		$scope.profiles = {};
		for (var key in localStorage) {
			if (!localStorage.hasOwnProperty(key)
				|| key == 'username'
				|| !key.endsWith('code')) continue;
			var truekey = key.slice(0,-4);
			$scope.profiles[truekey] = truekey;
		}

		$.ajax({
			url: 'https://api.foursquare.com/v2/users/self/checkins?oauth_token='+$scope.code+'&v=20140806&m=foursquare',
			success: function(result) {
				var data = result.response.checkins;
				localStorage[localStorage.username+'checkins'] = JSON.stringify(data);
			},
		});
	}
});
