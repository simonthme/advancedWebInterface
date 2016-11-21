/**
 * Created by admin on 18/11/2016.
 */
'use strict';

angular.module('myApp.devices', [])

    .controller('DevicesCtrl', ['$scope', 'authService',  function($scope, auth) {
        var vm = $scope;
        vm.user = auth.getUser();
        console.log(vm.user);
        vm.status = auth.userLogged.status;
        vm.device = auth.userLogged.device;
    }]);