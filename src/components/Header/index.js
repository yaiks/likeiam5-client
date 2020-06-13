import { h, Fragment } from "preact";
import { Link } from "preact-router/match";
import { useAuth } from "context/auth";
import Button from "components/Button";
import style from "./style.css";

const Header = () => {
	const { user, logout } = useAuth();

	return (
		<header class={style.header}>
			<div class={style.header_content}>
				<Link href='/'>
					<h1>xplain</h1>
				</Link>
				<nav>
					<Link href='/explore' class={style.header_link}>
						Explore
					</Link>
					{user ? (
						<Fragment>
							<Link href='/profile/john' class={style.header_link}>
								{user.username}
							</Link>
							<Link href='/editor' class={style.header_link}>
								Write
							</Link>
							<Link href='/profile' class={style.header_link}>
								Profile
							</Link>
							<Button variety='secondary' onClick={() => logout()}>
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
