import { h } from "preact";
import { Link } from "preact-router/match";
import Layout from "components/Layout";
import Divisor from "components/Divisor";
import LoginForm from "components/LoginForm";
import { useAuth } from "context/auth";
import style from "./style";

const Signup = () => {
	const { signup } = useAuth();
	return (
		<Layout>
			<div class={style.login_container}>
				<div class={style.login_box}>
					<h1 class={style.login_title}>Signup 👋</h1>
					<LoginForm
						buttonText='Signup'
						register={({ email, password }) => signup({ email, password })}
					/>
					<Divisor text='or' />
					<a
						class={style.google_login}
						href={`${process.env.API_URL}login/google`}
					>
						Signup with google
					</a>
					<span class={style.signup}>
						Already have an account? <Link href='/login'>login here</Link>
					</span>
				</div>
			</div>
		</Layout>
	);
};

export default Signup;
