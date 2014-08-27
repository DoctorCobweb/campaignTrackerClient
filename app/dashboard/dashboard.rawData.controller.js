'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardRawDataCtrl',
            ['$scope', '$http', '$modal',
    function ($scope,   $http,   $modal) {
      $scope.surveys = {};
      $scope.searchTerm;
  
      $http.get('/api/surveys')
        .success(function (data) {
          $scope.surveys = data;
          console.dir('$scope.surveys');
          console.dir($scope.surveys);
      });

      $scope.openModal = function (index, size) {
        var modalInstace = $modal.open({
          templateUrl: 'app/dashboard/dashboard.rawData.modalContent.html',
          controller: 'rawDataModalInstanceCtrl',
          size: size,
          resolve: {
            data: function () {
              return $scope.surveys[index];
            },
            index: function () {
              return index;
            }
          }
        });
      };
  
      $scope.details = function (index){
        console.log('$scope.surveys[index]');
        console.log($scope.surveys[index]);
      };
  }]);
