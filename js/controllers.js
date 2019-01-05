'use strict';



var carAppControllers = angular.module('carAppControllers', []);


carAppControllers.controller('MotoListCtrl', ['$scope', 'Mot',
  function($scope, Mot) {
    $scope.cars = Mot.query();
    $scope.orderProp = 'model';
  }]);

carAppControllers.controller('MotoDetailCtrl', ['$scope', '$routeParams', 'Mot',
  function($scope, $routeParams, Mot) {
    $scope.car = Mot.get({motoId: $routeParams.motoId}, function(car) {
      $scope.mainImageUrl = car.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);