import React, { useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  return (
    <div className="App">
      <header className="App-header py-2">Description</header>
      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
       
      />
      {/* <div className="code-view">
        <p>HTML View </p>
        <textarea
          className="text-area"
          disabled
        
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div> */}
    </div>
  );
};

export default MyEditor;
