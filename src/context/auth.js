import { h, createContext } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";
import { getUser } from "../services/user";
import { loginEmailPassword } from "../services/auth";
import { setStorageItem, removeToken } from "utils/storage";

const AuthContext = createContext();

function AuthProvider(props) {
	const [state, setState] = useState({
		status: "pending",
		error: null,
		user: null,
	});

	useEffect(() => {
		getUser().then(
			(user) => setState({ status: "success", error: null, user }),
			(error) => setState({ status: "error", error, user: null })
		);
	}, []);

	const signin = async ({ email, password }) => {
		const token = await loginEmailPassword({ email, password });

		setStorageItem("token", token);
		window.location = "/home";
	};

	const logout = () => {
		removeToken();
		window.location = "/";
	};

	if (state.status === "pending") return <div>loading</div>;
	// if (state.status === "error") return <div>error man!</div>;

	return (
		<AuthContext.Provider
			value={{ user: state.user, signin, logout }}
			{...props}
		/>
	);
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
