'use strict';

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

	//set the logged in user.role now since it's set from server during login
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

      function parseActivityStringsToFloats () {
	//want to parse from string to float these values:
        //meaningfulInteractions
	//answered
	//attempts
	//volTotalWorkHrs
	//voTotalTrainingHrs
	//attendance
	//volTotalHrsCommitted
	
	var parsed = _.reduce($scope.data.activityDetails, function (acc, val, key) {
	  if (key === 'comment' || key === 'activityType' || typeof(val) !== 'string') {
            acc[key] = val;
	    return acc;
	  }
          if (typeof(val) === 'string') {
	    acc[key] = parseFloat(val, 10); 
	    return acc;
	  }
	}, {});

	//set parsed to be activityDetails obj
	$scope.data.activityDetails = parsed;
      }


      //called when user tries to submit the form
      $scope.openModal = function (size) {

        //since inputs are text type we need to parse to numbers
	parseActivityStringsToFloats();

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

      //called when user has said details are correct. go onto submitting the form now
      $scope.submitForm = function () {
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
