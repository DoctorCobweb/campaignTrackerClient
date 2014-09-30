'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRegionSelectedAnalysisCtrl', 
            ['$scope','$http','$stateParams', 'prettyUrl', '$location',
    function ($scope,  $http,  $stateParams,   prettyUrl,   $location) {

      $scope.stats= {}; 
      $scope.region = prettyUrl.urlToDataRegions[$location.path().split('/')[3]];

      console.log('ANALYSIS');
      console.log('$stateParams');
      console.dir($stateParams);
      console.log('$scope.region');
      console.dir($scope.region);
  
      $http.get('/api/dashboard/region/' + $scope.region + '/analysis')
        .success(function (result) {
	  if (_.isEmpty(result)) {
	    console.log('response was empty => no surveys found for region');	  
	    return;
	  }
          $scope.surveysSplitByActivity = result.activityTotals;
          $scope.surveysSplitByActivityTimeline = result.activityTimelineTotals;
          $scope.activityConversions = result.activityConversions;
          $scope.activityTotalVolWorkHrs = result.activityTotalVolWorkHrs;
          $scope.activitiesTimelineMITotals = result.activityTimelineMITotals;
        });
  }]);
