import CodeMirror from "@uiw/react-codemirror";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";



import {  langs } from "@uiw/codemirror-extensions-langs";

export default function Editor({
	code,
	cb,
}: { code: string; cb: (value: string, language: string) => void }) {
	const extensions = [
		langs.tsx(),
		langs.rust(),
		langs.c(),
		langs.cpp(),
		langs.go(),
        langs.markdown()
	];
	return (
		<CodeMirror
			value={code}
			onChange={(v, s) => {
				//@ts-expect-error
				const language = s.view.contentAttrs["data-language"];

				return cb(v, language);
			}}
			className=" mx-auto mt-5 min-w-screen min-h-screen"
			theme={tokyoNight}
			extensions={extensions}
		/>
	);
}
