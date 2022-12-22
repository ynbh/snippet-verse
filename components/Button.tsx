import React from "react";

export default function Button({
	children,
	className,
	onClick,
}: {
	children: React.ReactNode;
	className?: string;
	onClick?: (e: React.MouseEvent) => void;
}): JSX.Element {
	if (className) {
		return (
			<button onClick={onClick} className={className}>
				{children}
			</button>
		);
	}
	return (
		<button
        onClick={onClick}
			className="border p-1 font-bold text-gray-800 rounded-md bg-gradient-to-r from-rose-100 to-teal-100"
			type="button"
		>
			{children}
		</button>
	);
}
