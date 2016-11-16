/**
 * Created by simonthome on 16/11/2016.
 */

angular.module('myApp.authService', [])
.factory('authService', authService);

authService.$inject = ['$location'];

function authService($location) {
  var userLogged = {caca:'caca'};

  var userTable = [
    {username: 'maite',password:'maite', status:'Logged out'}
  ];

   function reset(user) {
    user.username = '';
     user.password = '';
     user.status = 'Logged out'
  }

  function login(user) {

    var test = false;
    angular.forEach (userTable, function(value, key) {

        if (value.username === user.username && value.password === user.password) {
          loginComplete(value);
          test = true;
        }
    });

    if (!test) {
      loginFailed();
    }

    function loginFailed() {
      alert('authentification failed');
    }

    function loginComplete(loggedInUser) {

      userLogged.date = new Date();
      userLogged.status = 'login successful';
      userLogged.username = loggedInUser.username;
      userLogged.password = loggedInUser.password;
      userLogged.status = loggedInUser.status;
      $location.path('/view2');
    }

  }


  return {
    user:userLogged,
    login:login,
    reset:reset
  }


}
