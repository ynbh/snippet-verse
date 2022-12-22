import Head from "next/head";

const DESCRIPTION = "A no-datastore PasteBin alternative";
const TITLE = "PasteBinLess";
const URL = "https://paste.ynb.sh";
const OG_URL =
	"https://og-image.vercel.app/**PasteBinLess%20-%20A%20no-datastore%20PasteBin%20alternative**.jpeg?theme=light&md=1&fontSize=50px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&widths=0&heights=0";

export default function SEO() {
	return (
		<Head>
			<title>{TITLE}</title>
			<meta name="description" content={DESCRIPTION} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={URL} />
			<meta property="og:title" content={TITLE} />
			<meta property="og:description" content={DESCRIPTION} />
			<meta property="og:image" content={OG_URL} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={URL} />
			<meta property="twitter:title" content={TITLE} />
			<meta property="twitter:description" content={DESCRIPTION} />
			<meta property="twitter:image" content={OG_URL} />

			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
