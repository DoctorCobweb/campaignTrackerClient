'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRegionSelectedCtrl',
            ['$scope','$http','$stateParams', '$state', '$location',
    function ($scope,  $http,  $stateParams,   $state,   $location) {
      $scope.stats= {}; 
      console.log('$stateParams:');
      console.dir($stateParams);
  
      //this will always be something. it will always be the region param we want
      //$stateParams let's us down when user copies and pastes the url into new tab
      //=>nothing will be on the $routeScope for region selected.
      $scope.region = $location.path().split('/')[3];

      $scope.nextState = function (state) {
        console.log('going into nextState: ' + state);
        $state.go('dashboard.region.selected.' + state,
                  {region:$scope.region});
      };
  }]);
