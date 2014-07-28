'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRegionSelectedCtrl',
            ['$scope','$http','$stateParams', '$state',
    function ($scope,  $http,  $stateParams,   $state) {
      $scope.stats= {}; 

      $scope.nextState = function (state) {
        console.log('going into nextState: ' + state);
        $state.go('dashboard.region.selected.' + state,
                  {region:$scope.selectedRegionUrlForm});
      };
  }]);
