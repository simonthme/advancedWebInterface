/**
 * Created by simonthome on 20/11/2016.
 */
'use strict';

describe('myApp.photo module', function() {

  beforeEach(module('myApp.photo'));

  describe('photo controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var HomeCtrl = $controller('PhotoCtrl');
      expect(HomeCtrl).toBeDefined();
    }));

  });
});