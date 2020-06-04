import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router/match";
import Layout from "components/Layout";
import { getAllPosts, getPostsByCategory } from "services/post";
import { getAllCategories } from "services/category";
import { getFormattedDate } from "utils/date";
import style from "./style";

// filter as Dribbble alike
// https://dribbble.com/search/shots/popular/animation?q=tags
const Explore = () => {
	const [posts, setPosts] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(async () => {
		const { posts } = await getAllPosts();
		const { categories } = await getAllCategories();
		setPosts(posts);
		setCategories(categories);
	}, []);

	const getCategoryPosts = async (categoryId) => {
		const { posts } = await getPostsByCategory(categoryId);
		setPosts(posts);
	};

	console.log(posts);

	return (
		<Layout>
			<header class={style.header}>
				<h1>Start exploring and learning</h1>
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
							{categories.map((category) => (
								<li onClick={() => getCategoryPosts(category.id)}>
									{category.name}
								</li>
							))}
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
						<Link class={style.post_link} href={`/post/${post.id}`}>
							<div class={style.post_content}>
								<h2 class={style.post_title}>{post.title}</h2>
								<div class={style.post_info}>
									<p class={style.post_author}>
										by <b>{post.user.email}</b>
									</p>
									<p class={style.category_label}>{post.category}</p>
									<p class={style.post_date}>
										{getFormattedDate(post.createdAt)}
									</p>
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
				))}
			</div>
		</Layout>
	);
};

export default Explore;
