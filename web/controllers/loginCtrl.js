var app = angular.module('squareApp');

app.controller('loginCtrl', function($scope) {
	eraseCookie("username");
	delete localStorage.username;
	$scope.loggedIn = false;
	$scope.login = function(username) {
		createCookie("username", username, 1);
		localStorage.username = username;
		if (!localStorage[username+'code']) {
			window.location = "https://foursquare.com/oauth2/authenticate?client_id=HSFNBRE43J2PV0WVTNH11GGBJJBCKYKND1XLW25PDP1GOTNV&response_type=token&redirect_uri=http://52.34.148.89:3000/verify.html";
		}
		else {
			window.location = '#/home';
		}
	}
	$scope.reset = function() {
		for (var key in localStorage) {
			if (!localStorage.hasOwnProperty(key)) continue;
			delete localStorage[key];
		}
		console.log(localStorage);
	}
});
