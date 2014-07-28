'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRawDataCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.surveys = {};
    $scope.index = 0;

    $http.get('/api/surveys')
      .success(function (data) {
        $scope.surveys = data;
        //console.dir($scope.surveys);
    });

  }]);
