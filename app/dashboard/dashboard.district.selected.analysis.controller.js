'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardDistrictSelectedAnalysisCtrl', 
            ['$scope','$http','$stateParams', 'prettyUrl', '$location',
    function ($scope,  $http,  $stateParams,   prettyUrl,   $location) {

      $scope.stats= {}; 
      $scope.district = prettyUrl.urlToDataDistricts[$location.path().split('/')[3]];

      console.log('$stateParams');
      console.dir($stateParams);
  
      //TODO: make analysis endpoint
      $http.get('/api/dashboard/district/' + $scope.district + '/summary')
        .success(function (data) {
          $scope.stats = data;
          console.log('data from $http.get:');
          console.dir(data);
        });
  }]);
