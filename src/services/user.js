import client from "utils/client";

export const getUser = async () => {
	try {
		const { data } = await client.get("/user");
		return data.user;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const editMonetizationEndpoint = async ({ endpoint, userId }) => {
	try {
		const { data } = await client.put("/user/monetization-endpoint", {
			endpoint,
			userId,
		});
		return data;
	} catch (error) {
		return Promise.reject(error);
	}
};
