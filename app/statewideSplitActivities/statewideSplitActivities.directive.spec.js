'use strict';

describe('Directive: statewideSplitActivities', function () {

  // load the directive's module
  beforeEach(module('campaignTrackerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<statewide-split-activities></statewide-split-activities>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the statewideSplitActivities directive');
  }));
});