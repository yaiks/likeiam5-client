require("dotenv-safe").config();

const staticPages = [
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
	{
		url: "/about",
		title: "Write something amazing today",
	},
	{
		url: "/post/*",
		title: "Write something amazing today",
	},
];

module.exports = function () {
	return staticPages;
	// const response = await fetch(`${process.env.API_URL}posts`);
	// const { posts } = await response.json();
	// const postsPages = posts.map((post) => ({
	// 	url: `/post/${post.id}`,
	// 	title: post.title,
	// }));

	// return [...staticPages, ...postsPages];
};
