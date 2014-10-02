'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardDistrictCtrl', 
            ['$scope', '$http', 'prettyUrl',
    function ($scope,   $http,   prettyUrl) {

      $scope.dataDistricts = prettyUrl.dataDistricts;
      $scope.dataToUrlDistricts = prettyUrl.dataToUrlDistricts;

      $scope.setDistrict= function (district) {
        $scope.districtUrlForm = $scope.dataToUrlDistricts[district];
        //console.log('$scope.districtUrlForm: ' + $scope.districtUrlForm);
      };
  }]);
