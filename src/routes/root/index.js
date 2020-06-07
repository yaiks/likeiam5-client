import { h } from "preact";

import Hero from "./components/Hero.js";
import Body from "./components/Body.js";
import style from "./style.css";

const Root = () => (
	<div class={style.root}>
		<Hero />
		<Body />
	</div>
);

export default Root;
