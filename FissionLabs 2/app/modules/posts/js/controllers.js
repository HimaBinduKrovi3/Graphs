'use strict'

angular.module('spBlogger.posts.controllers',[]).controller("PostController", ['$scope', 'postService', function($scope, postService) {
	$scope.getPosts = function() {
		return postService.getAllPosts();
	}
	$scope.posts = $scope.getPosts();
}]);

angular.module('spBlogger.posts.controllers').controller("PostDetailsController", ['$stateParams', '$state', '$scope', 'postService', function($stateParams, $state, $scope, postService) {
	$scope.getPostById = function(id) {
		return postService.getPostById(id);
	}

	$scope.closePost = function() {
		$state.go("allPosts");
	}

	$scope.singlePost = $scope.getPostById($stateParams.id);
}]);