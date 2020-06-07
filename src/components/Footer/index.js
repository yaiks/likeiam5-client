import { h, Fragment } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Footer = () => (
	<footer class={style.footer}>
		<div class={style.footer_content}>
			<div class={style.footer_column}>
				<Link href='/'>Get premium</Link>
				<Link href='/'>Explore</Link>
				<Link href='/'>All categories</Link>
				<Link href='/'>Login</Link>
			</div>
			<div class={style.footer_column}>
				<p class={style.author}>Copyright 2020</p>
				<p class={style.author}>
					Made with 🖤 by <a href='github.com/ricardohan93'>Ricardo Han</a>
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
