'use strict';

angular.module('campaignTrackerApp')
  .directive('activityTimelineMiWeekly', function () {
    return {
      scope: {
        data: '=data'
      },
      templateUrl: 'app/directives/activityTimelineMiWeekly/activityTimelineMiWeekly.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.$watchCollection('[data]', function (newVal, oldVal) {
          var result,
	    rightIndex,
	    palette,
	    tickVals = {},
	    graph,
	    format,
	    minX, maxX,
	    xAxis, yAxis,
	    hoverDetail;

          if (!newVal[0]) return;

	  //console.log('ACTIVITY TIMELINE MI WEEKLY');

	  result = _.reduce(newVal[0], function (result, val, key) {
	    result.push({x: parseInt(key, 10), y: val});
	    return result;
	  },[]);

	  result = _.sortBy(result, function (item) {return item.x;});
	  
	  palette = new Rickshaw.Color.Palette();

	  graph = new Rickshaw.Graph({
	    element: angular.element('#activity_timeline_mi_weekly_graph')[0], 
	    width: 750,
	    height: 450,
	    series: [{data:result, color: palette.color()}],
	    renderer: 'bar'
	  });
	  graph.render();

          minX = result[0].x;
          maxX = result[result.length -1].x;
	  format = function (n) {
            for (var l = 0; l <= (maxX - minX); l++) {
	      tickVals[minX + l] = minX + l;
	    } 
	    return tickVals[n];
	  };

	  xAxis = new Rickshaw.Graph.Axis.X({
	    graph: graph,
	    tickFormat: format
	  });
	  xAxis.render();

	  yAxis = new Rickshaw.Graph.Axis.Y({
	    graph: graph, 
	    orientation: 'left',
	    element: angular.element('#activity_timeline_mi_weekly_y_axis')[0]
	  });
	  yAxis.render();

          hoverDetail = new Rickshaw.Graph.HoverDetail({
	    graph: graph,
	    formatter: function (series, x, y, formattedX, formattedY) {
	      return "Week " + tickVals[x] + ": " + y + "  meaningful interactions"; 
	    } 
	  });
	});
      }
    };
  });
