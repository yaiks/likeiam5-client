const retrieveTokenFromURL = () => {
	const URLParams = new URLSearchParams(window.location.search);
	return URLParams.get("token");
};

export const getToken = () => {
	let token = localStorage.getItem("token");
	return token;
};

export const getTokenFromCallback = () => {
	const token = retrieveTokenFromURL();
	if (token) {
		setStorageItem("token", token);
	}
};

export const removeToken = () => {
	localStorage.removeItem("token");
};

export const setStorageItem = (key, value) => {
	localStorage.setItem(key, value);
};
