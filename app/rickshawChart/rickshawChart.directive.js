'use strict';

angular.module('campaignTrackerApp')
  .directive('rickshawChart', ['$http', function ($http) {
    return {
      scope : {
        data: '=',
        renderer: '='
      },
      template: '<div></div>',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.$watchCollection('[data, renderer]', function(newVal, oldVal){
          if(!newVal[0]){
            return;
          }

          //var testData = [{x:1, y:4}, {x:2, y:3}, {x:3, y:8}];
          console.log(element);
          console.log(0);
          //console.log(Rickshaw);
          console.log(scope);
          console.log(scope.sightingsByDate);
          console.log(attrs);
          //console.log(Rickshaw.Graph);
          //console.log(typeof(Rickshaw.Graph));
          //d.b.Graph.Renderer.Line.b.Class.create.defaults
          //console.log(Rickshaw.Graph.Renderer.Line);

          element[0].innerHTML ='';
          var graph = new Rickshaw.Graph({
            element: element[0],
            width: 750,
            height: 450,
            series: [{data: scope.data, color: attrs.color}],
            renderer: scope.renderer
          });

          console.log(1);
          var xAxis = new Rickshaw.Graph.Axis.Time({
            graph: graph
          });
          console.log(2);
          xAxis.render();

          console.log(3);
          var yAxis = new Rickshaw.Graph.Axis.Y({
            graph: graph
          });
          console.log(4);
          yAxis.render();

          console.log(5);
          var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph,
            formatter: function(series, x, y, formattedX, formattedY){
              return y + " activities on " + formattedX;
            }
          });    
          console.log(6);


          graph.render();
          console.log(7);
        });
      }
    };
  }]);
