'use strict';

angular.module('campaignTrackerApp')
  .directive('activityTotalVolWorkHrsGraph', function () {
    return {
      scope: {
        data: '=data'
      },
      templateUrl: 'app/directives/activityTotalVolWorkHrsGraph/activityTotalVolWorkHrsGraph.html',
      restrict: 'E',
      link: function (scope, element, attrs) {

        scope.$watchCollection('[data, renderer]', function(newVal, oldVal){
          if(!newVal[0]){
            return;
          }

          //console.log('TOTAL VOL WORK HOURSE DIRECTIVE scope');
          //console.dir(scope);

          //format data into as expected by rickshaw
          var relevantActivities = {
            'Door Knocking': 0,
            'Phone Banking': 1,
            'Volunteer Recruitment Phone Calling': 2
          };
          
          var formattedData = _.chain(scope.data)
            .map(function (item, index) {
              return {
                x:relevantActivities[item.activity],
                y:item.volTotalWorkHrs
              };
            })
	    .sortBy('x')
	    .value();
	    
          var graph = new Rickshaw.Graph({
            element: angular.element("#activity_total_vol_work_hrs_graph")[0],
            width: 750,
            height: 450,
            series: [{data: formattedData, color: attrs.color}],
            renderer: 'bar'
          });

          var format = function (n) {
            var tickValues = {
              0:'DK', 
              1:'PB',
              2:'VRPC'
            };
            return tickValues[n];
          };

          var formatVerbose = function (n) {
            var tickValues = {
              0:'Door Knocking', 
              1:'Phone Banking',
              2:'Volunteer Recruitment Phone Calling'
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
            element: angular.element('#activity_total_vol_work_hrs_y_axis')[0]
          });
          yAxis.render();

          var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph,
            xFormatter: formatVerbose,
            formatter: function(series, x, y, formattedX, formattedY){
              return y + " vol. hrs spent on " + formattedX + ".";
            }
          });

          graph.render();
        });
      }
    };
  });
