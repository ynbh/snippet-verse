import Link from "next/link";

export default function Share({ share }: { share: string }) {
	return (
		<Link target={"_blank"} href={`/?code=${share}`}>
			<button
				className="border p-1 font-bold text-gray-800 rounded-md bg-gradient-to-r from-rose-100 to-teal-100"
				type="button"
			>
				Share Snippet
			</button>
		</Link>
	);
}
