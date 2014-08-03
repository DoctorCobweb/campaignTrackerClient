'use strict';

describe('Directive: totalEachActivityGraph', function () {

  // load the directive's module
  beforeEach(module('campaignTrackerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<total-each-activity-graph></total-each-activity-graph>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the totalEachActivityGraph directive');
  }));
});