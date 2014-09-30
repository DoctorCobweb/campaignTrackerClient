'use strict';

angular.module('campaignTrackerApp')
  .directive('timeValue', function () {
    return {
      link: function (scope, elem, attr) {
        console.log('elem.val()');	    
        console.log(elem.val());	    
        console.log('elem.text()');	    
        console.log(elem.text());	    
	//return elem.val();
      }
    }; 
  });
