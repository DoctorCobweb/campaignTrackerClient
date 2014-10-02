'use strict';

angular.module('campaignTrackerApp')
  .directive('activityTimelineMiTotals', function () {
    return {
      scope: {
        data: '=data'
      },
      templateUrl: 'app/directives/activityTimelineMiTotals/activityTimelineMiTotals.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.$watchCollection('[data]', function (newVal, oldVal){
          if(!newVal[0]) return;
	  console.log('newVal:');
          console.dir(newVal);

	  var palette = new Rickshaw.Color.Palette();

	  _.forEach(newVal, function (item) {
	    item.color = palette.color();
	  });

          var graph = new Rickshaw.Graph({
            element: angular.element('#activity_timeline_mi_totals_graph')[0],
	    width: 750,
	    height: 450,
	    series: newVal[0], 
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
	    element: angular.element('#activity_timeline_mi_totals_y_axis')[0] 
	  });
	  yAxis.render();

	  graph.render();

	  var legend = new Rickshaw.Graph.Legend({
	    graph: graph,
	    element: angular.element('#activity_timeline_mi_totals_legend')[0]
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
