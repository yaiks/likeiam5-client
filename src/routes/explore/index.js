import { h } from "preact";
import { route } from "preact-router";
import { useState, useEffect, useRef } from "preact/hooks";
import Layout from "components/Layout";
import { getAllPosts, getPostsByCategory } from "services/post";
import { getAllCategories } from "services/category";
import PostPreview from "./components/PostPreview";
import BlockedContent from "components/BlockedContent";
import Button from "components/Button";
import Dropdown from "components/Dropdown";
import Searchbar from "components/Searchbar";
import CategoryLabels from "./components/CategoryLabels";
import style from "./style";

const Explore = () => {
	const [posts, setPosts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [drowpdownValue, setDropdownValue] = useState("All");
	const mountedRef = useRef(true);

	useEffect(async () => {
		const { posts } = await getAllPosts();
		const { categories } = await getAllCategories();
		setPosts(posts);
		setCategories(categories);
	}, []);

	useEffect(async () => {
		const { posts } = await getAllPosts({ order: drowpdownValue });
		setPosts(posts);
	}, [drowpdownValue]);

	const getCategoryPosts = async (categoryId) => {
		if (categoryId) {
			const { posts } = await getPostsByCategory(categoryId);
			setPosts(posts);
		} else {
			const { posts } = await getAllPosts();
			setPosts(posts);
		}
	};

	const onSubmit = async (value) => {
		const { posts } = await getAllPosts({ title: value });
		setPosts(posts);
	};

	return (
		<Layout>
			<header class={style.header}>
				<h1>Start exploring and learning</h1>
			</header>
			<div class={style.filter_container}>
				<div class={style.category_filter}>
					<Dropdown initialValue={drowpdownValue} onChange={setDropdownValue} />
					<div class={style.category_labels}>
						<CategoryLabels
							categories={categories}
							getCategoryPosts={getCategoryPosts}
						/>
					</div>
					<div class={style.category_searchbar}>
						<Searchbar onSubmit={onSubmit} />
					</div>
				</div>
			</div>
			{posts.length ? (
				<div class={style.posts}>
					{posts.map((post) => (
						<PostPreview post={post} />
					))}
				</div>
			) : (
				<BlockedContent text='There are no posts yet'>
					<Button onClick={() => route("/editor")}>Create post</Button>
				</BlockedContent>
			)}
		</Layout>
	);
};

export default Explore;
