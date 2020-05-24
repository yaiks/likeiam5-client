import { h, Fragment } from "preact";
import { Link } from "preact-router/match";
import { useAuth } from "context/auth";
import Button from "components/Button";
import style from "./style.css";

const Header = () => {
	const { user } = useAuth();
	console.log("header user", user);
	return (
		<header class={style.header}>
			<div class={style.header_content}>
				<Link href='/'>
					<h1>Preact App</h1>
				</Link>
				<nav>
					<Link href='/home' class={style.header_link}>
						Home
					</Link>
					{user ? (
						<Fragment>
							<Link href='/profile/john' class={style.header_link}>
								John
							</Link>
							<Button
								variety='secondary'
								onClick={() => console.log("logout!")}
							>
								logout
							</Button>
						</Fragment>
					) : (
						<Link href='/login' class={style.header_link}>
							login
						</Link>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Header;
