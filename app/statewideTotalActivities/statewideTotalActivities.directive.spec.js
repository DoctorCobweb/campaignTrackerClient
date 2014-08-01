'use strict';

describe('Directive: statewideTotalActivities', function () {

  // load the directive's module
  beforeEach(module('campaignTrackerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<statewide-total-activities></statewide-total-activities>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the statewideTotalActivities directive');
  }));
});