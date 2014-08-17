'use strict';

angular.module('campaignTrackerApp')
  .controller('FormCtrl', 
             ['$scope', 'populateForm', '$http', 'Auth', 'numberFilter', 
              '$modal', '$location',
    function ($scope, populateForm, $http, Auth, numberFilter, $modal, $location) {

      if (!Auth.isLoggedIn()) $location.path('/login');

      init();

      function init() {
        $scope.role = Auth.getCurrentUser().role;
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
          //$scope.selected = selectedItem;
          //console.log('$scope.selected dummy is: ' + selectedItem);
          $scope.submitForm();
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };

      //called when user has said details are correct. go onto submitting the form now
      $scope.submitForm = function () {
        //$scope.dataForm.$setPristine();

        //send data to backend
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
