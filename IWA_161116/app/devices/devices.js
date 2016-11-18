/**
 * Created by admin on 18/11/2016.
 */
'use strict';

angular.module('myApp.home', ['ngRoute'])

    .controller('DevicesCtrl', ['$scope', 'authService',  function($scope, auth) {
        var vm = $scope;
        vm.status = auth.user.status;
        vm.username = auth.user.username;
        vm.device = auth.user.device;
    }]);