import axios from "axios";
import { getStorageItem } from "./storage";

const client = axios.create({
	baseURL: process.env.API_URL,
});

client.interceptors.request.use(
	function (config) {
		const token = getStorageItem("token");
		config.headers.Authorization = token ? `Bearer ${token}` : "";
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default client;
