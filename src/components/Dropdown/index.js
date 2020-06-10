import { h, render } from "preact";
import { useState } from "preact/hooks";
import { capitalizeFirstLetter } from "utils/helpers";
import style from "./style";

const Dropdown = ({ initialValue, onChange }) => {
	const [open, setOpen] = useState(false);

	const handleClick = (e) => {
		const { value } = e.target.dataset;
		setOpen(!open);

		if (value) {
			onChange(value);
		}
	};

	return (
		<div class={style.dropdown} id='category_type'>
			<button class={style.dropdown_button} onClick={handleClick}>
				{capitalizeFirstLetter(initialValue)}
			</button>
			<div class={open ? style.open : style.dropdown_content}>
				<ul class={style.dropdown_list}>
					<li onClick={handleClick} data-value='all'>
						All
					</li>
					<li onClick={handleClick} data-value='latest'>
						Latest
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dropdown;
