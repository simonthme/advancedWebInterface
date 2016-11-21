/**
 * Created by simonthome on 20/11/2016.
 */
'use strict';

describe('myApp.home module', function() {

  beforeEach(module('myApp.photo'));

  describe('home controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var HomeCtrl = $controller('PhotoCtrl');
      expect(HomeCtrl).toBeDefined();
    }));

  });
});