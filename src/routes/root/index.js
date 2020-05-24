import { h } from "preact";

import Layout from "components/Layout";
import Hero from "./components/Hero.js";
import Body from "./components/Body.js";

const Root = () => (
	<Layout>
		<Hero />
		<Body />
	</Layout>
);

export default Root;
