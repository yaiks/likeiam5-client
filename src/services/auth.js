import client from "utils/client";

export const signupEmailPassword = async ({ email, password }) => {
	try {
		const { data } = await client.post("/signup", {
			email,
			password,
		});

		return data.token;
	} catch (error) {
		throw new Error(error);
	}
};

export const loginEmailPassword = async ({ email, password }) => {
	try {
		const { data } = await client.post("/login", {
			email,
			password,
		});

		return data.token;
	} catch (error) {
		throw new Error(error);
	}
};
