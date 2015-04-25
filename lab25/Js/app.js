angular.module('initial_spi', ['ngRoute', 'initial_spi.controllers'])
.config(['$routeProvider', function($routeProvider){
	/*
	 * `when()` cuantas veces sea necesario
	 * `otherwise()` una sola vez "OJO"
	*/
	$routeProvider.when('/android', {
                templateUrl : "views/android.html",
                controller : 'mobileController'
            }).when('/iphone', {
                templateUrl : "views/iphone.html",
                 controller : 'smartphoneController'
            }).otherwise({
	    		redirectTo: '/',
	    		templateUrl: 'otherwise.html'
	});
 }]);