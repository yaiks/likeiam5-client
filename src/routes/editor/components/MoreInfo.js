import { h } from "preact";
import { route } from "preact-router";
import Button from "components/Button";
import Divisor from "components/Divisor";
import style from "./MoreInfo.css";

const MoreInfo = ({ title, setTitle, category, setCategory }) => {
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
				<input
					class={style.editor_form_input}
					type='text'
					value={category}
					placeholder='and a category'
					onInput={(e) => setCategory(e.target.value)}
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
