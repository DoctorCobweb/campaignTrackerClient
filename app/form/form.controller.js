'use strict';

//THIS FORM IS THE SUMMARY FORM!!!!

angular.module('campaignTrackerApp')
  .controller('FormCtrl', 
             ['$scope', 'populateForm', '$http', 'Auth', '$modal', '$location',
    function ( $scope,   populateForm,   $http,   Auth,   $modal,   $location) {

      if (!Auth.isLoggedIn()) $location.path('/login');

      init();

      function init() {
	var user = Auth.getCurrentUser();
        $scope.data = {};
        $scope.data.campaignDetails = {};
        $scope.data.activityDetails = {};

	//important: keep a ref of user document in
        $scope.data.campaignDetails.user = Auth.getCurrentUser()._id;

	//set survey to be of summary type (important!)
	$scope.data.campaignDetails.type = 'summary';

	//some values to be used in modal popup. we store a ref to the user document
	//in a survey document anyways so we have this info and more.
        $scope.data.campaignDetails.loggedInRole = user.role;
        $scope.data.campaignDetails.loggedInName = user.name;
        $scope.data.campaignDetails.loggedInEmail = user.email;

        //$scope.data.activityDetails.activityStartTime = new Date();
        $scope.hstep = 1;
        $scope.mstep = 5;
        $scope.options = {
          hstep: [1, 2, 3],
          mstep: [1, 5, 10, 15, 25, 30]
        };
        $scope.ismeridian = true;

	//populate form with selection data
        $scope.regions = populateForm.regions();
        $scope.data.campaignDetails.region = $scope.regions[0];
        $scope.districts = populateForm.districts();
        $scope.organizerPeople = populateForm.organizerPeople();
        $scope.dataEntryPeople = populateForm.dataEntryPeople();
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
          //$scope.selected = selectedItem;
          //console.log('$scope.selected dummy is: ' + selectedItem);
          $scope.submitForm();
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };

      function timeToDeci (time) {
	var timeSplit = time.toString(10).split('.');
	var timeFrac = (parseFloat("0." + timeSplit[1], 10) / 60.0) * 100;
	var totalTime = parseFloat(timeSplit[0], 10) + timeFrac;

        return totalTime;
      }

      //called when user has said details are correct. go onto submitting the form now
      $scope.submitForm = function () {

	//convert from hrs:mins format to decimal before sending to backend
        if ($scope.data.activityDetails.volTotalWorkHrs) {
          $scope.data.activityDetails.volTotalWorkHrs = 
            timeToDeci($scope.data.activityDetails.volTotalWorkHrs);
	}
        if ($scope.data.activityDetails.volTotalTrainingHrs) {
          $scope.data.activityDetails.volTotalTrainingHrs = 
            timeToDeci($scope.data.activityDetails.volTotalTrainingHrs);
	}
        if ($scope.data.activityDetails.volTotalHrsCommitted) {
          $scope.data.activityDetails.volTotalHrsCommitted= 
            timeToDeci($scope.data.activityDetails.volTotalHrsCommitted);
	}

        $http.post('/api/surveys', $scope.data).
          success(function(respData, status, headers, config){
            $scope.dataForm.$setPristine();
	    init();
            alert('SUCCESS: Your data has been submitted successfully.');
          }).
          error(function(respData, status, headers, config){
            alert('ERROR: status' + status);
            console.dir(respData);
          });
      };
  }]);
