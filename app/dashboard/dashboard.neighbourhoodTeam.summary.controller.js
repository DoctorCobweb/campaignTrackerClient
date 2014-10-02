'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardNeighbourhoodTeamSummaryCtrl',
            ['$scope','$http','$stateParams', 'prettyUrl',
    function ($scope,  $http,  $stateParams,   prettyUrl) {
      $scope.stats= {}; 
     
      $scope.dataNTeam = prettyUrl.urlToDataNTeams[$stateParams.team];

      //console.log('$stateParams');
      //console.dir($stateParams);
  
      $http.get('/api/dashboard/neighbourhoodTeam/summary/' + $scope.dataNTeam)
        .success(function (data) {
          $scope.stats = data;
          //console.log('data from $http.get:');
          //console.dir(data);
      });
  }]);
