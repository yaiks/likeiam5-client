import { h } from "preact";
import { useState } from "preact/hooks";
import { QuillEditor, Toolbar } from "components/Editor";
import MoreInfo from "./components/MoreInfo";
import Review from "./components/Review";
import style from "./style";

const Editor = () => {
	const [step, setStep] = useState("content");
	const [content, setContent] = useState([]);
	const [premium, setPremium] = useState([]);
	const [title, setTitle] = useState("");

	return (
		<section class={style.editor_section}>
			{(step === "content" || step === "premium") && (
				<div>
					<Toolbar
						step={step}
						setStep={setStep}
						setContent={setContent}
						setPremium={setPremium}
					/>
					<QuillEditor theme='snow' placeholder='start writing' />
				</div>
			)}
			{step === "more_info" && (
				<MoreInfo title={title} setTitle={setTitle} setStep={setStep} />
			)}
			{step === "review" && (
				<Review title={title} content={content} premium={premium} />
			)}
		</section>
	);
};

export default Editor;
