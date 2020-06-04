import { h } from "preact";
import { Link } from "preact-router/match";
import Button from "components/Button";
import style from "./Published.css";

const Published = ({ createdPost }) => {
	return (
		<div class={style.published}>
			<div class={style.published_content}>
				<h1>
					<span class={style.post_title}>{createdPost.title}</span> was
					successfully published!
				</h1>
				<h2>Congratulations for posting your first article 🚀</h2>
				<Link class={style.published_button} href='/explore'>
					Done
				</Link>
			</div>
		</div>
	);
};

export default Published;
