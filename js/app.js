'use strict';

/* App Module */
/* se crea el modulo del aplicativo*/
var carApp = angular.module('carApp', [
	'ngRoute',
  'carAppAnimations',
  'carAppControllers',
  'carAppServices' // se agrega el servicio creado en services.js
]);


//Se agrega la configuracion de rutas!!
carApp.config(['$routeProvider',
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