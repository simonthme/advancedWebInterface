/**
 * Created by simonthome on 20/11/2016.
 */
var homeModule = angular.module('myApp.home', []);

homeModule.controller('HomeCtrl', ['$scope', 'authService', function ($scope, auth) {
  var vm = $scope;
  vm.status = auth.userLogged.status;
  vm.user = auth.getUser();

}]);