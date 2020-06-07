import { h } from "preact";
import Button from "components/Button";
import style from "./Body.css";

const categories = [
	{ name: "Databases" },
	{ name: "Health" },
	{ name: "Law" },
	{ name: "Politics" },
	{ name: "Web" },
];

const posts = [
	{
		title: "How do browsers actually work?",
		subtitle:
			"We use it everyday but hardly realize what they are doing behind the scenes",
		url: "#",
	},
	{
		title: "What s LGPD and why is imporant?",
		subtitle:
			"We use it everyday but hardly realize what they are doing behind the scenes",
		url: "#",
	},
	{
		title: "Why bees die when attack someone?",
		subtitle: "Discover this weird and shocking behaviour about bees",
		url: "#",
	},
];

const Body = () => (
	<main class={style.body}>
		<article class={style.posts}>
			<h2>Learn something new today</h2>
			<div class={style.categoryFilter}>
				{categories.map((category) => (
					<a class={style.filter}>
						<img
							class={style.filterImg}
							src={`assets/icons/${category.name.toLowerCase()}.svg`}
						/>
						<p>{category.name}</p>
					</a>
				))}
			</div>
			{posts.map((post) => (
				<div class={style.post}>
					<a href={post.url}>
						<h3 class={style.post_title}>{post.title}</h3>
						<p class={style.post_subtitle}>{post.subtitle}</p>
					</a>
				</div>
			))}

			<Button style={{ marginBottom: "15px" }}>More categories</Button>
		</article>

		<div class={style.monetization_info}>
			<h2>Get extra content with premium access</h2>
			<p>
				Are you curious and have appetite for more information? Get instant
				access to special content made by creators, to help further explain hard
				and complex concepts
			</p>
			<div class={style.monetization_steps}>
				<div>step 1</div>
				<div>step 2</div>
				<div>step 3</div>
			</div>
		</div>
	</main>
);

export default Body;
