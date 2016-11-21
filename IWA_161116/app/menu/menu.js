'use strict';

angular.module('myApp.menu', [])

.controller('MenuCtrl', ['$scope', '$state', 'authService', function($scope, $state, authService) {
    $state.go('menu.home');
    $scope.logout = function () {
        authService.logout();
  }

}]);