'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardDistrictSelectedSummaryCtrl', 
            ['$scope','$http','$stateParams',
    function ($scope,  $http,  $stateParams) {
      $scope.stats= {}; 

      console.log('$stateParams');
      console.dir($stateParams);
      console.log('sending off district: ' + $scope.selectedDistrictDataForm);
  
      $http.get('/api/dashboard/district/summary/' + $scope.selectedDistrictDataForm)
        .success(function (data) {
          $scope.stats = data;
          console.log('data from $http.get:');
          console.dir(data);
        });
  }]);
