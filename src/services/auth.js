import client from "utils/client";

export const loginEmailPassword = async ({ email, password }) => {
	try {
		const { data } = await client.post("/signup", {
			email,
			password,
		});

		return data.token;
	} catch (error) {
		return new Error(error);
	}
};
