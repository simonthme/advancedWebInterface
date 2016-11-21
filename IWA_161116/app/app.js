'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.menu',
  'myApp.login',
  'myApp.home',
  'myApp.version',
  'myApp.profile',
  'myApp.devices',
  'ui.bootstrap',
  'ui.router',
  'myApp.authService'
])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    //$urlRouterProvider.hashPrefix('!');
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl',
      })
      .state('menu', {
        url: '/menu',
        templateUrl: 'menu/menu.html',
        controller: 'MenuCtrl',
      })

      .state('menu.profile', {
        url: '/profile',
        templateUrl: 'profile/profile.html',
        controller: 'ProfileCtrl',
      })
      .state('menu.home', {
        url: '/home',
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl',
      })
      .state('menu.devices', {
        url: '/devices',
        templateUrl: 'devices/devices.html',
        controller: 'DevicesCtrl',
      })
      ;

    $urlRouterProvider.otherwise('/login');
  }])

  .run(['$state', 'authService', '$rootScope', function ($state, auth, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
      var logVar = auth.getLogin();
      console.log(logVar);
      console.log(toState);
        if (logVar === null) {
          console.log('in if');
          $state.go('login');
        }
    });

  }]);
