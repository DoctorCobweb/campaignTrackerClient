'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardDistrictSelectedSummaryCtrl', 
            ['$scope','$http','$stateParams', 'prettyUrl', '$location',
    function ($scope,  $http,  $stateParams,   prettyUrl,   $location) {
      $scope.stats= {}; 
      $scope.district = prettyUrl.urlToDataDistricts[$location.path().split('/')[3]];

      //console.log('$stateParams');
      //console.dir($stateParams);
  
      $http.get('/api/dashboard/district/' + $scope.district + '/summary/')
        .success(function (data) {
          $scope.stats = data;
          //console.log('data from $http.get:');
          //console.dir(data);
        });
  }]);
