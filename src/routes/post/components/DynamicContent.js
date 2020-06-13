import { h, render } from "preact";
import { route } from "preact-router";
import Divisor from "components/Divisor";
import Button from "components/Button";
import style from "./DynamicContent.css";

const PremiumContent = ({ html_premium }) => (
	<div
		dangerouslySetInnerHTML={{
			__html: html_premium,
		}}
	></div>
);

const LoadingContent = () => <div>Loading...</div>;

const CallToAction = () => (
	<div class={style.not_premium}>
		<h2>This article has a premium content. Want to see more?</h2>
		<Button onClick={() => route("/about")}>See more</Button>
		<img
			src='/assets/images/not_premium.svg'
			alt='this content is for premium users only'
		/>
	</div>
);

const DynamicContent = ({ html_premium, userMonetizationStatus }) => {
	const component = () => {
		switch (userMonetizationStatus) {
			case "start":
				return <PremiumContent html_premium={html_premium} />;
			case "pending":
				return <LoadingContent />;
			case "stop":
				return <CallToAction />;
			default:
				return <CallToAction />;
		}
	};

	if (html_premium) {
		return (
			<div>
				<Divisor text='Premium content' />
				{component()}
			</div>
		);
	}

	return "";
};

export default DynamicContent;
