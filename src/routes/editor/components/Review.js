import { h } from "preact";
import Button from "components/Button";
import Divisor from "components/Divisor";
import style from "./Review.css";

const Review = ({ title, content, premium, publishPost }) => {
	return (
		<div class={style.review}>
			<div class={style.preview}>
				<div class={style.preview_header}>
					<h1>Review</h1>
					<Button variety='publish' onClick={() => publishPost()}>
						publish
					</Button>
				</div>
				<h2>{title}</h2>
				{content.map((c) => (
					<p>{c.insert}</p>
				))}
				<Divisor text='premium' />
				{premium.map((p) => (
					<p>{p.insert}</p>
				))}
			</div>
		</div>
	);
};

export default Review;
