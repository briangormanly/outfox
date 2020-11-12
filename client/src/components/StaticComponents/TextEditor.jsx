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

// Add sizes to whitelist and register them
// registering makes them available to be added to an editor.
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

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

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    //this.textInput = React.createRef();
    //this.focusTextInput = this.focusTextInput.bind();
  }

  /*focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  } */

  state = {editorHtml: ""};

  /*handleChange = html => {
    this.setState({editorHtml: html});
  };
/*
  saveComment(content) {
    var delta = content.getContents();
    console.log(delta);
  }; */

  // An array of all formats to be enabled during editing and allowed to exist within a quill editor
  static formats = [
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

  render() {
    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          value={this.state.editorHtml}
          //onChange={this.handleChange}
          placeholder={this.props.placeholder}
          modules = {{
            // toolbar format
            toolbar: {
              container: "#toolbar",
            }
          }}
          formats={Editor.formats}
        />
        <button //onClick={this.focusTextInput()}
          // onClick = {() => {
          // this.saveComment(Editor.getContents)
          //var delta = Editor.getContents;
          //console.log(delta);
          //}}
        >Post</button>
      </div>
    );
  }
}

const App = () => (
  <div className="custom-toolbar-example">
    <br /><br />
    <Editor placeholder={"Enter comment here."} />
  </div>
);

// render(<App />, document.getElementById("root"));

//export default App;