'use strict';

/* App Module */
/* se crea el modulo del aplicativo*/
var motoApp = angular.module('motoApp', [
	'ngRoute',
  'carAppAnimations',
  'carAppControllers',
  'carAppServices' 
]);


//Se agrega la configuracion de rutas!!
motoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cars', {
        templateUrl: 'partials/moto-list.html',
        controller: 'MotoListCtrl'
      }).
      when('/cars/:carId', {
        templateUrl: 'partials/moto-detail.html',
        controller: 'MotoDetailCtrl'
      }).
      otherwise({
        redirectTo: '/cars'
      });
  }]);