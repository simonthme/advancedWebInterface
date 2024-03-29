'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /login when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/login");
  });


  describe('login', function() {

    beforeEach(function() {
      browser.get('index.html#!/login');
    });


    it('should render login when user navigates to /login', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#!/menu');
    });


    it('should render menu when user navigates to /menu', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
