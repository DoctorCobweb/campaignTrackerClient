'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRegionSelectedTrackingCtrl',
            ['$scope','$http','$stateParams', 'prettyUrl', '$location',
    function ($scope,  $http,  $stateParams,   prettyUrl,   $location) {
      $scope.stats= {}; 

      console.log('TRACKING');
      console.log('$stateParams');
      console.dir($stateParams);

      $scope.region = prettyUrl.urlToDataRegions[$location.path().split('/')[3]];

      /*
      if (!$stateParams.region) {
        console.log(0);
        $scope.region = $location.path().split('/')[3];
      } else {
        console.log(1);
        $scope.region = prettyUrl.urlToDataRegions[$stateParams.region];
      }
      */

      console.log('$scope.region');
      console.dir($scope.region);
  
      //TODO: make this endpoint
      $http.get('/api/dashboard/region/' + $scope.region + '/summary')
        .success(function (data) {
          $scope.stats = data;
          console.log('data from $http.get:');
          console.dir(data);
        });
  }]);
