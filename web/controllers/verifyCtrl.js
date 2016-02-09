var app = angular.module('squareApp');

app.controller('verifyCtrl', function($scope, $routeParams) {
	var code = $routeParams["code"];
	$.ajax({
		url: "https://foursquare.com/oauth2/access_token"
			+ "?client_id=3ANHQ4B311FDPQUSHWQDEVRSQQVDCDD5HBCVPHBEMMLETFTA"
			+ "&client_secret=RI40Z31FC5AKE50WIIUY5N2UMAV0ETOPJHR3OPVXRJVUS3HH"
			+ "&grant_type=authorization_code"
			+ "&redirect_uri=http://54.201.68.154:3000/#/verify"
			+ "&code=" + code,
		headers: {
			"Access-Control-Allow-Origin" : "*"
		}
	})
	.done(function(token){
		var username = localStorage.currentUser.username;
		localStorage[username].accessToken = token.access_token;
		$scope.verificationMessage = "Successfully validated with token " + access_token;
	});
});