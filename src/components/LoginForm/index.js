import { h } from "preact";
import { useState } from "preact/hooks";
import Button from "components/Button";
import style from "./style";

const LoginForm = ({ register, buttonText }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});
	const [registerError, setRegisterError] = useState("");

	const validate = () => {
		let errors = {};

		if (!email) {
			errors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = "Invalid email";
		} else if (!password) {
			errors.password = "Type a password";
		} else if (!/^.{6,}$/.test(password)) {
			errors.password = "Invalid password";
		}

		return errors;
	};

	const submitRegister = async (e) => {
		e.preventDefault();
		const errors = validate();

		if (Object.keys(errors).length !== 0) {
			setErrors(errors);
		} else {
			const error = await register({ email, password });
			if (error) {
				setRegisterError("An error has ocurred");
			}
		}
	};

	return (
		<form onSubmit={submitRegister} class={style.form}>
			<input
				type='text'
				value={email}
				onInput={(e) => setEmail(e.target.value)}
				placeholder='email'
				class={`${style.input} ${errors.email && style.errror_input}`}
			/>
			<input
				type='password'
				value={password}
				onInput={(e) => setPassword(e.target.value)}
				placeholder='password'
				class={`${style.input} ${errors.password && style.errror_input}`}
			/>
			{errors.email && <span class={style.error_message}>{errors.email}</span>}
			{errors.password && (
				<span class={style.error_message}>{errors.password}</span>
			)}
			<Button type='submit' variety='primary' style={{ width: "100%" }}>
				{buttonText}
			</Button>
			{registerError && <p class={style.register_error}>{registerError}</p>}
		</form>
	);
};

export default LoginForm;
