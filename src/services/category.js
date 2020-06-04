import client from "utils/client";
import { useAuth } from "context/auth";

export const getAllCategories = async () => {
	try {
		const { data } = await client.get("/categories");
		return data;
	} catch (error) {
		return Promise.reject(error);
	}
};
