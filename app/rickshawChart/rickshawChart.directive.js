'use strict';

angular.module('campaignTrackerApp')
  .directive('rickshawChart', function () {
    return {
      scope : {
        data: '=',
        renderer: '='
      },
      template: '<div></div>',
      restrict: 'E',
      link: function (scope, element, attrs) {
        element.text('this is the rickshawChart directive');
        scope.$watchCollection('[data, renderer]', function(newVal, oldVal){
          if(!newVal[0]){
            return;
          }

          element[0].innerHTML ='';

          var graph = new Rickshaw.Graph({
            element: element[0],
            width: attrs.width,
            height: attrs.height,
            series: [{data: scope.data, color: attrs.color}],
            renderer: scope.renderer
          });

          graph.render();
        });
      }
    };
  });
