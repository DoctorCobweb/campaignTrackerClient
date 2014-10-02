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
	    k,
	    rightIndex,
	    tempObj,
	    palette,
	    minX, 
	    maxX,
	    tickVals = {},
	    graph,
	    format,
	    xAxis, yAxis,
	    hoverDetail;

          if (!newVal[0]) return;

	  //console.log('ACTIVITY TIMELINE MI WEEKLY');

	  result = _.reduce(newVal[0], function (result, val, key) {
	    result.push({x: parseInt(key, 10), y: val});
	    return result;
	  },[]);

	  result = _.sortBy(result, function (item) {return item.x;});
	  
	  result.reverse();
	  minX = result[0].x, 
	  maxX = result[result.length - 1].x,

	  k = 0;
	  while (k < result.length / 2) {
	    //swap x vals of each pair of elements in reversed result
	    rightIndex = result.length - k - 1;
	    tempObj = _.clone(result[k]);
	    result[k].x = result[rightIndex].x;
	    result[rightIndex].x = tempObj.x;
	    k++
	  }

	  //console.log('result reversed and swapped x vals:');
	  //console.log(result);

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
	  maxX = result[result.length - 1].x;
	  tickVals = {};
	  /*
	  //constructs a 'translator' obj for the reversal of x axis
	  //e.g. {7:9, 8:8, 9:7}
	  format = function (n) {
            for (var l = 0; l <= (maxX - minX); l++) {
	      tickVals[maxX - l] = minX + l;
	    } 
	    return tickVals[n];
	  };
	  */

	  //console.log('result');
	  //console.log(result);

	  format = function (n) {
            var rLength = result.length,
              m,
	      temp,
	      rightIndex;
	    for (m = 0; m < (rLength / 2); m++) {
	      temp = _.clone(result[m].x);
	      rightIndex = rLength - m - 1;
	      tickVals[result[m].x] = result[rightIndex].x;
	      tickVals[result[rightIndex].x] = temp;
	    }
	    //console.log('tickVals');
	    //console.log(tickVals);
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
