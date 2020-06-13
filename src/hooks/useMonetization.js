import { useState, useEffect, useRef } from "preact/hooks";

const useMonetization = () => {
	const [status, setStatus] = useState("");
	const mountedRef = useRef(true);

	useEffect(() => {
		return () => {
			document.monetization.removeEventListener("monetizationpending", () =>
				console.log("removed monetizationpending")
			);
			document.monetization.removeEventListener("monetizationstart", () =>
				console.log("removed monetizationstart")
			);
			document.monetization.removeEventListener("monetizationstop", () =>
				console.log("removed monetizationstop")
			);

			mountedRef.current = false;
		};
	}, []);

	if (document.monetization) {
		document.monetization.addEventListener("monetizationpending", (e) => {
			if (mountedRef.current) {
				setStatus("pending");
			}
		});

		document.monetization.addEventListener("monetizationstart", (e) => {
			if (mountedRef.current) {
				setStatus("start");
			}
		});

		document.monetization.addEventListener("monetizationstop", (e) => {
			if (mountedRef.current) {
				setStatus("stop");
			}
		});

		// document.monetization.addEventListener("monetizationprogress", (e) => {
		// 	setStatus("progress");
		// });
	}

	return status;
};

// $pay.stronghold.co/1a185a50aa441144db287dde3f9660838b7

export { useMonetization };
