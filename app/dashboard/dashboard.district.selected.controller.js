'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardDistrictSelectedCtrl', 
            ['$scope','$http','$stateParams', '$state', '$location',
    function ($scope,  $http,  $stateParams,   $state,   $location) {
      $scope.stats= {}; 

      console.log('$stateParams');
      console.dir($stateParams);

      $scope.nextState = function (state) {
        console.log('going into state: ' + state);

        // need to do this to support deep linking of app
        // if user copies and pastes url into a new browser tab, then clicks from
        // summary to analysis (say) then districtUrlForm will be undefined.
        /*
        if (!$scope.districtUrlForm) {
          $scope.districtUrlForm = $location.path().split('/')[3];
        }
        */
        $scope.districtUrlForm = $location.path().split('/')[3];
        console.log('and $scope.districtUrlForm: ' + $scope.districtUrlForm);
        $state.go('dashboard.district.selected.'+state,{district:$scope.districtUrlForm});
      };
  }]);
