angular.module("spBlogger.admin.services", []).factory("Post", ['$resource', 'API_ENDPOINT', function($resource, API_ENDPOINT) {
	return $resource(API_ENDPOINT, {id : '@_id'}, {
		update: {
			method: "PUT"
		}
	});
}]).service("popUpService", ['$window', function($window) {
	this.showPopUpMsg = function(message) {
		return $window.confirm(message);
	}
}]).value('API_ENDPOINT', "http://spblogger-sitepointdemos.rhcloud.com/api/posts/:id");