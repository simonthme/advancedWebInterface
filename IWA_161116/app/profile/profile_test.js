/**
 * Created by simonthome on 20/11/2016.
 */
'use strict';

describe('myApp.profile module', function() {

  beforeEach(module('myApp.profile'));

  describe('profile controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var HomeCtrl = $controller('ProfileCtrl');
      expect(ProfileCtrl).toBeDefined();
    }));

  });
});