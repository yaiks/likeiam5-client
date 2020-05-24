export const getCookie = (name) => {
	const rgx = new RegExp("(^| )" + name + "=([^;]+)");
	const cookie = document.cookie.match(rgx);

	return cookie ? cookie[2] : "";
};

export const getToken = () => {
	let token = localStorage.getItem("token");

	if (!token) {
		token = getCookie("token");
	}

	return token;
};

export const removeToken = () => {
	localStorage.removeItem("token");
	document.cookie = "token" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

export const setStorageItem = (key, value) => {
	localStorage.setItem(key, value);
};
