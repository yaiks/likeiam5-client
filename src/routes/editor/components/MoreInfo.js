import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { route } from "preact-router";
import Button from "components/Button";
import Divisor from "components/Divisor";
import CategoryDropdown from "./CategoryDropdown";
import { getAllCategories } from "services/category";
import style from "./MoreInfo.css";

const MoreInfo = ({ title, setTitle, setCategory }) => {
	const [categories, setCategories] = useState([]);

	useEffect(async () => {
		const { categories } = await getAllCategories();
		setCategories(categories);
	}, []);

	const selectCategory = (category, id) => {
		setCategory({
			name: category,
			id,
		});
	};

	return (
		<div class={style.editor_more_info}>
			<h1>Tune your article</h1>
			<div class={style.editor_form_title}>
				<input
					class={style.editor_form_input}
					type='text'
					value={title}
					placeholder='Choose a title'
					onInput={(e) => setTitle(e.target.value)}
				/>
				<CategoryDropdown
					initialValue='Select a category'
					categories={categories}
					onChange={selectCategory}
				/>
			</div>
			<Button onClick={() => route("editor/review")}>Review</Button>
			<Divisor text='or' />
			<Button onClick={() => route("editor/premium")}>
				Write premium content
			</Button>
		</div>
	);
};

export default MoreInfo;
