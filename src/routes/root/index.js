import { h } from "preact";
import style from "./style";

import Hero from "./components/Hero.js";
import Body from "./components/Body.js";

const Root = () => (
	<section class={style.root}>
		<Hero />
		<Body />
	</section>
);

export default Root;
