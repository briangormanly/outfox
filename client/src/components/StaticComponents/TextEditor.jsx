import React from "react";
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import '../../static/css/base.css';

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-font" defaultValue = {"arial"}>
      <option value="arial">
        Arial
      </option>
      <option value="comic-sans">Comic Sans</option>
      <option value="courier-new">Courier New</option>
      <option value="georgia">Georgia</option>
      <option value="helvetica">Helvetica</option>
      <option value="lucida">Lucida</option>
    </select>
    <select className="ql-size">
      <option value="extra-small">Size 1</option>
      <option value="small">Size 2</option>
      <option value="medium">
        Size 3
      </option>
      <option value="large">Size 4</option>
    </select>
    <select className="ql-align" />
    <select className="ql-color" />
    <select className="ql-background" />
    <button className="ql-clean" />
  </div>
);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true); 

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    
    this.modules = {
			toolbar: [
		      [{ 'font': [] }],
		      [{ 'size': ['small', false, 'large', 'huge'] }],
		      ['bold', 'italic', 'underline'],
		      [{'list': 'ordered'}, {'list': 'bullet'}],
		      [{ 'align': [] }],
		      [{ 'color': [] }, { 'background': [] }],
		      ['clean']
		    ]
		};
    
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

  rteChange = (content, delta, source, editor) => {
    var delta = editor.getContents;
    console.log(delta);
    console.log(editor.getHTML())
  }

  render() {
    return (
      <div className="text-editor">
        <ReactQuill
          theme = "snow"
          value={this.state.comments || ''}
          onChange={this.rteChange}
          modules = {this.modules}
          formats={this.formats}
        />
        <button onClick = {this.rteChange}>Post</button>
      </div>
    );
  }
}