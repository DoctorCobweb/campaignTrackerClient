'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRegionSelectedSummaryCtrl',
            ['$scope','$http','$stateParams', 'prettyUrl',
    function ($scope,  $http,  $stateParams,   prettyUrl) {
      $scope.stats= {}; 
      $scope.region = prettyUrl.urlToDataRegions[$stateParams.region];

      console.log('$stateParams');
      console.dir($stateParams);
  
      $http.get('/api/dashboard/region/' + $scope.region + '/summary')
        .success(function (data) {
          $scope.stats = data;
          console.log('data from $http.get:');
          console.dir(data);
        });
  }]);
