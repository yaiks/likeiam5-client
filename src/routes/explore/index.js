import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router/match";
import Layout from "components/Layout";
import { getAllPosts, getPostsByCategory } from "services/post";
import { getAllCategories } from "services/category";
import PostPreview from "./components/PostPreview";
import Dropdown from "components/Dropdown";
import Searchbar from "components/Searchbar";
import CategoryLabels from "./components/CategoryLabels";
import style from "./style";

const mock = [
	{ id: 1, name: "web" },
	{ id: 2, name: "biology" },
	{ id: 3, name: "history" },
	{ id: 4, name: "math" },
	{ id: 5, name: "technology" },
	{ id: 5, name: "technology" },
	{ id: 5, name: "technology" },
];

// filter as Dribbble alike
// https://dribbble.com/search/shots/popular/animation?q=tags
const Explore = () => {
	const [posts, setPosts] = useState([]);
	const [categories, setCategories] = useState(mock);
	const [drowpdownValue, setDropdownValue] = useState("All");

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
			<div class={style.posts}>
				{posts.map((post) => (
					<PostPreview post={post} />
				))}
			</div>
		</Layout>
	);
};

export default Explore;
