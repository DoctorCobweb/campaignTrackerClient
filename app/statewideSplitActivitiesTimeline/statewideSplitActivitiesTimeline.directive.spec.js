'use strict';

describe('Directive: statewideSplitActivitiesTimeline', function () {

  // load the directive's module
  beforeEach(module('campaignTrackerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<statewide-split-activities-timeline></statewide-split-activities-timeline>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the statewideSplitActivitiesTimeline directive');
  }));
});