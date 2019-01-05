'use strict';



var motoAppControllers = angular.module('motoAppControllers', []);


motoAppControllers.controller('MotoListCtrl', ['$scope', 'Mot',
  function($scope, Mot) {
    $scope.motos = Mot.query();
    $scope.orderProp = 'model';
  }]);

motoAppControllers.controller('MotoDetailCtrl', ['$scope', '$routeParams', 'Mot',
  function($scope, $routeParams, Mot) {
    $scope.moto = Mot.get({motoId: $routeParams.motoId}, function(car) {
      $scope.mainImageUrl = moto.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);