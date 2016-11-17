'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.home',
  'myApp.version',
  'ui.bootstrap',
    'ui.router',
    'myApp.authService'
]).
config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  //$urlRouterProvider.hashPrefix('!');
  $stateProvider
      .state('login', {
          url: '/login',
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl'
      })
      .state('home', {
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'HomeCtrl'
      })


  $urlRouterProvider.otherwise('/login');
}]);
