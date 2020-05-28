import { h } from "preact";
import { useState } from "preact/hooks";
import Button from "components/Button";
import Divisor from "components/Divisor";
import style from "./MoreInfo.css";

const MoreInfo = ({ title, setTitle, setStep }) => {
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
			</div>
			<Button onClick={() => setStep("review")}>Review</Button>
			<Divisor text='or' />
			<Button onClick={() => setStep("premium")}>Write premium content</Button>
		</div>
	);
};

export default MoreInfo;
