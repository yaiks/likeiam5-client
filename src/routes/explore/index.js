import { h } from "preact";
import { useEffect } from "preact/hooks";
import { Link } from "preact-router/match";
import Layout from "components/Layout";
// import { useAuth } from "context/auth";
import style from "./style";
import posts from "./mock";

// filter as Dribbble alike
// https://dribbble.com/search/shots/popular/animation?q=tags
const Explore = () => {
	return (
		<Layout>
			<header class={style.header}>
				<h1>Start writing and sharing your knowledge</h1>
				<Link href='/editor'>Write</Link>
			</header>
			<div class={style.filter_container}>
				<div class={style.category_filter}>
					<select class={style.category_type} id='category_type'>
						<option value='popular'>Popular</option>
						<option value='latest'>Latest</option>
					</select>
					<div class={style.category_labels}>
						<ul>
							<li>All</li>
							<li>Biology</li>
							<li>Design</li>
							<li>English</li>
							<li>Film</li>
							<li>History</li>
							<li>Lay</li>
							<li>Mathmatics</li>
							<li>Science</li>
							<li>Web</li>
							<li>Zoological</li>
						</ul>
					</div>
					<form class={style.category_searchbar}>
						<input type='text' />
					</form>
				</div>
			</div>
			<div class={style.posts}>
				{posts.map((post) => (
					<article class={style.post}>
						<div class={style.post_content}>
							<h2>{post.title}</h2>
							<div class={style.post_info}>
								<p class={style.post_author}>by {post.author}</p>
								<p class={style.category_label}>{post.category}</p>
							</div>
							<p>{post.date}</p>
							<p class={style.preview}>{post.preview}</p>
						</div>
						<Link href={post.slug}>Read more</Link>
					</article>
				))}
			</div>
		</Layout>
	);
};

export default Explore;
