'use strict';

angular.module('campaignTrackerApp')
  .controller('FormCtrl', 
             ['$scope', 'populateForm', '$http', 'Auth', 'numberFilter', 
              '$modal', '$location',
    function ($scope, populateForm, $http, Auth, numberFilter, $modal, $location) {

      if (!Auth.isLoggedIn()) $location.path('/login');

      console.log('Auth.isLoggedIn()');
      console.log(Auth.isLoggedIn());
      console.log('Auth.getCurrentUser().role');
      console.log(Auth.getCurrentUser().role);
      
      init();

      /*
      $http.get('/api/users/me').success(function (user) {
        init();
	console.log(
      });
      */


      function init() {
        //this is used to limit route access
        //$http.get('/api/surveys').success(function (users) {
        //  $scope.isAuthenticated = Auth.isLoggedIn();
        //});

        //put this stuff in success callback of $http.get call above to hide form
        //behind login. for now you can see it without being logged in inorder to speed 
        //up dev time
        $scope.data = {};
        $scope.data.campaignDetails = {};
        $scope.data.activityDetails = {};

	//set the logged in user.role now since it's set from server during login
        $scope.data.campaignDetails.loggedInRole = Auth.getCurrentUser().role;

        //$scope.data.activityDetails.activityStartTime= new Date();
        $scope.hstep = 1;
        $scope.mstep = 5;
        $scope.options = {
          hstep: [1, 2, 3],
          mstep: [1, 5, 10, 15, 25, 30]
        };
        $scope.ismeridian = true;

        $scope.regions = populateForm.regions();
        $scope.data.campaignDetails.region = $scope.regions[0];
        $scope.districts = populateForm.districts();
        $scope.people = populateForm.people();
        $scope.neighbourhoodTeams = populateForm.nTeams();
        $scope.activityTypes = populateForm.aTypes();

        $scope.update = function() {
          var d = new Date();
          d.setHours( 14 );
          d.setMinutes( 0 );
          $scope.data.activityDetails.activityStartTime = d;
        };

      };


      //called when user tries to submit the form
      $scope.openModal = function (size) {
        var modalInstance = $modal.open({
          templateUrl: 'app/form/formModalContent.html',
          controller: 'formModalInstanceCtrl',
          size: size,
          resolve: {
            data: function () {
              return $scope.data;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
          console.log('$scope.selected dummy is: ' + selectedItem);
          $scope.submitForm();
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };


      //called when user has said details are correct. go onto submitting the form now
      $scope.submitForm = function () {
        $scope.dataForm.$setPristine();

        //do some linting on number values
        $scope.data.activityDetails.attempts = numberFilter(
          $scope.data.activityDetails.attempts, 2);
        $scope.data.activityDetails.answered = numberFilter(
          $scope.data.activityDetails.answered, 2);
        $scope.data.activityDetails.meaningfulInteractions = numberFilter(
          $scope.data.activityDetails.meaningfulInteractions, 2);
        $scope.data.activityDetails.volTotalWorkHrs = numberFilter(
          $scope.data.activityDetails.volTotalWorkHrs, 2);
        $scope.data.activityDetails.volTotalTrainingHrs = numberFilter(
          $scope.data.activityDetails.volTotalTrainingHrs, 2);

        if ($scope.data.activityDetails.volTotalHrsCommitted) {
          $scope.data.activityDetails.volTotalHrsCommitted = numberFilter(
           $scope.data.activityDetails.volTotalHrsCommitted, 2);
        }

        //send data to backend
        $http.post('/api/surveys', $scope.data).
          success(function(respData, status, headers, config){
            $scope.data = {};
            alert('SUCCESS: Your data has been submitted successfully.');
          }).
          error(function(respData, status, headers, config){
            alert('ERROR: status' + status);
            console.dir(respData);
          });
      };
  }]);
