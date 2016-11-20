'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.home',
  'myApp.version',
  'myApp.profile',
  'myApp.photo',
  'myApp.text',
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
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl',

      })
      .state('home.text', {
        url: '/text',
        templateUrl: 'text/text.html',
        controller: 'TextCtrl',

      })
      .state('home.photo', {
        url: '/photo',
        templateUrl: 'photo/photo.html',
        controller: 'PhotoCtrl',

      })
      .state('home.profile', {
        url: '/profile',
        templateUrl: 'profile/profile.html',
        controller: 'ProfileCtrl',
      });

    $urlRouterProvider.otherwise('/login');
  }])

  .run(['$state', 'authService', '$rootScope', function ($state, auth, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
      var logVar = auth.getLogin();
      console.log(toState);
        if (logVar === null) {
          $state.go('login');
        }
    });

  }]);
