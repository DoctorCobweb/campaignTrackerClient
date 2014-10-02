'use strict';

describe('Directive: totalEachActivityTimelineGraph', function () {

  // load the directive's module and view
  beforeEach(module('campaignTrackerApp'));
  beforeEach(module('app/directives/totalEachActivityTimelineGraph/totalEachActivityTimelineGraph.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<total-each-activity-timeline-graph></total-each-activity-timeline-graph>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the totalEachActivityTimelineGraph directive');
  }));
});
