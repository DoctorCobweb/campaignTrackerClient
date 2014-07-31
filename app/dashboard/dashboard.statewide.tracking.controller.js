'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardStatewideTrackingCtrl',
            ['$scope','$http','$stateParams',
    function ($scope,  $http,  $stateParams) {
      $scope.stats= {}; 

      console.log('$stateParams');
      console.dir($stateParams);
  
      $http.get('/api/dashboard/statewide/tracking')
        .success(function (data) {
          $scope.stats = data;
          console.log('data from $http.get:');
          console.dir(data);
        });
  }]);
