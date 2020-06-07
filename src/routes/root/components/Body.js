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

const benefits = [
	{ text: "Access to premium content" },
	{ text: "Directly support content creators" },
	{ text: "Easy to setup" },
	{ text: "Unobtrusive and secure" },
];

const Body = () => (
	<main class={style.body}>
		<section class={style.posts}>
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

			<Button>More categories</Button>
		</section>

		<section class={style.premium_container}>
			<div class={style.premium_content}>
				<div class={style.premium_header}>
					<h2>Get extra content with premium access</h2>
					<p>
						Are you curious and have appetite for more information? Get instant
						access to special content made by creators, to help further explain
						hard and complex concepts
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
				<Button>Get premium</Button>
			</div>
		</section>

		<section class={style.overall_data}>
			<div class={style.data_item}>
				<img src={`assets/icons/paper.svg`} />
				<h3>
					<span>30</span> amazing articles written
				</h3>
			</div>
			<div class={style.data_item}>
				<img src={`assets/icons/drawer.svg`} />
				<h3>
					<span>5</span> total categories created
				</h3>
			</div>
		</section>
	</main>
);

export default Body;
