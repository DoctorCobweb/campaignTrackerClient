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
          $scope.allSurveys = result.total;
          $scope.surveysSplitByActivity = result.activityTotals;
          $scope.surveysSplitByActivityTimeline = result.activityTimelineTotals;
          $scope.activityConversions = result.activityConversions;
        });
  }]);
