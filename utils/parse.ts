import { encode, atob } from "js-base64";

const getCurrentLink = (asPath: string) => {
	const origin =
		typeof window !== "undefined" && window.location.origin
			? window.location.origin
			: "";
	return `${origin}${asPath}`;
};

export { encode, atob as decode, getCurrentLink };
