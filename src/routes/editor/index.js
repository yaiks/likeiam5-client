import { h } from "preact";
import { QuillEditor, Toolbar } from "components/Editor";
import style from "./style";

const Editor = () => {
	return (
		<section class={style.editor_section}>
			<Toolbar />
			<QuillEditor theme='snow' placeholder='start writing' />
		</section>
	);
};

export default Editor;
