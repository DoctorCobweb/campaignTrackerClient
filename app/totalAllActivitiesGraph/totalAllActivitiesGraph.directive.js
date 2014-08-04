'use strict';

angular.module('campaignTrackerApp')
  .directive('totalAllActivitiesGraph', function () {
    return {
      scope: {
        data: '='
      },
      templateUrl: 'app/totalAllActivitiesGraph/totalAllActivitiesGraph.html',
      restrict: 'E',
      link: function (scope, element, attrs) {

        scope.$watchCollection('[data, renderer]', function(newVal, oldVal){
          if(!newVal[0]){
            return;
          }


          var graph = new Rickshaw.Graph({
            element: angular.element("#total_all_activities_graph")[0],
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
            graph: graph,
            orientation: 'left',
            element: angular.element('#total_all_activities_y_axis')[0]
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
