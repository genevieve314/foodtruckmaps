angular.module('main.controller',['uiGmapgoogle-maps'])
	.config(function(uiGmapGoogleMapApiProvider) {
    	uiGmapGoogleMapApiProvider.configure({
        	key: 'AIzaSyDT01HsIXz3USWJjXG557arlBxX1xziClA',
        	v: '3.22',
        	libraries: 'weather,geometry,visualization'
    	});
	})
	.controller('MainController', function($scope){
		$scope.map = { center: { latitude: 37.7833, longitude: -122.4167 }, zoom: 10 };
	});