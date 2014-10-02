'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRegionSelectedSummaryCtrl',
            ['$scope','$http','$stateParams', 'prettyUrl', '$location',
    function ($scope,  $http,  $stateParams,   prettyUrl,   $location) {

      $scope.stats= {}; 
      $scope.region = prettyUrl.urlToDataRegions[$location.path().split('/')[3]];
 
      //console.log('SUMMARY');
      //console.log('$stateParams');
      //console.dir($stateParams);
      //console.log('$scope.region');
      //console.dir($scope.region);
  
      $http.get('/api/dashboard/region/' + $scope.region + '/summary')
        .success(function (data) {
          $scope.stats = data;
          //console.log('data from $http.get:');
          //console.dir(data);
        });
  }]);
