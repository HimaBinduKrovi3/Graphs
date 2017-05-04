'use strict'

angular.module('seriesApp').directive("fileUploader", function() {
	return {
		restrict: "AEC",
		replace: true,
		template: "partials/import.html",
		link: function(scope, elem, attrs) {
			console.log(angular.element(elem.getElementById("fileUploader")));
		}
	}
});
