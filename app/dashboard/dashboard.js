'use strict';

angular.module('campaignTrackerApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        abstract: true,
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('dashboard.welcome', {
        url: '',
        templateUrl: 'app/dashboard/dashboard.welcome.html'
      })

      //STATEWIDE
      .state('dashboard.statewide', {
        abstract: true,
        url: '/statewide',
        templateUrl: 'app/dashboard/dashboard.statewide.html',
        controller: 'DashboardStatewideCtrl'
      })
      .state('dashboard.statewide.summary', {
        url: '/summary',
        templateUrl: 'app/dashboard/dashboard.statewide.summary.html',
        controller: 'DashboardStatewideSummaryCtrl'
      })
      .state('dashboard.statewide.analysis', {
        url: '/analysis',
        templateUrl: 'app/dashboard/dashboard.statewide.analysis.html',
        controller: 'DashboardStatewideAnalysisCtrl'
      })
      /*
      .state('dashboard.statewide.tracking', {
        url: '/tracking',
        templateUrl: 'app/dashboard/dashboard.statewide.tracking.html',
        controller: 'DashboardStatewideTrackingCtrl'
      })
      */

      //REGION
      .state('dashboard.region', {
        url: '/region',
        templateUrl: 'app/dashboard/dashboard.region.html',
        controller: 'DashboardRegionCtrl'
      })
      .state('dashboard.region.selected', {
        abstract: true,
        url: '',
        templateUrl: 'app/dashboard/dashboard.region.selected.html',
        controller: 'DashboardRegionSelectedCtrl'
      })
      .state('dashboard.region.selected.summary', {
        url: '/:region/summary',
        templateUrl: 'app/dashboard/dashboard.region.selected.summary.html',
        controller: 'DashboardRegionSelectedSummaryCtrl'
      })
      .state('dashboard.region.selected.analysis', {
        url: '/:region/analysis',
        templateUrl: 'app/dashboard/dashboard.region.selected.analysis.html',
        controller: 'DashboardRegionSelectedAnalysisCtrl'
      })
      /*
      .state('dashboard.region.selected.tracking', {
        url: '/:region/tracking',
        templateUrl: 'app/dashboard/dashboard.region.selected.tracking.html',
        controller: 'DashboardRegionSelectedTrackingCtrl'
      })
      */

      //DISTRICT
      .state('dashboard.district', {
        url: '/district',
        templateUrl: 'app/dashboard/dashboard.district.html',
        controller: 'DashboardDistrictCtrl'
      })
      .state('dashboard.district.selected', {
        abstract: true,
        url: '',
        templateUrl: 'app/dashboard/dashboard.district.selected.html',
        controller: 'DashboardDistrictSelectedCtrl'
      })
      .state('dashboard.district.selected.summary', {
        url: '/:district/summary',
        templateUrl: 'app/dashboard/dashboard.district.selected.summary.html',
        controller: 'DashboardDistrictSelectedSummaryCtrl'
      })
      .state('dashboard.district.selected.analysis', {
        url: '/:district/analysis',
        templateUrl: 'app/dashboard/dashboard.district.selected.analysis.html',
        controller: 'DashboardDistrictSelectedAnalysisCtrl'
      })
      /*
      .state('dashboard.district.selected.tracking', {
        url: '/:district/tracking',
        templateUrl: 'app/dashboard/dashboard.district.selected.tracking.html',
        controller: 'DashboardDistrictSelectedTrackingCtrl'
      })
      */

      /*
       * TODO
      //PERSON
      .state('dashboard.person', {
        url: '/person',
        templateUrl: 'app/dashboard/dashboard.person.html',
        controller: 'DashboardPersonCtrl'
      })
      .state('dashboard.person.summary', {
        url: '/:person',
        templateUrl: 'app/dashboard/dashboard.person.summary.html',
        controller: 'DashboardPersonSummaryCtrl'
      })

      //NEIGHBOURHOOD TEAM
      .state('dashboard.neighbourhoodTeam', {
        url: '/neighbourhoodTeam',
        templateUrl: 'app/dashboard/dashboard.neighbourhoodTeam.html',
        controller: 'DashboardNeighbourhoodTeamCtrl'
      })
      .state('dashboard.neighbourhoodTeam.summary', {
        url: '/:team',
        templateUrl: 'app/dashboard/dashboard.neighbourhoodTeam.summary.html',
        controller: 'DashboardNeighbourhoodTeamSummaryCtrl'
      })

      //REPORT
      .state('dashboard.report', {
        url: '/report',
        templateUrl: 'app/dashboard/dashboard.report.html',
        controller: 'DashboardReportCtrl'
      })
      */

      //RAW DATA
      .state('dashboard.rawData', {
        url: '/rawData',
        templateUrl: 'app/dashboard/dashboard.rawData.html',
        controller: 'DashboardRawDataCtrl'
      });
  }]);
