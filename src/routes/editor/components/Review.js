import { h } from "preact";
import { useState } from "preact/hooks";
import Button from "components/Button";
import Divisor from "components/Divisor";
import { createPost } from "services/post";
import style from "./Review.css";

const Review = ({ title, content, premium }) => {
	return (
		<div class={style.review}>
			<div class={style.preview}>
				<div class={style.preview_header}>
					<h1>Review</h1>
					<Button
						variety='publish'
						onClick={() => createPost({ title, content, premium })}
					>
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
