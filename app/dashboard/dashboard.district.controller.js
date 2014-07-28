'use strict';

angular.module('campaignTrackerApp')
  .controller('DashboardDistrictCtrl', ['$scope', '$http', 'prettyUrl',
    function ($scope, $http, prettyUrl) {
      $scope.dataDistricts = prettyUrl.dataDistricts;
      $scope.dataToUrlDistricts = prettyUrl.dataToUrlDistricts;

      $scope.setDistrict= function (district) {
        $scope.selectedDistrictUrlForm = $scope.dataToUrlDistricts[district];
        $scope.selectedDistrictDataForm = district;
        console.log('$scope.selectedDistrictUrlForm: '
                   + $scope.selectedDistrictUrlForm);
        console.log('$scope.selectedDistrictDataForm: '
                   + $scope.selectedDistrictDataForm);
      };
  }]);
