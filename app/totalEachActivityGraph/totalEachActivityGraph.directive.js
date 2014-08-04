'use strict';

angular.module('campaignTrackerApp')
  .directive('totalEachActivityGraph', function () {
    return {
      scope: {
        data: '=datarrr',
        roogie: '=boogie'
      },
      transclude: true,
      templateUrl: 'app/totalEachActivityGraph/totalEachActivityGraph.html',
      restrict: 'E',
      link: function (scope, element, attrs) {

        scope.$watchCollection('[data, renderer]', function(newVal, oldVal){
          if(!newVal[0]){
            return;
          }

          console.log('DIRECTIVE scope');
          console.dir(scope);

          var graph = new Rickshaw.Graph({
            element: angular.element("#total_each_activity_graph")[0],
            width: 750,
            height: 450,
            series: [{data: scope.data, color: attrs.color}],
            renderer: 'bar'
          });

          var format = function (n) {
            var tickValues = {
              1:'DK', 
              2:'NTM',
              3:'OOO',
              4:'PB',
              5:'S',
              6:'TS',
              7:'VHG',
              8:'VRPC',
              9:'VHM'
            };
            return tickValues[n];
          };

          var formatVerbose = function (n) {
            var tickValues = {
              1:'Door Knocking', 
              2:'Neighbourhood Team Meeting',
              3:'One On One',
              4:'Phone Banking',
              5:'Stall',
              6:'Training Session',
              7:'Volunteer House Gathering',
              8:'Volunteer Recruitment Phone Calling',
              9:'Voter House Meeting'
            };
            return tickValues[n];
          };

          var xAxis = new Rickshaw.Graph.Axis.X({
            graph: graph,
            tickFormat: format
          });
          xAxis.render();

          var yAxis = new Rickshaw.Graph.Axis.Y({
            graph: graph,
            orientation: 'left',
            element: angular.element('#total_each_activity_y_axis')[0]
          });
          yAxis.render();


          var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph,
            xFormatter: formatVerbose,
            formatter: function(series, x, y, formattedX, formattedY){
              return y + " " + formattedX + " activities submitted";
            }
          });

          graph.render();
        });
      }
    };
  });
