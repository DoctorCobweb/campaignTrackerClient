'use strict';

angular.module('campaignTrackerApp')
  .directive('totalEachActivityTimelineGraph', function () {
    return {
      scope: {
        data: '=datarrr',
        roogie: '=boogie'
      },
      templateUrl: 'app/totalEachActivityTimelineGraph/totalEachActivityTimelineGraph.html',
      restrict: 'E',
      link: function (scope, element, attrs) {

        scope.$watchCollection('[data, renderer]', function(newVal, oldVal){
          if(!newVal[0]){
            return;
          }

          console.log('TIMELINE DIRECTIVE scope');
          console.dir(scope);
          //console.log('angular.element(\'#total_each_activity_timeline_graph\')');
          //console.log(angular.element('#total_each_activity_timeline_graph'));
          //console.log('element');
          //console.log(element);
          //console.log(angular.element("#total_each_activity_timeline_y_axis")[0]);

          var palette = new Rickshaw.Color.Palette();

          _.forEach(scope.data, function (item) {
            item.color = palette.color();
          });
          //console.dir(scope.data);

          var graph = new Rickshaw.Graph({
            element: angular.element("#total_each_activity_timeline_graph")[0],
            width: 750,
            height: 450,
            series: scope.data,
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

          var xAxis = new Rickshaw.Graph.Axis.Time({
            graph: graph
          });
          xAxis.render();
         

          var yAxis = new Rickshaw.Graph.Axis.Y({
            graph: graph,
            orientation: 'left',
            element: angular.element("#total_each_activity_timeline_y_axis")[0]
          });
          yAxis.render();

          graph.render();

          var legend = new Rickshaw.Graph.Legend({
          	graph: graph,
          	element: angular.element("#total_each_activity_timeline_legend")[0]
          });
          
          var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({
          	graph: graph,
          	legend: legend
          });
          
          var order = new Rickshaw.Graph.Behavior.Series.Order({
          	graph: graph,
          	legend: legend
          });
          
          var highlight = new Rickshaw.Graph.Behavior.Series.Highlight({
          	graph: graph,
          	legend: legend
          });
        });
      }
    };
  });
