angular.module("spBlogger.admin").config(["$stateProvider", function("$stateProvider") {
	$stateProvider.state("admin", {
		url: "/admin",
		abstract: "true",
		controller: "AdminController",
		templateUrl: "modules/admin/view/adminHome.html"
	});
	$stateProvider.state("admin.postNew", {
		url:"/posts/new",
		controller:"NewPostController",
		templateUrl:"modules/admin/view/adminNewPost.html"
	});
	$stateProvider.state("admin.updatePost", {
		url:"/posts/:id/edit",
		controller: "UpdatePostController",
		templateUrl: "modules/admin/view/adminUpdatePost.html"
	});
	$stateProvider.state("admin.allPost", {
		url: "",
		controller: "AllPostController",
		templateUrl: "modules/admin/view/adminAllPosts.html"
	});
}]);