'use strict';

// please note that $modalInstance represents a modal window (instance) dependency.
// it is not the same as the $modal service used.

angular.module('campaignTrackerApp')
  .controller('rawDataModalInstanceCtrl', 
            ['$scope', '$modalInstance', 'data', 'index',
    function ($scope,   $modalInstance,   data,   index) {
      $scope.index = index;

      $scope.activityPairs = _.reject(_.pairs(data.activity[0]), function (pair) {
        return (pair[0] === '_id');
      });

      $scope.campaignPairs = _.reject(_.pairs(data), function (pair) {
        return (pair[0] === '__v' || pair[0] === '_id' || pair[0] === 'activity' || pair[0] === 'user');
      });

       
      $scope.close = function () {
        $modalInstance.dismiss('close');
      };

    }]);
