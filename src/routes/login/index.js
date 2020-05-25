import { h } from "preact";
import { Link } from "preact-router/match";
import Layout from "components/Layout";
import LoginForm from "./components/LoginForm";
import { useAuth } from "context/auth";
import style from "./style";

const Login = () => {
	const { signin } = useAuth();
	return (
		<Layout>
			<div class={style.login_container}>
				<div class={style.login_box}>
					<h1 class={style.login_title}>Login to LikeIam5</h1>
					<LoginForm
						loginEmailPassword={({ email, password }) =>
							signin({ email, password })
						}
					/>
					<p class={style.divisor}>or</p>
					<a
						class={style.google_login}
						href={`${process.env.API_URL}login/google`}
					>
						Login with google
					</a>
					<span class={style.signup}>
						Don't have an account yet? <Link href='/signup'>Sign up here</Link>
					</span>
				</div>
			</div>
		</Layout>
	);
};

export default Login;
