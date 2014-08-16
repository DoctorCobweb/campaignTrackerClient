'use strict';

angular.module('campaignTrackerApp')
  .controller('FooterCtrl', ['$scope', 'Auth', function ($scope, Auth) {
    $scope.email = 'andretrosky@gmail.com';

    $scope.isLoggedIn = function () {
      return Auth.isLoggedIn();
    };

  }]);
