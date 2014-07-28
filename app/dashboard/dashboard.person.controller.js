'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardPersonCtrl',
            ['$scope', 'prettyUrl',
    function ($scope,   prettyUrl) {
      $scope.dataPeople = prettyUrl.dataPeople;
      $scope.dataToUrlPeople = prettyUrl.dataToUrlPeople;
  }]);
