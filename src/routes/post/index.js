import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";
import Layout from "components/Layout";
import { getPostById } from "services/post";
import style from "./style";

const Post = ({ postId }) => {
	const [post, setPost] = useState([]);

	useEffect(async () => {
		if (postId) {
			const { post } = await getPostById(postId);
			setPost(post);
		}
	}, []);

	return (
		<Layout>
			<header class={style.header}>
				<h1>POST pagee</h1>
			</header>
			<div
				dangerouslySetInnerHTML={{
					__html: post.html_content,
				}}
			></div>
			<div
				dangerouslySetInnerHTML={{
					__html: post.html_premium,
				}}
			></div>
		</Layout>
	);
};

export default Post;
