'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRegionSelectedCtrl',
            ['$scope','$http','$stateParams', '$state', '$location',
    function ($scope,  $http,  $stateParams,   $state,   $location) {
      $scope.stats= {}; 
      //console.log('$stateParams:');
      //console.dir($stateParams);
  
      $scope.nextState = function (state) {
        //console.log('going into nextState: ' + state);
       
        //must always reset the regionUrlForm to reflect url. handles deep linking
        $scope.regionUrlForm = $location.path().split('/')[3];
        //console.log('and $scope.regionUrlForm: ' + $scope.regionUrlForm);
        $state.go('dashboard.region.selected.' + state, 
          {region:$scope.regionUrlForm});
      };
  }]);
