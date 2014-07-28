'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardNeighbourhoodTeamCtrl',
            ['$scope', '$http', 'populateForm', 'prettyUrl',
    function ($scope,   $http,   populateForm,   prettyUrl) {
      $scope.dataNTeams = prettyUrl.dataNTeams;
      $scope.dataToUrlNTeams = prettyUrl.dataToUrlNTeams;
  }]);
