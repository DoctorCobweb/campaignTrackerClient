'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardCtrl', 
            ['$scope', '$state', 'Auth', '$location',
    function ($scope,   $state,   Auth,   $location) {

      if (!Auth.isAdmin()) $location.path('/login');

      $scope.items = 
        [{'name':'Overview', 'endpoint':'overview'},
         {'name':'Upper House Region', 'endpoint':'upperHouseRegion'},
         {'name':'Lower House District','endpoint':'lowerHouseDistrict'},
         {'name':'Person', 'endpoint':'person'},
         {'name':'All Surveys', 'endpoint':'allSurveys'},
         {'name':'Event Report', 'endpoint':'eventReport'}];

      console.dir($scope.items);
  }]);
