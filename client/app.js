angular
  .module('app', [
  	'ui.router',
  	'main.controller'])
  .config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: './main/main.html',
		});

})
