'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.authService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['authService', '$scope','$timeout', function(auth, $scope, $timeout) {
  var vm = $scope;
  vm.status = auth.user.status;
  vm.alerts = [];

  vm.login = function () {
    auth.login(vm.user);
    $timeout(function () {
      console.log(auth.user);
    },2000);
  };

  vm.reset = function () {
    auth.reset(vm.user);
  };


}]);