'use strict';

var motoAppServices = angular.module('motoAppServices', ['ngResource']); //<---- Se agrega ng-resoruce para poder usar la libreria interna de angular


motoAppServices.factory('Mot', ['$resource',
  function($resource){
    return $resource('motos/:motoId.json', {}, {
      query: {method:'GET', params:{motoId:'motos'}, isArray:true}
    });
  }]);
