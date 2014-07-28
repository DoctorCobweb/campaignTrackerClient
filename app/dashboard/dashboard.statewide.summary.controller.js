'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardStatewideSummaryCtrl', ['$scope','$http','$stateParams',
    function ($scope, $http, $stateParams) {
      $scope.stats= {}; 
      $scope.breadCrumbs = [{'name':'Dashboard', 'state':'dashboard.welcome'},
                            {'name':$stateParams.detailItem, 
                             'state': 'dashboard.detail('
                                     + $stateParams.detailItem + ')'}
                           ];

      console.log('$stateParams');
      console.dir($stateParams);
  
      $http.get('/api/dashboard/overview/statewide')
        .success(function (data) {
          $scope.stats = data;
          console.log('data from $http.get:');
          console.dir(data);
        });
  }]);
