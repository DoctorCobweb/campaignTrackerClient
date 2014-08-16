'use strict';

angular.module('campaignTrackerApp')
  .directive('activityConversionsGraph', function () {
    return {
      scope: {
        data: '=data'
      },
      templateUrl: 'app/activityConversionsGraph/activityConversionsGraph.html',
      restrict: 'E',
      link: function (scope, element, attrs) {

        scope.$watchCollection('[data, renderer]', function(newVal, oldVal){
          if(!newVal[0]){
            return;
          }

          console.log('ACTIVITY CONVERSIONS DIRECTIVE scope');
          console.dir(scope);

          //must munge scope.data into rickshaw format
          var relevantActivities = [
            'Door Knocking',
            'Phone Banking',
            'Volunteer Recruitment Phone Calling',
            'One On One',
            'Stall'
          ];

          //we use this as our ordering when formatting data into {x: , y: } style
          var availActivities = 
            _.intersection(relevantActivities, _.pluck(scope.data, 'activity'));
          //var availActivities = _.intersection (
          //  relevantActivities, _.map(scope.data, function (item) {
          //    return _.keys(item)[0];
          //}));
          console.log('availActivities');
          console.log(availActivities);
          
          //this is the directive data format we will add to
          var dData = {};
          //dData.total_attempts_percent = [];
          dData.answers_percent = [];
          dData.meaningful_interactions_percent = [];
      
          _.forEach(availActivities, function(act, index) {
            var x = index + 1; 

            //got to find stats for the act!!!!
            var aStats = _.find(scope.data, function (details) {
              return details.activity === act;
            });

            //var normalizedAttempts = 100.0 
            //  - (aStats.totAnsweredPercent + aStats.totMIPercent);
            //console.log('normalizedAttempts');
            //console.log(normalizedAttempts);
            
            //dData.total_attempts_percent.push({x:x, y:normalizedAttempts});
            dData.answers_percent.push({x:x, y:aStats.totAnsweredPercent});
            dData.meaningful_interactions_percent.push({x:x, y:aStats.totMIPercent});
          }); 

          console.log('dData');
          console.log(dData);

          //desired format
          //[{name: , data: },{},{}]
          var dataSeries = [];
          _.forEach(dData, function (actVals, key) {
            var aStack = {};
            aStack.name = key; 
            aStack.data = actVals; 
            dataSeries.push(aStack);
          });

          console.log('dataSeries');
          console.log(dataSeries);

         
          var palette = new Rickshaw.Color.Palette();   
          _.forEach(dataSeries, function(item) {
            item.color = palette.color();
          });
          

          var graph = new Rickshaw.Graph({
            element: angular.element("#activity_conversions_graph")[0],
            width: 750,
            height: 450,
            series: dataSeries,
            renderer: 'bar'
          });

          
          var format = function (n) {
            var tickValues = {};
            _.forEach(availActivities, function (val, index) {
              var splitted = val.split(' ');

              var initials = _.reduce(val.split(' '), function (abbr, word) {
                return abbr = abbr + word.toUpperCase()[0]; 
              }, '');

              tickValues[index + 1] = initials;
            });
            return tickValues[n];
          };

          /*
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
          */

          var xAxis = new Rickshaw.Graph.Axis.X({
            graph: graph,
            tickFormat: format
          });
          xAxis.render();

          var yAxis = new Rickshaw.Graph.Axis.Y({
            graph: graph,
            orientation: 'left',
            element: angular.element('#activity_conversions_y_axis')[0]
          });
          yAxis.render();


          graph.render();


          var legend = new Rickshaw.Graph.Legend({
                graph: graph,
                element: angular.element("#activity_conversions_legend")[0]
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


        }); //end scope.$watchCollection
      } //end link function
    }; //end factory obj
  });
