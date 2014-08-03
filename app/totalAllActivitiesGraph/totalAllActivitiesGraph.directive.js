'use strict';

angular.module('campaignTrackerApp')
  .directive('totalAllActivitiesGraph', function () {
    return {
      scope: {
        data: '='
      },
      template: '<div></div>',
      restrict: 'E',
      link: function (scope, element, attrs) {
        element.text('this is the totalAllActivitiesGraph directive');

        scope.$watchCollection('[data, renderer]', function(newVal, oldVal){
          if(!newVal[0]){
            return;
          }

          //console.log(element);
          element[0].innerHTML ='';

          var graph = new Rickshaw.Graph({
            element: element[0],
            width: 750,
            height: 450,
            series: [{data: scope.data, color: attrs.color}],
            renderer: 'bar' 
          });

          var xAxis = new Rickshaw.Graph.Axis.Time({
            graph: graph
          });
          xAxis.render();

          var yAxis = new Rickshaw.Graph.Axis.Y({
            graph: graph
          });
          yAxis.render();

          var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph,
            formatter: function(series, x, y, formattedX, formattedY){
              return y + " activities on " + formattedX;
            }
          });

          graph.render();
        });
      }
    };
  });
