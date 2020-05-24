import { h } from "preact";
import style from "./style.css";

const Button = ({ children, variety = "primary", ...props }) => (
	<button class={style[variety]} {...props}>
		{children}
	</button>
);

export default Button;
