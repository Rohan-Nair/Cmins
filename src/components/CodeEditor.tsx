import { Editor } from "@monaco-editor/react"
import { useRef, useState } from "react"
import LangSelect from "./LangSelect";
import { SNIPPETS } from "../constants/snippets";
import { Spacer } from "@geist-ui/core";
import Output from "./Output";
const CodeEditor = () => {
    const editorRef = useRef<any | undefined>();
    const [value, setValue] = useState<string>("");
    const onMount = (editor: any) => {
        editorRef.current = editor;
        editor.focus();
    };

    const [language, setLanguage] = useState<string>("cpp");
    const onSelectLanguage = (l: string) => {
        setLanguage(l);
        setValue(SNIPPETS[l as keyof typeof SNIPPETS])
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-[100vw] px-3 lg:w-[50vw]">
                <div className="ml-2">

                    <LangSelect lang={language} onSelect={onSelectLanguage} />
                </div>
                <Spacer h={.5} />
                <Editor
                    height="80vh"
                    theme="vs-dark"
                    defaultLanguage={language}
                    language={language}
                    defaultValue={SNIPPETS[language as keyof typeof SNIPPETS]}
                    value={value}
                    onChange={(value: string | undefined) => setValue(value || "")}
                    onMount={onMount}
                />
            </div>
            <div className="w-[100vw] lg:w-[50vw] ">
                <Output editorRef={editorRef} language={language} />
            </div>
        </div>
    )

}

export default CodeEditor