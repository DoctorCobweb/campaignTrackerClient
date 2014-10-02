'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRegionCtrl', ['$scope', '$http', 'prettyUrl',
    function ($scope, $http, prettyUrl) {
      $scope.stats = {};
      $scope.dataRegions = prettyUrl.dataRegions;
      $scope.dataToUrlRegions = prettyUrl.dataToUrlRegions;

      //console.log('$scope.regionUrlForm');
      //console.log($scope.regionUrlForm);

      $scope.setRegion = function (region) {
        $scope.regionUrlForm = $scope.dataToUrlRegions[region];
        //console.log('$scope.regionUrlForm: ' + $scope.regionUrlForm);
      };
  }]);
