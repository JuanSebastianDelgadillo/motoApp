'use strict';

var motoAppServices = angular.module('motoAppServices', ['ngResource']); //<---- Se agrega ng-resoruce para poder usar la libreria interna de angular


motoAppServices.factory('Mot', ['$resource',
  function($resource){
    return $resource('motos/:carId.json', {}, {
      query: {method:'GET', params:{carId:'motos'}, isArray:true}
    });
  }]);
