const { parsed } = require("dotenv-safe").config();

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
];

module.exports = async function () {
	const url = parsed["API_URL"];
	const response = await fetch(`${url}posts`);
	const { posts } = await response.json();
	const postsPages = posts.map((post) => ({
		url: `/post/${post.id}`,
		title: post.title,
	}));

	return [...staticPages, ...postsPages];
};
