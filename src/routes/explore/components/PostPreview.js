import { h, render } from "preact";
import { Link } from "preact-router/match";
import { getFormattedDate } from "utils/date";
import style from "./PostPreview.css";

// filter as Dribbble alike
// https://dribbble.com/search/shots/popular/animation?q=tags
const PostPreview = ({ post }) => (
	<article class={style.post}>
		<Link class={style.post_link} href={`/post/${post.id}`}>
			<div class={style.post_content}>
				<h2 class={style.post_title}>{post.title}</h2>
				<div class={style.post_info}>
					<p class={style.post_author}>
						by <b>{post.user.email}</b>
					</p>
					<p class={style.category_label}>{post.category}</p>
					<p class={style.post_date}>{getFormattedDate(post.createdAt)}</p>
				</div>
				<div
					class={style.preview}
					dangerouslySetInnerHTML={{
						__html: post.html_content,
					}}
				/>
			</div>
			<p class={style.post_read_more}>Read more</p>
		</Link>
	</article>
);

export default PostPreview;
