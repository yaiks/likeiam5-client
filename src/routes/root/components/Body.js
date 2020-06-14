import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router/match";
import { getAllPosts } from "services/post";
import { getAllCategories } from "services/category";
import Button from "components/Button";
import style from "./Body.css";
import { route } from "preact-router";

const mockCategories = [
	{ name: "Databases" },
	{ name: "Health" },
	{ name: "Law" },
	{ name: "Politics" },
	{ name: "Web" },
];

const benefits = [
	{ text: "Access to premium content" },
	{ text: "Directly support content creators" },
	{ text: "Easy to setup" },
	{ text: "Unobtrusive and secure" },
];

const Body = () => {
	const [posts, setPosts] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(async () => {
		const { posts } = await getAllPosts();
		const { categories } = await getAllCategories();
		setPosts(posts);
		setCategories(categories);
	}, []);

	return (
		<main class={style.body}>
			<section class={style.posts}>
				<h2>Learn something new today</h2>
				<div class={style.categoryFilter}>
					{mockCategories.map((category) => (
						<Link href='/explore' class={style.filter}>
							<img
								class={style.filterImg}
								src={`assets/icons/${category.name.toLowerCase()}.svg`}
							/>
							<p>{category.name}</p>
						</Link>
					))}
				</div>
				{posts.map((post) => (
					<div class={style.post}>
						<Link href={`/post/${post.id}`}>
							<h3 class={style.post_title}>{post.title}</h3>
							<p class={style.post_author}>author: {post.user.name}</p>
						</Link>
					</div>
				))}

				<Button onClick={() => route("/explore")}>More categories</Button>
			</section>

			<section class={style.premium_container}>
				<div class={style.premium_content}>
					<div class={style.premium_header}>
						<h2>Get extra content with premium access</h2>
						<p>
							Are you curious and have appetite for more information? Get
							instant access to special content made by creators, to help
							further explain hard and complex concepts
						</p>
					</div>
					<div class={style.monetization_steps}>
						{benefits.map((benefit) => (
							<div class={style.benefit}>
								<img class={style.check} src={`assets/icons/check.svg`} />
								<span>{benefit.text}</span>
							</div>
						))}
					</div>
				</div>
				<div class={style.actions}>
					<Button onClick={() => route("/about")}>Get premium</Button>
				</div>
			</section>

			<section class={style.overall_data}>
				<div class={style.data_item}>
					<img src={`assets/icons/paper.svg`} />
					<h3>
						<span>{posts.length}</span> amazing articles written
					</h3>
				</div>
				<div class={style.data_item}>
					<img src={`assets/icons/drawer.svg`} />
					<h3>
						<span>{categories.length}</span> total categories created
					</h3>
				</div>
			</section>
		</main>
	);
};

export default Body;
