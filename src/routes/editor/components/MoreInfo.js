import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { route } from "preact-router";
import Button from "components/Button";
import Divisor from "components/Divisor";
import CategoryDropdown from "./CategoryDropdown";
import { getAllCategories } from "services/category";
import style from "./MoreInfo.css";

const MoreInfo = ({
	title,
	setTitle,
	createdCategory,
	setCreatedCategory,
	category,
	setCategory,
}) => {
	const [categories, setCategories] = useState([]);
	const [errors, setErrors] = useState({});

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

	const validate = () => {
		let errors = {};

		if (!title) {
			errors.title = "Title is required";
		} else if (/[^a-zA-Z0-9 ]/.test(title)) {
			errors.title = "Invalid title";
		} else if (!category.name && !createdCategory) {
			errors.category = "Select or create a category";
		} else if (/[^a-zA-Z0-9 ]/.test(createdCategory)) {
			errors.category = "Invalid category";
		}

		return errors;
	};

	const goNextStep = (path) => {
		const errors = validate();

		if (Object.keys(errors).length !== 0) {
			setErrors(errors);
		} else {
			route(path);
		}
	};

	return (
		<div class={style.editor_more_info}>
			<h1>Tune your article</h1>
			<div class={style.editor_form_title}>
				<input
					class={`${style.editor_form_input} ${
						errors.title && style.errror_input
					}`}
					type='text'
					value={title}
					placeholder='Choose a title'
					onInput={(e) => setTitle(e.target.value)}
				/>
				<div class={style.category_selection}>
					<CategoryDropdown
						initialValue='Select a category'
						categories={categories}
						onChange={selectCategory}
					/>
					<span>or</span>
					<input
						class={`${style.create_category_input} ${
							errors.category && style.errror_input
						}`}
						type='text'
						value={createdCategory}
						placeholder='Create a category'
						onInput={(e) => setCreatedCategory(e.target.value)}
					/>
				</div>
			</div>
			{errors.title && <span class={style.error_message}>{errors.title}</span>}
			{errors.category && (
				<span class={style.error_message}>{errors.category}</span>
			)}
			<Button onClick={() => goNextStep("editor/review")}>Review</Button>
			<Divisor text='or' />
			<Button onClick={() => goNextStep("editor/premium")}>
				Write premium content
			</Button>
		</div>
	);
};

export default MoreInfo;
