import { h } from "preact";
import Layout from "components/Layout";
import style from "./style.css";

const userSteps = [
	{ text: "Go to Coil website and create an account" },
	{
		text: "Become a member of coil, by signing the monthly subscription of $5",
	},
	{
		text:
			"If your are using Google Chrome, go to chrome web store and install the Coil web browser extension",
	},
	{ text: "Sync your account in the extension" },
	{ text: "Should be done! Enjoy your premium content" },
];

const creatorSteps = [
	{ text: "Choose and go to a wallet website" },
	{
		text: "Create your account in the wallet website",
	},
	{
		text: "Automatically get a wallet endpoint. Copy that URL.",
	},
	{ text: "Login to our website and go to the profile page" },
	{ text: "Edit the endpoint URL, pasting your wallet endpoint there" },
	{
		text:
			"Done! Now everytime you write an article with premium content, you are able to receive payments from users",
	},
];

const About = () => (
	<Layout>
		<div class={style.about}>
			<h1>Accessing premium content</h1>
			<h2>About this website</h2>
			<p>
				This website uses a new payment method called{" "}
				<a
					href='https://webmonetization.org/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Monetization
				</a>{" "}
				which rewards content creators and give users access to premium content.
			</p>
			<p>
				Creators dedicate a lot of time writing and working on nice content for
				other people on internet, and until now there was no way to get directly
				rewarded by that, since all the payment was usually handled by a private
				and centralized platform (think about the relationship of Youtube and
				youtubers). But now, people can directly pay other people for their hard
				work. Isn't that awesome?
			</p>
			<h1>But how does it works? (for users)</h1>
			<h2>
				Setup an account on a payment provider and start helping content
				creators. It's super easy!
			</h2>
			<p>
				The monetization technology is super new and not supported in your
				browser yet. Therefore, you need to use a payment provider in order to
				benefit from premium content and reward content creators. Basically, a
				payment provider is a company that helps you communicate with the
				content creator's bank account, and send micropayments to them while
				your consume their content, in a easy and unobtrusive way.{" "}
			</p>
			<h2>Got it! So how do I do it?</h2>
			<p>
				There are a few payment providers out there, but we recommend using{" "}
				<a href='https://coil.com/' target='_blank' rel='noopener noreferrer'>
					Coil
				</a>{" "}
				for this website
			</p>
			<div class={style.user_steps}>
				{userSteps.map((step, index) => (
					<div class={style.step}>
						<span class={style.step_number}>{index + 1}</span>
						<span class={style.step_text}>{step.text}</span>
					</div>
				))}
			</div>
			<h1>How does it works? (for creators)</h1>
			<h2>Just need a wallet endpoint to receive payments</h2>
			<p>
				You can write free and premium content in your articles. Premium content
				is automatically displayed only for users who have the payment provider
				setup, so you don't have to do any crazy configuration. Since this
				website is optimized for monetization content, all you have to do is
				create a wallet endpoint to receive payments, and put it into the
				profile section of this website.
			</p>
			<h2>Wallet? Wallet endpoint?</h2>
			<p>
				Wallet is an online account for receiving and transfering money. There
				are a few monetization wallets out there like{" "}
				<a href='https://uphold.com/' target='_blank' rel='noopener noreferrer'>
					uphold
				</a>{" "}
				,{" "}
				<a
					href='https://stronghold.co/real-time-payments#coil'
					target='_blank'
					rel='noopener noreferrer'
				>
					stronghold
				</a>{" "}
				and{" "}
				<a
					href='https://gatehub.net/'
					target='_blank'
					rel='noopener noreferrer'
				>
					gatehub
				</a>
				. By creating a wallet account, you automatically receive a wallet
				edpoint.
			</p>
			<div class={style.user_steps}>
				{creatorSteps.map((step, index) => (
					<div class={style.step}>
						<span class={style.step_number}>{index + 1}</span>
						<span class={style.step_text}>{step.text}</span>
					</div>
				))}
			</div>
		</div>
	</Layout>
);

export default About;
