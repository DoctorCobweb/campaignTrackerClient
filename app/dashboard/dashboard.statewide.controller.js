'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardStatewideCtrl', ['$scope','$http','$stateParams', '$state',
    function ($scope, $http, $stateParams, $state) {
      $scope.stats= {}; 

      //console.log('$stateParams');
      //console.dir($stateParams);

      $scope.nextState = function (state) {
        //console.log('going into state: ' + state);
        $state.go('dashboard.statewide.' + state, $stateParams);
      };
  }]);
