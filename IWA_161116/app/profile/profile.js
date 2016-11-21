/**
 * Created by simonthome on 20/11/2016.
 */
var profileModule = angular.module('myApp.profile', []);

profileModule.controller('ProfileCtrl', ['$scope', 'authService', function ($scope, auth) {
  var vm = $scope;
  vm.user = auth.getUser();
}]);