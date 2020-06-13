import { h } from "preact";
import { route } from "preact-router";
import Divisor from "components/Divisor";
import Button from "components/Button";
import BlockedContent from "components/BlockedContent";
import style from "./DynamicContent.css";

const PremiumContent = ({ html_premium }) => (
	<div
		dangerouslySetInnerHTML={{
			__html: html_premium,
		}}
	></div>
);

const LoadingContent = () => <div>Loading...</div>;

const DynamicContent = ({ html_premium, userMonetizationStatus }) => {
	const component = () => {
		switch (userMonetizationStatus) {
			case "start":
				return <PremiumContent html_premium={html_premium} />;
			case "pending":
				return <LoadingContent />;
			case "stop":
				return (
					<BlockedContent text='This article has a premium content. Want to see more?'>
						<Button onClick={() => route("/about")}>See more</Button>
					</BlockedContent>
				);
			default:
				return (
					<BlockedContent text='This article has a premium content. Want to see more?'>
						<Button onClick={() => route("/about")}>See more</Button>
					</BlockedContent>
				);
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
