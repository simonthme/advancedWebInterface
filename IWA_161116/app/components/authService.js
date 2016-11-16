/**
 * Created by simonthome on 16/11/2016.
 */

angular.module('myApp.authService', [])
.factory('authService', authService);

authService.$inject = ['$location'];

function authService($location) {
  var user = {
    username: '',
    password: '',
    status: 'Logged out'
  };

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
        if (value.username === user.username && value.password === user.password && value.status === user.status) {
          test = true;
        }
    });

    if (test) {
      loginComplete();
    } else {
      loginFailed();
    }

    function loginFailed() {
      alert('authentification failed');
    }

    function loginComplete() {
      user.date = new Date();
      user.status = 'login successful';
      $location.path('/view2');
    }
  }

  return service = {
    user:user,
    login:login,
    reset:reset
  }





}
