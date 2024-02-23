import { Editor } from "@monaco-editor/react"
const CodeEditor = () => {
    return (
        <Editor
            height="75vh"
            theme="vs-dark"
            defaultLanguage="python"
            defaultValue="#code goes here"
        />
    )

}

export default CodeEditor