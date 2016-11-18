/**
 * Created by admin on 18/11/2016.
 */
'use strict';

describe('myApp.home module', function() {

    beforeEach(module('myApp.home'));

    describe('home controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var DevicesCtrl = $controller('DevicesCtrl');
            expect(DevicesCtrl).toBeDefined();
        }));

    });
});