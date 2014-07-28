'use strict';

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('campaignTrackerApp')
  .controller('formModalInstanceCtrl',
            ['$scope', '$modalInstance', 'data', 
    function ($scope,   $modalInstance,   data) {
      $scope.dummy = "dUMMY";
      $scope.data = data;
      $scope.selected = {
        item: $scope.data[0]
      };

      $scope.ok = function () {
        $modalInstance.close($scope.dummy);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);
