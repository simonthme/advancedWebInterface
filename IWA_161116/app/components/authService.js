/**
 * Created by simonthome on 16/11/2016.
 */

angular.module('myApp.authService', [])
.factory('authService', authService);

authService.$inject = ['$state', '$window', '$rootScope'];

function authService($state, $window, $rootScope) {

  var userLogged = {status:'logged out'};

  var userTable = [
    {username: 'maite',password:'maite'},
    {username: 'simon',password:'simon'}
  ];

  function login(user) {

    var test = false;
    angular.forEach (userTable, function(value, key) {
      console.log(angular.isDefined(user.username));
        if (value.username === user.username && value.password === user.password) {
          loginComplete(value);
          test = true;
        }
    });

    if (!test) {
      loginFailed();
    }

    function loginFailed() {
      $rootScope.$broadcast('loginFailed');
    }

    function loginComplete(loggedInUser) {
      $window.localStorage.setItem('logged', true);
      userLogged.status = 'login successful';
      userLogged.date = new Date();
      userLogged.username = loggedInUser.username;
      userLogged.password = loggedInUser.password;
      userLogged.device = navigator.userAgent;
      $window.localStorage.setItem('user', JSON.stringify(userLogged));
      console.log(status);
      $state.go('menu');
    }

  }

  function getLogin() {
     return $window.localStorage.getItem('logged');
  }

  function getUser() {
     return JSON.parse($window.localStorage.getItem('user'));
  }

  function logout() {
     $window.localStorage.removeItem('logged');
     $window.localStorage.removeItem('user');
     userLogged.status = 'Logged Out';
     $state.go('login');
  }

  return {
    userLogged: userLogged,
    getUser:getUser,
    login:login,
    logout: logout,
    getLogin: getLogin
  }


}
