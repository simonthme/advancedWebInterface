'use strict';

angular.module('myApp.login', ['ngRoute'])


.controller('LoginCtrl', ['authService', '$scope', function(auth, $scope) {
  var vm = $scope;
  vm.status = auth.user.status;
  vm.alerts = [];

  vm.login = function () {
    auth.login(vm.user);
  };

  vm.reset = function () {
    auth.reset(vm.user);
  };


}]);