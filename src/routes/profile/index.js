import { h } from "preact";
import { useState } from "preact/hooks";
import Layout from "components/Layout";
import Button from "components/Button";
import { useAuth } from "context/auth";
import { editMonetizationEndpoint } from "services/user";
import style from "./style";

const ProfileItem = ({ keyName, value }) => (
	<div class={style.profile_item}>
		<p class={style.item_keyname}>{keyName}:</p>
		<p>{value}</p>
	</div>
);

const Profile = () => {
	const { user } = useAuth();
	const [endpoint, setEndpoint] = useState(user.monetization_endpoint || "");
	const [endpointMessage, setEndpointMessage] = useState("");
	const [editMonetization, setEditMonetization] = useState(false);

	const handleEdit = async () => {
		if (!editMonetization) {
			setEditMonetization(true);
		} else {
			const { success } = await editMonetizationEndpoint({
				endpoint,
				userId: user.id,
			});

			if (success) {
				setEndpointMessage("Successfully updated endpoint!");
			} else {
				setEndpointMessage("There was an error updating endpoint");
			}

			setEditMonetization(false);
		}
	};

	const changeEndpoint = (endpoint) => {
		setEndpoint(endpoint);
	};

	return (
		<Layout>
			<div class={style.profile}>
				<div>
					<h1>Profile</h1>
					<ProfileItem keyName='Name' value={user.name} />
					<ProfileItem keyName='email' value={user.email} />
					<ProfileItem keyName='ID' value={user.id} />
					<ProfileItem keyName='Google ID' value={user.google_id} />
					<ProfileItem keyName='Account created at' value={user.createdAt} />
				</div>
				<div>
					<h1>Monetization</h1>
					<ProfileItem keyName='endpoint' value={endpoint} />
					{editMonetization && (
						<input
							type='text'
							class={style.edit_input}
							placeholder='monetization endpoint'
							onInput={(e) => changeEndpoint(e.target.value)}
						/>
					)}
					<span class={style.error_message}>{endpointMessage}</span>
					<Button variety='secondary' onClick={handleEdit}>
						{editMonetization ? "confirm" : "edit"}
					</Button>
				</div>
			</div>
		</Layout>
	);
};

export default Profile;
