import client from "utils/client";
import { useAuth } from "context/auth";

export const getAllPosts = async () => {
	try {
		const { data } = await client.get("/posts");
		console.log("getAllPosts - data response", data);
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
		console.log("data from post", data);
		return data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const createPost = async ({
	title,
	content,
	category,
	HTMLContent,
	premium,
	HTMLPremium,
}) => {
	try {
		const { user } = useAuth();
		const { data } = await client.post("/post", {
			title,
			content,
			category,
			HTMLContent,
			premium,
			HTMLPremium,
			user,
		});
		console.log("createPost - data response", data);
		return data;
	} catch (error) {
		return Promise.reject(error);
	}
};
