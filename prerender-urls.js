// const { parsed } = require("dotenv-safe").config();

module.exports = function () {
	return [
		{
			url: "/",
			title: "Complex concepts in a simple manner",
		},
		{
			url: "/explore",
			title: "Learn something new exploring our articles",
		},
		{
			url: "/editor",
			title: "Write something amazing today",
		},
		{
			url: "/login",
			title: "Write something amazing today",
		},
	];
};

// const staticPages = [
// 	{
// 		url: "/",
// 		title: "Complex concepts in a simple manner",
// 	},
// 	{
// 		url: "/explore",
// 		title: "Learn something new exploring our articles",
// 	},
// 	{
// 		url: "/editor",
// 		title: "Write something amazing today",
// 	},
// 	{
// 		url: "/login",
// 		title: "Write something amazing today",
// 	},
// ];

// module.exports = async function () {
// 	const url = JSON.stringify(parsed["API_URL"]);
// 	console.log("URL", url);
// 	const response = await fetch(`http://localhost:3000/posts`);
// 	console.log("responsee", response);
// 	const { posts } = await response.json();
// 	console.log("posts", posts);
// 	const postsPages = posts.map((post) => ({
// 		url: `/post/${post.id}`,
// 		title: post.title,
// 	}));

// 	console.log("static pages", staticPages);

// 	return [...staticPages, ...postsPages];
// };
