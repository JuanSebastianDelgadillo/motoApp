'use strict';

/* App Module */
/* se crea el modulo del aplicativo*/
var motoApp = angular.module('motoApp', [
	'ngRoute',
  'motoAppAnimations',
  'carAppControllers',
  'motoAppServices' 
]);


//Se agrega la configuracion de rutas!!
motoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/motos', {
        templateUrl: 'partials/moto-list.html',
        controller: 'MotoListCtrl'
      }).
      when('/motos/:motoId', {
        templateUrl: 'partials/moto-detail.html',
        controller: 'MotoDetailCtrl'
      }).
      otherwise({
        redirectTo: '/motos'
      });
  }]);