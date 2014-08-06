'use strict';

describe('Directive: activityTotalVolWorkHrsGraph', function () {

  // load the directive's module and view
  beforeEach(module('campaignTrackerApp'));
  beforeEach(module('app/activityTotalVolWorkHrsGraph/activityTotalVolWorkHrsGraph.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<activity-total-vol-work-hrs-graph></activity-total-vol-work-hrs-graph>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the activityTotalVolWorkHrsGraph directive');
  }));
});