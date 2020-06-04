export const getFormattedDate = (date) => {
	if (date) {
		const dateObj = new Date(date);
		let year = dateObj.getFullYear();
		let month = (1 + dateObj.getMonth()).toString().padStart(2, "0");
		let day = dateObj.getDate().toString().padStart(2, "0");

		return month + "/" + day + "/" + year;
	}
};
