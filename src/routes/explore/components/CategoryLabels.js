import { h, render } from "preact";
import { Link } from "preact-router/match";
import style from "./CategoryLabels.css";

const CategoryLabels = ({ categories, getCategoryPosts }) => (
	<ul class={style.category_labels}>
		<li class={style.category}>All</li>
		{categories.map((category) => (
			<li class={style.category} onClick={() => getCategoryPosts(category.id)}>
				{category.name}
			</li>
		))}
	</ul>
);

export default CategoryLabels;
