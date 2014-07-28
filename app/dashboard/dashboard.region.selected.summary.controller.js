'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRegionSelectedSummaryCtrl',
            ['$scope','$http','$stateParams',
    function ($scope,  $http,  $stateParams) {
      $scope.stats= {}; 

      console.log('$stateParams');
      console.dir($stateParams);
      console.log('sending off region: ' + $scope.selectedRegionDataForm);
  
      $http.get('/api/dashboard/region/summary/' + $scope.selectedRegionDataForm)
        .success(function (data) {
          $scope.stats = data;
          console.log('data from $http.get:');
          console.dir(data);
        });
  }]);
