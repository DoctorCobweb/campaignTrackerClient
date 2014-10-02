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
          if (!newVal[0]) return;
          console.log('IN MI WEEKLY...newVal is:');
          console.log(newVal[0]);


	  var result = _.reduce(newVal[0], function (result, val, key) {
	    result.push({x: parseInt(key, 10), y: val});
	    return result;
	  },[]);


	  result = _.sortBy(result, function (item) {return item.x;});

	  console.log('RESULT');
	  console.log(result);

	  var palette = new Rickshaw.Color.Palette();

	  /*
	  _.forEach(newVal, function (item) {
	    item.color = palette.color(); 
	  });
	  */

	  var testData = [{x:0, y:1}, {x:1, y:4}, {x:2,y:45}];
	  var graph = new Rickshaw.Graph({
	    element: angular.element('#activity_timeline_mi_weekly_graph')[0], 
	    width: 750,
	    height: 450,
	    series: [{data:result, color: palette.color()}],
	    renderer: 'bar'
	  });
	  graph.render();

	  /*
	  //just to 10 weeks out for now. add more later
	  var format = function (n) {
	    var tickValues = {
	      1: '1', 
	      2: '2', 
	      3: '3', 
	      4: '4', 
	      5: '5', 
	      6: '6', 
	      7: '7', 
	      8: '8', 
	      9: '9', 
	      10: '10'
	    }; 
	    return tickValues[n];
	  };
	  */


	  var xAxis = new Rickshaw.Graph.Axis.X({
	    graph: graph
	    //tickFormat: format
	  });
	  xAxis.render();

	  var yAxis = new Rickshaw.Graph.Axis.Y({
	    graph: graph, 
	    orientation: 'left',
	    element: angular.element('#activity_timeline_mi_weekly_y_axis')[0]
	  });
	  yAxis.render();

          var hoverDetail = new Rickshaw.Graph.HoverDetail({
	    graph: graph,
	    formatter: function (series, x, y, formattedX, formattedY) {
	      return "Week " + x + ": " + y + "  meaningful interactions"; 
	    } 
	  });


	});
      }
    };
  });
