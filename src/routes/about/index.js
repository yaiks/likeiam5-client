import { h } from "preact";
import Layout from "components/Layout";
import style from "./style.css";

const About = () => (
	<Layout>
		<div class={style.about}>
			<h1>About page</h1>
		</div>
	</Layout>
);

export default About;
