import { h, render } from "preact";
import { useState } from "preact/hooks";
import style from "./CategoryDropdown.css";

const CategoryDropdown = ({ initialValue, onChange, categories }) => {
	const [category, setCategory] = useState("Select a category");
	const [open, setOpen] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		const { categoryName, categoryId } = e.target.dataset;
		setOpen(!open);

		if (categoryName && categoryId) {
			onChange(categoryName, categoryId);
			setCategory(categoryName);
		}
	};

	return (
		<div class={style.dropdown} id='category_type'>
			<button class={style.dropdown_button} onClick={handleClick}>
				{category}
			</button>
			<div class={open ? style.open : style.dropdown_content}>
				<ul class={style.dropdown_list}>
					{categories.length > 0 &&
						categories.map((category) => (
							<li
								onClick={handleClick}
								data-category-name={category.name}
								data-category-id={category.id}
							>
								{category.name}
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default CategoryDropdown;
