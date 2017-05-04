'use strict';

angular.module('seriesApp', ['ui.router']);

angular.module('seriesApp').directive("fileUploader", function(seriesFactory) {
	return {
		restrict: "AEC",
		replace: true,
		templateUrl: "partials/import.html",
		scope: {
			eventTriggered: '=evtDone'
		}
		link: function(scope, elem, attrs) {
			elem.on("change", function(evt) {
				scope.eventTriggered = 1;;
				var files = evt.target.files;
				if(files.length) {
					seriesFactory.saveFileData(files);
				}
			});
			
		}
	}
});

angular.module('seriesApp').factory("seriesFactory", function() {
	var obj = {};
	
		obj.saveFileData= function(data) {
			var reader = new FileReader();
			reader.readAsText(data[0]);
			reader.onload = function(event) {
				var fileData = event.target.result;
				console.log(fileData);
				var arr = obj.convertToArray(fileData);
				console.log(Object.keys(arr));
			}
		},

		obj.convertToArray= function(csvString) {
		  var lines = csvString.split('\n');
      	  this.values  = {}, i;
	      for(i= 0; i < lines.length; i++){
	          var row = lines[i].split(',');

	          this.values[row[0]] = [];
	          for(j= 1; j< row.length; j++){
	              var rowValues = row[j].split('|');
	              var obj = {
	                "year" : rowValues[0],
	                "point" : rowValues[1]
	              }
	              values[row[0]].push(obj);
	          }
	      }

	      return this.values;
		},

		obj.updateEvtValue = function() {
			this.eventTriggered = 1;
			return this.eventTriggered;
		},

		obj.getSeriesValues= function() {
			return this.values;
		}
	return obj;
});

angular.module("seriesApp").factory("d3Service", function() {
	var d3 = {};

	return d3;
});

angular.module('seriesApp').controller('ImportController',function($scope, $location, seriesFactory){
	$scope.eventTriggered = evtDone;
	// $scope.eventTriggered = seriesFactory.updateEvtValue();
	console.log("in event");
	$scope.$watch('eventTriggered', function(newValue, oldValue) {
		if(newValue == 1) {
			this.seriesLinks = Object.keys(seriesFactory.getSeriesValues());
			console.log(this.seriesLinks);
		}
	});
	
});

angular.module('seriesApp').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider.state("import", {
		url: "/import",
		controller: "ImportController",
		templateUrl: "<file-uploader><file-uploader/>"
	});

	$stateProvider.state("displayChart", {
		url: "/chart/:id",
		controller: "ChartsController",
		templateUrl: "partials/charts.html"
	});
});


