'use strict';

angular.module('myApp.home', ['ngRoute'])

.controller('HomeCtrl', ['$scope', 'authService',  function($scope, auth) {
  var vm = $scope;
  vm.status = auth.user.status;
  vm.username = auth.user.username;
  vm.date = auth.user.date;
}]);