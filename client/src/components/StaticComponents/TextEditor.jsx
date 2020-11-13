import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import '../../static/css/base.css';

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);

    this.formats = [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "color"
    ];
     
    this.state = {
      comments: '',
    };

    this.rteChange = this.rteChange.bind(this);
  } // Contructor()

  rteChange = (content, delta, source, editor, html) => {
    var delta = editor.getHTML;
    //this.setState({ content: delta });
    console.log(editor.getHTML());
  }

  render() {
    return (
      <div className="text-editor" > 
        <ReactQuill
          theme = "snow"
          value={this.state.comments || ''}
          onChange={this.rteChange}
          modules={
            {toolbar : [
              [{ header: [1, 2, false] }],
              [{ 'font': []}],
              ['bold', 'italic', 'underline'],
              [{'color': []},, { 'background': [] }],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              ['image', 'code-block', 'video'],
          ]}}
          formats={this.formats}
        />
      </div>
    );
  }
}