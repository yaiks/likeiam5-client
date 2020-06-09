import { h, render } from "preact";
import { useState } from "preact/hooks";
import style from "./style";

const Searchbar = ({ onSubmit }) => {
	const [value, setValue] = useState("");

	const handleOnInput = (e) => {
		const { value } = e.target;
		setValue(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(value);
	};

	return (
		<form class={style.searchbar} onSubmit={handleSubmit}>
			<div class={style.searchbar_content}>
				<input
					class={style.searchbar_input}
					type='search'
					autocomplete='off'
					value={value}
					onInput={handleOnInput}
				/>
				<img class={style.search_icon} src='assets/icons/search.svg' />
			</div>
		</form>
	);
};

export default Searchbar;
