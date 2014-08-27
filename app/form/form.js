'use strict';

angular.module('campaignTrackerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('form', {
        url: '/form',
        templateUrl: 'app/form/form.html',
        controller: 'FormCtrl'
      });
  });
