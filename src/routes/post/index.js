import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";
import Helmet from "preact-helmet";
import Layout from "components/Layout";
import DynamicContent from "./components/DynamicContent";
import { useMonetization } from "hooks/useMonetization";
import { getPostById } from "services/post";
import style from "./style";

const Post = ({ postId }) => {
	const [post, setPost] = useState([]);
	const [userMonetizationStatus, setUserMonetizationStatus] = useState("");
	const status = useMonetization();

	useEffect(() => {
		if (postId) {
			async function fetchPostById() {
				const { post } = await getPostById(postId);
				setPost(post);
			}

			fetchPostById();
		}
	}, []);

	useEffect(() => {
		const monetizationStatus = {
			stop: () => setUserMonetizationStatus("stop"),
			start: () => setUserMonetizationStatus("start"),
			pending: () => setUserMonetizationStatus("pending"),
			default: () => console.log("no status yet"),
		};

		(monetizationStatus[status] || monetizationStatus["default"])();
	}, [status]);

	return (
		<Layout>
			{post && post.user && post.user.monetization_endpoint && (
				<Helmet
					meta={[
						{
							name: "monetization",
							content: post.user.monetization_endpoint,
						},
					]}
				/>
			)}
			<header class={style.header}>
				<h1>POST pagee</h1>
			</header>
			<div
				dangerouslySetInnerHTML={{
					__html: post.html_content,
				}}
			></div>
			<DynamicContent
				html_premium={post.html_premium}
				userMonetizationStatus={userMonetizationStatus}
			/>
		</Layout>
	);
};

export default Post;
