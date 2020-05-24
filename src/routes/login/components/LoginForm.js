import { h } from "preact";
import { useState } from "preact/hooks";
import Button from "components/Button";
import style from "./LoginForm.css";

const LoginForm = ({ loginEmailPassword }) => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const submitLogin = (e) => {
		e.preventDefault();
		loginEmailPassword({ email, password });
	};

	return (
		<form onSubmit={submitLogin} class={style.form}>
			<input
				type='text'
				value={email}
				onInput={(e) => setEmail(e.target.value)}
				placeholder='email'
				class={style.input}
			/>
			<input
				type='text'
				value={password}
				onInput={(e) => setPassword(e.target.value)}
				placeholder='password'
				class={style.input}
			/>
			<Button type='submit' variety='primary' style={{ width: "100%" }}>
				Login
			</Button>
		</form>
	);
};

export default LoginForm;
