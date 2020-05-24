import client from "utils/client";

export const getUser = async () => {
	try {
		const { data } = await client.get("/user");
		return data.user;
	} catch (error) {
		return Promise.reject(error);
	}
};
