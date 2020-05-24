import { h } from "preact";
import style from "./style";

const Layout = ({ children }) => (
	<section class={style.layout}>{children}</section>
);

export default Layout;
