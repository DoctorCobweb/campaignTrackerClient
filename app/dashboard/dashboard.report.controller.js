'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardReportCtrl', ['$scope', '$http', 
    function ($scope, $http) {
      $scope.stats = {};
  
      //hardcode url for now
      /*
      $http.get('/api/dashboard/report/Ocean Grove')
        .success(function (data) {
          $scope.stats = data;
          console.dir(data);      
        });
      */
  }]);
