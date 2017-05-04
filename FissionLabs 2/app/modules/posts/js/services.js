'use strict'

angular.module('spBlogger.posts.services', []).factory('postService', function() {
return {
posts: [{
id: 1,
title: 'Simple title1',
content: 'Sample content...',
permalink: 'simple-title1',
author: 'Sandeep',
datePublished: '2012-04-04'
}, {
id: 2,
title: 'Simple title2',
content: 'Sample content...',
permalink: 'simple-title2',
author: 'Sandeep',
datePublished: '2012-05-04'
}, {
id: 3,
title: 'Simple title3',
content: 'Sample content...',
permalink: 'simple-title3',
author: 'Sandeep',
datePublished: '2012-06-04'
}, {
id: 4,
title: 'Simple title4',
content: 'Sample content...',
permalink: 'simple-title4',
author: 'Sandeep',
datePublished: '2012-07-04'
}],
getAllPosts: function() {
return this.posts;
},
getPostById: function(id) {
for (var i in this.posts) {
if (this.posts[i].id == id) {
return this.posts[i];
}
}
},
}
});



/*angular.module('spBlogger.posts.services',[]).factory("postService", function() {
	return {
		posts: [{
			"id": "1",
			"title": "Title 1",
			"content": "Content 1",
			"permalink": "sample-title1",
			"author": "Bindu",
			"datePublished": "2016-04-11"
		}, {
			"id": "1",
			"title": "Title 1",
			"content": "Content 1",
			"permalink": "sample-title1",
			"author": "Bindu",
			"datePublished": "2016-04-11"
		}, {
			"id": "1",
			"title": "Title 1",
			"content": "Content 1",
			"permalink": "sample-title1",
			"author": "Bindu",
			"datePublished": "2016-04-11"
		}, {
			"id": "1",
			"title": "Title 1",
			"content": "Content 1",
			"permalink": "sample-title1",
			"author": "Bindu",
			"datePublished": "2016-04-11"
		}],
		getAllPosts: function() {
			return this.posts;
		},
		getPostById: function(id) {
			for(var post in this.posts) {
				if(this.posts[post].id == id) {
					return this.posts[post];
				}
					
			}
		},
	}
});*/