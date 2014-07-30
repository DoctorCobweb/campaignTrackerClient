'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardDistrictSelectedTrackingCtrl', 
            ['$scope','$http','$stateParams', 'prettyUrl', '$location',
    function ($scope,  $http,  $stateParams,   prettyUrl,   $location) {
      $scope.stats= {}; 

      console.log('$stateParams');
      console.dir($stateParams);

      $scope.district = prettyUrl.urlToDataDistricts[$location.path().split('/')[3]];

      /*
      if (!$stateParams.district) {
        console.log(0);
        $scope.district = $location.path().split('/')[3];
      } else {
        console.log(1);
        $scope.district = prettyUrl.urlToDataDistricts[$stateParams.district];
      }
      */

  
      //TODO: make tracking endpoint
      //$http.get('/api/dashboard/district/summary/' + $scope.selectedDistrictDataForm)
      $http.get('/api/dashboard/district/' + $scope.district + '/summary')
        .success(function (data) {
          $scope.stats = data;
          console.log('data from $http.get:');
          console.dir(data);
        });
  }]);
