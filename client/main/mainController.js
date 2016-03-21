angular.module('main.controller',['uiGmapgoogle-maps'])
	.config(function(uiGmapGoogleMapApiProvider) {
    	uiGmapGoogleMapApiProvider.configure({
        	key: 'AIzaSyDT01HsIXz3USWJjXG557arlBxX1xziClA',
        	v: '3.22',
        	libraries: 'weather,geometry,visualization'
    	});
	})
	.controller('MainController', function($scope){
		$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
	});