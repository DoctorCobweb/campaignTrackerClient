'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardPersonSummaryCtrl',
            ['$scope','$http','$stateParams', 'prettyUrl',
    function ($scope,  $http,  $stateParams, prettyUrl) {
      $scope.stats = {}; 
      $scope.dataPerson = prettyUrl.urlToDataPeople[$stateParams.person];

      console.log('$stateParams');
      console.dir($stateParams);
  
      $http.get('/api/dashboard/person/summary/' + $scope.dataPerson)
        .success(function (data) {
          $scope.stats = data;
          console.log('data from $http.get:');
          console.dir(data);
      });
  }]);
