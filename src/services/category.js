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

export const createCategory = async (name) => {
	try {
		const { data } = await client.post("/category", { name });
		return data;
	} catch (error) {
		return Promise.reject(error);
	}
};
