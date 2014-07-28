'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRegionSelectedTrackingCtrl',
            ['$scope','$http','$stateParams',
    function ($scope,  $http,  $stateParams) {
      $scope.stats= {}; 

      console.log('$stateParams');
      console.dir($stateParams);
  
      //TODO: make this endpoint
      //$http.get('/api/dashboard/region/tracking/' + $scope.selectedRegion)
      $http.get('/api/dashboard/region/summary/' + $scope.selectedRegionDataForm)
        .success(function (data) {
          $scope.stats = data;
          console.log('data from $http.get:');
          console.dir(data);
        });
  }]);
