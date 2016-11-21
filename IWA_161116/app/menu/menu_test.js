'use strict';

describe('myApp.menu module', function() {

  beforeEach(module('myApp.home'));

  describe('menu controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var HomeCtrl = $controller('HomeCtrl');
      expect(HomeCtrl).toBeDefined();
    }));

  });
});