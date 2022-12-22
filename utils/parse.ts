import { encode, decode } from "js-base64";

const getCurrentLink = (asPath: string) => {
	const origin =
		typeof window !== "undefined" && window.location.origin
			? window.location.origin
			: "";
	return `${origin}${asPath}`;
};

export { encode,  decode, getCurrentLink };
