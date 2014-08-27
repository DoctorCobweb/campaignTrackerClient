'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardStatewideAnalysisCtrl',
            ['$scope','$http','$stateParams',
    function ($scope,  $http,  $stateParams) {
      $scope.stats= {}; 
      $scope.bogus = "bogus vlaue";
      $scope.yadda = "YADDA";

      console.log('$stateParams');
      console.dir($stateParams);

      console.log('CONTROLLER SCOPE');
      console.dir($scope);

      $http.get('/api/dashboard/statewide/analysis').success(function(result){
        $scope.allSurveys = result.total;
        $scope.surveysSplitByActivity = result.activityTotals;
        $scope.surveysSplitByActivityTimeline = result.activityTimelineTotals;
        $scope.activityConversions = result.activityConversions;
        $scope.activityTotalVolWorkHrs = result.activityTotalVolWorkHrs;
        $scope.activitiesTimelineMITotals = result.activityTimelineMITotals;
      });
  }]);
