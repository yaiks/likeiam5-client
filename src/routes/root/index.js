import { h } from "preact";

import Hero from "./components/Hero.js";
import Body from "./components/Body.js";
import Footer from "components/Footer";
import style from "./style.css";

const Root = () => (
	<div class={style.root}>
		<Hero />
		<Body />
		<Footer />
	</div>
);

export default Root;
