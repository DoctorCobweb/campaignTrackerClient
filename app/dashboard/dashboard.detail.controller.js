'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardDetailCtrl', ['$scope','$http','$stateParams',
    function ($scope, $http, $stateParams) {
      $scope.stats= {}; 

      console.log('$stateParams');
      console.dir($stateParams);
  
      //$http.get('/api/dashboard/' + $stateParams.detailItem)
      $http.get('/api/dashboard/region/' + $stateParams.region)
        .success(function (data) {
          $scope.stats = data;
          console.log('data from $http.get:');
          console.dir(data);
      });
  }]);
