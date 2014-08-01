'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardStatewideAnalysisCtrl',
            ['$scope','$http','$stateParams',
    function ($scope,  $http,  $stateParams) {
      $scope.stats= {}; 

      console.log('$stateParams');
      console.dir($stateParams);

      $http.get('/api/dashboard/statewide/analysis').success(function(result){
        $scope.allSurveys = result.total;
        $scope.surveysSplitByActivity = result.split;
 
        console.log('$scope.allSurveys');
        console.dir($scope.allSurveys);
        console.log('$scope.surveysSplitByActivity');
        console.log($scope.surveysSplitByActivity);
      });
  }]);
