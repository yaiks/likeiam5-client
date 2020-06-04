import { h } from "preact";
import { route } from "preact-router";
import { useEffect, useRef } from "preact/hooks";
import style from "./style";

let quill;

export const QuillEditor = ({ theme, placeholder }) => {
	const element = useRef(null);

	useEffect(() => {
		if (!element) return;

		if (typeof window !== "undefined") {
			const Quill = require("quill");
			quill = new Quill(element.current, {
				theme,
				placeholder,
				modules: {
					toolbar: "#toolbar",
				},
			});
		}
	}, []);

	return <div class={style.editor_container} ref={element} />;
};

export const Toolbar = ({
	type,
	setContent,
	setHTMLContent,
	setPremium,
	setHTMLPremium,
}) => (
	<div id='toolbar' class={style.editor_toolbar}>
		<div class={style.editor_configurations}>
			<span class='ql-formats'>
				<button class='ql-header' value='1'></button>
				<button class='ql-header' value='2'></button>
			</span>
			<span class='ql-formats'>
				<button class='ql-bold'></button>
				<button class='ql-italic'></button>
				<button class='ql-underline'></button>
				<button class='ql-strike'></button>
			</span>
			<span class='ql-formats'>
				<button class='ql-blockquote'></button>
				<button class='ql-code-block'></button>
			</span>
			<span class='ql-formats'>
				<button class='ql-script' value='sub'></button>
				<button class='ql-script' value='super'></button>
			</span>
			<span class='ql-formats'>
				<select class='ql-background'>
					<option
						value='rgb(250, 204, 204)'
						label='rgb(250, 204, 204)'
					></option>
					<option
						value='rgb(187, 187, 187)'
						label='rgb(187, 187, 187)'
					></option>
					<option
						value='rgb(204, 224, 245)'
						label='rgb(204, 224, 245)'
					></option>
				</select>
				<select class='ql-align'>
					<option selected></option>
					<option value='center'></option>
					<option value='right'></option>
					<option value='justify'></option>
				</select>
			</span>
			<span class='ql-formats'>
				<button class='ql-list' value='ordered'></button>
				<button class='ql-list' value='bullet'></button>
			</span>
			<span class='ql-formats'>
				<button class='ql-link'></button>
				<button class='ql-image'></button>
				<button class='ql-video'></button>
				<button class='ql-formula'></button>
				<button class='ql-clean'></button>
			</span>
		</div>

		<button
			onClick={() =>
				onPublish({
					type,
					setContent,
					setHTMLContent,
					setPremium,
					setHTMLPremium,
				})
			}
			class={style.publish_btn}
		>
			publish
		</button>
	</div>
);

const onPublish = ({
	type,
	setContent,
	setHTMLContent,
	setPremium,
	setHTMLPremium,
}) => {
	const html = quill.root.innerHTML.split(" ").join(" &nbsp;");

	if (type === "content") {
		const content = quill.getContents();
		setContent(content);
		setHTMLContent(html);
		route("editor/add-info");
	}

	if (type === "premium") {
		const premium = quill.getContents();
		setPremium(premium);
		setHTMLPremium(html);
		route("editor/review");
	}
};
