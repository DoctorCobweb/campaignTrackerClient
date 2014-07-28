'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRegionCtrl', ['$scope', '$http', 'prettyUrl',
    function ($scope, $http, prettyUrl) {
      $scope.stats = {};
      $scope.dataRegions = prettyUrl.dataRegions;
      $scope.dataToUrlRegions = prettyUrl.dataToUrlRegions;

      $scope.setRegion = function (region) {
        $scope.selectedRegionUrlForm = $scope.dataToUrlRegions[region];
        $scope.selectedRegionDataForm = region;
        console.log('$scope.selectedRegionUrlForm: ' + $scope.selectedRegionUrlForm);
        console.log('$scope.selectedRegionDataForm: ' + $scope.selectedRegionDataForm);
      };
  }]);
