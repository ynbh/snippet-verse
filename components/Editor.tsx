import CodeMirror from "@uiw/react-codemirror";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

import { javascript } from "@codemirror/lang-javascript";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { rust } from "@codemirror/lang-rust";
import { languages } from "@codemirror/language-data";

import { loadLanguage, langs } from "@uiw/codemirror-extensions-langs";

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
	];
	return (
		<CodeMirror
			value={code}
			onChange={(v, s) => {
				//@ts-expect-error
				const language = s.view.contentAttrs["data-language"];

				return cb(v, language);
			}}
			className="w-full lg:w-2/3 xl:w-1/2 mx-auto p-2"
			theme={tokyoNight}
			extensions={extensions}
		/>
	);
}