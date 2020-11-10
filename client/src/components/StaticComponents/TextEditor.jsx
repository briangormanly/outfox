import React, { useState } from "react";
import 'react-quill/dist/quill.snow.css';

import ReactQuill, { Quill } from 'react-quill';

function TextEditor() {
    function handleChange(e) {
        var delta = editor.getContents();
        console.log(delta);
    }

    const [value, setValue] = useState('');

  return (
    <div>
        <ReactQuill name = "editor" theme="snow" value={value} onChange={this.handleChange}/>
        <button id = "saveDelta" onClick = {saveDelta}>Save Delta</button>
    </div>
  );
}
export default TextEditor;