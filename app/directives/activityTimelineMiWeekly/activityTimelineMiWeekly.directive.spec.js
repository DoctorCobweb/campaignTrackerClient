'use strict';

describe('Directive: activityTimelineMiWeekly', function () {

  // load the directive's module and view
  beforeEach(module('campaignTrackerApp'));
  beforeEach(module('app/directives/activityTimelineMiWeekly/activityTimelineMiWeekly.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<activity-timeline-mi-weekly></activity-timeline-mi-weekly>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the activityTimelineMiWeekly directive');
  }));
});
