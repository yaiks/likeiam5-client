import client from "utils/client";
import { useAuth } from "context/auth";

export const getAllPosts = async ({ order = "", title = "" } = {}) => {
	try {
		const { data } = await client.get(`/posts?order=${order}&title=${title}`);
		return data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getPostsByCategory = async (categoryId) => {
	try {
		const { data } = await client.get(`/posts/category/${categoryId}`);
		return data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getPostById = async (postId) => {
	try {
		const { data } = await client.get(`/post/${postId}`);
		return data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const createPost = async ({
	title,
	content,
	category,
	html_content,
	premium,
	html_premium,
}) => {
	try {
		const { user } = useAuth();
		const { data } = await client.post("/post", {
			title,
			content,
			category,
			html_content,
			premium,
			html_premium,
			user,
		});

		return data;
	} catch (error) {
		return Promise.reject(error);
	}
};
