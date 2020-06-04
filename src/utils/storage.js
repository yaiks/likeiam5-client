const retrieveTokenFromURL = () => {
	const URLParams = new URLSearchParams(window.location.search);
	return URLParams.get("token");
};

export const getStorageItem = (key) => {
	const item = localStorage.getItem(key);
	return item;
};

export const setStorageItem = (key, value) => {
	localStorage.setItem(key, value);
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
