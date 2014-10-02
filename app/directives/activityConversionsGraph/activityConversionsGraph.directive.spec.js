'use strict';

describe('Directive: activityConversionsGraph', function () {

  // load the directive's module and view
  beforeEach(module('campaignTrackerApp'));
  beforeEach(module('app/directives/activityConversionsGraph/activityConversionsGraph.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<activity-conversions-graph></activity-conversions-graph>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the activityConversionsGraph directive');
  }));
});
