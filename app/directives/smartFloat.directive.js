'use strict';

angular.module('campaignTrackerApp')
  .directive('smartFloat', function() {
    var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
      return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
          ctrl.$parsers.unshift(function(viewValue) {
            if (FLOAT_REGEXP.test(viewValue)) {
              ctrl.$setValidity('float', true);
              return parseFloat(viewValue.replace(',', '.'));
            } else {
              ctrl.$setValidity('float', false);
             return undefined;
            }
          });
        }
      };
  })
  .directive('integer', function() {
      var INTEGER_REGEXP = /^\-?\d+$/;
      return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
          ctrl.$parsers.unshift(function(viewValue) {
            if (INTEGER_REGEXP.test(viewValue)) {
              ctrl.$setValidity('integer', true);
              return parseInt(viewValue, 10);
            } else {
              ctrl.$setValidity('integer', false);
             return undefined;
            }
          });
        }
      };
  });
