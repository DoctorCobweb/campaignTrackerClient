'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRegionSelectedCtrl',
            ['$scope','$http','$stateParams', '$state', '$location',
    function ($scope,  $http,  $stateParams,   $state,   $location) {
      $scope.stats= {}; 
      console.log('$stateParams:');
      console.dir($stateParams);
  
      $scope.nextState = function (state) {
        console.log('going into nextState: ' + state);
       
        // need to do this to support deep linking of app
        // if user copies and pastes url into a new browser tab, then clicks from 
        // summary to analysis (say) then regionUrlForm will be undefined.
        /*
        if (!$scope.regionUrlForm) {
          $scope.regionUrlForm = $location.path().split('/')[3];
        }
        */

        //must always reset the regionUrlForm to reflect url. handles deep linking
        $scope.regionUrlForm = $location.path().split('/')[3];
        console.log('and $scope.regionUrlForm: ' + $scope.regionUrlForm);
        $state.go('dashboard.region.selected.' + state, 
          {region:$scope.regionUrlForm});
      };
  }]);
