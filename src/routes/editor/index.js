import { h } from "preact";
import { route } from "preact-router";
import { useState } from "preact/hooks";
import { QuillEditor, Toolbar } from "components/Editor";
import MoreInfo from "./components/MoreInfo";
import Review from "./components/Review";
import Published from "./components/Published";
import { createPost } from "services/post";
import style from "./style";

const Editor = ({ path, type }) => {
	console.log(path, type);
	const [content, setContent] = useState([]);
	const [category, setCategory] = useState({});
	const [HTMLContent, setHTMLContent] = useState("");
	const [premium, setPremium] = useState([]);
	const [HTMLPremium, setHTMLPremium] = useState("");
	const [title, setTitle] = useState("");
	const [createdPost, setCreatedPost] = useState({});

	const publishPost = async () => {
		const newPost = await createPost({
			title,
			content,
			category,
			html_content: HTMLContent,
			premium,
			html_premium: HTMLPremium,
		});
		setCreatedPost(newPost);
		route("/editor/published");
	};

	return (
		<section class={style.editor_section}>
			{(type === "content" || type === "premium") && (
				<div>
					<Toolbar
						type={type}
						setContent={setContent}
						setHTMLContent={setHTMLContent}
						setPremium={setPremium}
						setHTMLPremium={setHTMLPremium}
					/>
					<QuillEditor theme='snow' placeholder='start writing' />
				</div>
			)}
			{path === "/editor/add-info" && (
				<MoreInfo
					title={title}
					setTitle={setTitle}
					category={category}
					setCategory={setCategory}
				/>
			)}
			{path === "/editor/review" && (
				<Review
					title={title}
					content={content}
					premium={premium}
					publishPost={publishPost}
				/>
			)}
			{path === "/editor/published" && <Published createdPost={createdPost} />}
		</section>
	);
};

export default Editor;
