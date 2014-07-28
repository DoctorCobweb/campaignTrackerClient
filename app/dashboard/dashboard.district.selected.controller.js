'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardDistrictSelectedCtrl', 
            ['$scope','$http','$stateParams', '$state',
    function ($scope,  $http,  $stateParams,   $state) {
      $scope.stats= {}; 

      console.log('$stateParams');
      console.dir($stateParams);

      $scope.nextState = function (state) {
        console.log('going into state: ' + state);
        $state.go('dashboard.district.selected.' + state,
                   {district:$scope.selectedDistrictUrlForm});
      };
  }]);
