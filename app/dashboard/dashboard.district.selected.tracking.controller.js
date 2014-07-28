'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardDistrictSelectedTrackingCtrl', 
            ['$scope','$http','$stateParams',
    function ($scope,  $http,  $stateParams) {
      $scope.stats= {}; 

      console.log('$stateParams');
      console.dir($stateParams);
  
      //TODO: make tracking endpoint
      $http.get('/api/dashboard/district/summary/' + $scope.selectedDistrictDataForm)
        .success(function (data) {
          $scope.stats = data;
          console.log('data from $http.get:');
          console.dir(data);
        });
  }]);
