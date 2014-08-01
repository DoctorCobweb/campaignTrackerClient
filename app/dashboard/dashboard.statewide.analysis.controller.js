'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardStatewideAnalysisCtrl',
            ['$scope','$http','$stateParams',
    function ($scope,  $http,  $stateParams) {
      $scope.stats= {}; 

      console.log('$stateParams');
      console.dir($stateParams);

      $http.get('/api/dashboard/').success(function(result){
        $scope.sightings = result;
        console.log('result');
        console.dir(result);

        $scope.renderer = 'bar';
        $scope.sightingsByDate = _.chain(result)
          .countBy(function(sighting){return sighting.activity[0].activityDate})
          .pairs()
          .map(function(pair){
            //console.log(pair[0]);
            return {
              x: (new Date(pair[0]).getTime())/1000,
              y: pair[1]
            };
          })
          .sortBy(function(dateCount){return dateCount.x;})
          .value();
 
        console.log('$scope.sightingsByDate');
        console.dir($scope.sightingsByDate);
      });
  
      /*
      $http.get('/api/dashboard/statewide/analysis')
        .success(function (data) {
          $scope.stats = data;
          console.log('data from $http.get:');
          console.dir(data);
        });
      */
  }]);
