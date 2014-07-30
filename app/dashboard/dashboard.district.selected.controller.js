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

        //must always reset districtUrlForm to allow for deep linking
        $scope.districtUrlForm = $location.path().split('/')[3];
        console.log('and $scope.districtUrlForm: ' + $scope.districtUrlForm);
        $state.go('dashboard.district.selected.'+state,{district:$scope.districtUrlForm});
      };
  }]);
