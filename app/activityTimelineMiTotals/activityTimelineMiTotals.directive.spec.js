'use strict';

describe('Directive: activityTimelineMiTotals', function () {

  // load the directive's module and view
  beforeEach(module('campaignTrackerApp'));
  beforeEach(module('app/activityTimelineMiTotals/activityTimelineMiTotals.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<activity-timeline-m-i-totals></activity-timeline-m-i-totals>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the activityTimelineMiTotals directive');
  }));
});
