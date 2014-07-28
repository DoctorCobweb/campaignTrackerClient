'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardStatewideCtrl', ['$scope','$http','$stateParams', '$state',
    function ($scope, $http, $stateParams, $state) {
      $scope.stats= {}; 
      $scope.breadCrumbs = [{'name':'Dashboard', 'state':'dashboard.welcome'},
                            {'name':$stateParams.detailItem, 
                             'state': 'dashboard.detail('
                                     + $stateParams.detailItem + ')'}
                           ];

      console.log('$stateParams');
      console.dir($stateParams);

      $scope.nextState = function (state) {
        console.log('going into state: ' + state);
        $state.go('dashboard.statewide.' + state, $stateParams);
      };
  }]);
