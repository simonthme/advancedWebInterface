'use strict';

angular.module('myApp.home', [])

.controller('HomeCtrl', ['$scope', '$state', 'authService', function($scope, $state, authService) {
    $state.go('home.profile');
    $scope.logout = function () {
        authService.logout();
  }

}]);