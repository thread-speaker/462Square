var app = angular.module('squareApp');

app.controller('resetCtrl', function() {
	localStorage.clear();
	window.location = "/";
});