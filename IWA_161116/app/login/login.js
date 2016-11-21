'use strict';

angular.module('myApp.login', [])


.controller('LoginCtrl', ['authService', '$scope', function(auth, $scope) {
  var vm = $scope;

  vm.status = auth.userLogged.status;

  vm.alerts = [];

  $scope.$on('loginFailed', function () {
    vm.alerts.push({
      type: 'danger',
      msg:'Le nom d\'utilisateur ou le mot de passe est invalide',
    })
  });

  vm.closeAlert = function(index) {
    vm.alerts.splice(index, 1);
  };

  vm.login = function () {
      auth.login(vm.user);
  };

  vm.reset = function () {
    vm.user.username = "";
    vm.user.password = "";
  };


}]);