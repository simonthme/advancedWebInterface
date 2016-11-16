'use strict';

angular.module('myApp.view2', ['ngRoute', 'myApp.authService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'authService',  function($scope, auth) {
  var vm = $scope;
  vm.status = auth.user.status;
  vm.username = auth.user.username;
  vm.date = auth.user.date;
}]);