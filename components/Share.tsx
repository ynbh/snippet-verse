import Link from "next/link";
import Button from "./Button";
import React from 'react'




export default function Share({
	share,
	className,
    children
}: { share: string; className?: string, children?: React.ReactNode }) {
	if (className) {
		return (
			<Link target={"_blank"} href={`/?code=${share}`}>
				<button className={className} type="button">
					{children}
				</button>
			</Link>
		);
	}
	return (
		<Link target={"_blank"} href={`/?code=${share}`}>
			<Button>Share Snippet</Button>
		</Link>
	);
}
