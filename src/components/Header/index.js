import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => {
	return (
		<header class={style.header}>
			<Link href='/'>
				<h1>Preact App</h1>
			</Link>
			<nav>
				<Link activeClassName={style.active} href='/home'>
					Home
				</Link>
				<Link activeClassName={style.active} href='/profile/john'>
					John
				</Link>
			</nav>
		</header>
	);
};

export default Header;
