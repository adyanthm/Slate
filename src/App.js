import './App.css';
import Editor from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import { emmetHTML, emmetCSS, emmetJSX, expandAbbreviation  } from "emmet-monaco-es";
       

function App() {
  const editorRef = useRef(null);
  const [isEditorReady, setIsEditorReady] = useState(false);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
    emmetHTML(window.monaco);
    emmetCSS(window.monaco);
    emmetJSX(window.monaco);
    setIsEditorReady(true);
  }
  function compile() {
    // alert(editorRef.current.getValue());
    const code = editorRef.current.getValue();
    let newWindow = window.open("", "_blank");
    newWindow.document.write(code);
  }
  const contentHtml = "<!--\n\nWelcome To Terra Code Editor. There is no sperate sections for Css and Javascript.\nInstead you can use the <script> tag to add Javascript to your code and the <style> tag\nto add Css to your code. Delete The comments after reading them!\n\n-->\n\n<!DOCTYPE html>\n<html lang='en'>\n\t<head>\n\t\t<meta charset='UTF-8'>\n\t\t<meta http-equiv='X-UA-Compatible' content='IE=edge'>\n\t\t<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n\t\t<title>\n\t\t\tTitle\n\t\t</title>\n\t</head>\n\t<body>\n\t\t<style>\n\t\t\t/* Write your styles here */\n\t\t</style>\n\t\t<script>\n\t\t\t/* Write your js code here */\n\t\t</script>\n\t</body>\n</html>";
  return (
    <div className="App">
     <div className='topBar'>
        <button onClick={compile} className='topBtn'><i class="fa-solid fa-play"></i></button>
        {/* <button className='topBtn'><i class="fa-solid fa-download"></i></button> */}
     </div>
     <Editor
      className='editor'
       height="90.55vh"
       width="100%"
       defaultLanguage="html"
       defaultValue={contentHtml}
       onMount={handleEditorDidMount}
       theme="vs-dark"
     />
    </div>
  );
}

export default App;
