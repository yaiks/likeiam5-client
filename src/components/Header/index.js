import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => {
	return (
		<header class={style.header}>
			<div class={style.header_content}>
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
			</div>
		</header>
	);
};

export default Header;
