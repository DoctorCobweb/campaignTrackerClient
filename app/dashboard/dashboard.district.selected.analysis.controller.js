'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardDistrictSelectedAnalysisCtrl', 
            ['$scope','$http','$stateParams', 'prettyUrl', '$location',
    function ($scope,  $http,  $stateParams,   prettyUrl,   $location) {

      $scope.stats= {}; 
      $scope.district = prettyUrl.urlToDataDistricts[$location.path().split('/')[3]];

      console.log('$stateParams');
      console.dir($stateParams);
  
      $http.get('/api/dashboard/district/' + $scope.district + '/analysis')
        .success(function (result) {
          $scope.allSurveys = result.total;
          $scope.surveysSplitByActivity = result.activityTotals;
          $scope.surveysSplitByActivityTimeline = result.activityTimelineTotals;
          $scope.activityConversions = result.activityConversions;

        });
  }]);
