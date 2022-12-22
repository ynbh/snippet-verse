import ReactMarkdown from "react-markdown";
import Share from "./Share";

export default function Article({ share }: { share: string }) {
	return (
		<div>
			<ReactMarkdown>## How?</ReactMarkdown>
			<ReactMarkdown className="message">
				To share code, simply type it here. We will share with you an immutable
				URL, that you can further share with peers to quickly share code without
				worrying about third-party tools deleting your data at any point.
				However, note that this currently only works for JavaScript and
				TypeScript. I will add more languages as soon as I figure out how to.
				Lol.
			</ReactMarkdown>
			<Share custom={false} share={share} />
			<ReactMarkdown>## Proof of Concept</ReactMarkdown>
			<ReactMarkdown className="poc">
				A proof of concept for this project works through the utilization of URL
				_parameters_ as a means of storing state on the front-end. This
				technique involves parsing the state information contained within the
				URL to interpret and utilize encoded data, allowing for efficient
				storage and sharing of content without relying on external hosting by
				third parties. The _immutable_ nature of this method further adds to its
				credibility as a viable solution.
			</ReactMarkdown>

			<ReactMarkdown>
				Take my random **Advent of Code** solution for example: Try clicking on
				***Share Snippet***, and share the URL of the page it redirects you to.
			</ReactMarkdown>
		</div>
	);
}
