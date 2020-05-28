import client from "utils/client";
import { useAuth } from "context/auth";

export const createPost = async ({ title, content, premium }) => {
	try {
		const { user } = useAuth();
		console.log("createPost - user", user);
		console.log("createPost - title", title);
		console.log("createPost - content", content);
		console.log("createPost - premium", premium);
		// const { data } = await client.post("/post", { title, content, premium, user });
		// console.log("createPost - data response", data);
		// return data;
	} catch (error) {
		return Promise.reject(error);
	}
};
