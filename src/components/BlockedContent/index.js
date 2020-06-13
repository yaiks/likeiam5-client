import { h } from "preact";
import style from "./style";

const BlockedContent = ({ text, children }) => (
	<div class={style.not_premium}>
		<h2>{text}</h2>
		{children}
		<img src='/assets/images/not_premium.svg' alt={text} />
	</div>
);

export default BlockedContent;
