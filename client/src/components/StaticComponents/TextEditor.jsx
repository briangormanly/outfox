import React from "react";
import ReactDOM from "react-dom"
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import '../../static/css/base.css';

const CustomButton = () => <span className="octicon octicon-star" />

function postComment(quillEditor, props) {
  var comment = quillEditor.root.innerHTML;
  console.log(comment);
}

/*
 * Custom toolbar component including Post button
 */
const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
      <option value="1"></option>
      <option value="2"></option>
      <option defaultValue></option>
    </select>
    <select className="ql-font"></select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <select className="ql-align"></select>
    <button className="ql-underline"></button>
    <select className="ql-color"></select>
    <button className="ql-image"></button>
    <button className="ql-video"></button>
    <button className="ql-link"></button>
    <button id = "postComment" className="ql-rteChange">
      <CustomButton />POST
    </button>
  </div>
)

/*
 * Editor component with custom toolbar and content containers
 */
export default class TextEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorHtml: '' }
    this.reactQuillRef = null;
    /*
    this.modules = {
      toolbar: {
        container: "#toolbar",
        handlers: {
          rteChange: this.rteChange(props)
          /*function (content, delta, source, editor, html) {
            var delta = editor.getHTML;
            //this.setState({ content: delta });
            console.log(editor.getHTML); } 
        }
      }
    }*/

    /*var toolbarOptions = [{toolbar: {
      container: "#toolbar",
      handlers: {
        rteChange: () => postComment(
          this.reactQuillRef.getEditor(), this.props
        )
      }
    }}]*/

    var toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{'header': 1}, {'header': 2}],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'script': 'sub'}, {'script': 'super'}],
      [{'indent': '-1'}, {'indent': '+1'}],
      [{'direction': 'rtl'}],
      [{'size': ['small', false, 'large', 'huge']}],
      ['link', 'image', 'video', 'formula'],
      [{'color': []}, {'background': []}],
      [{'font': []}],
      [{'align': []}]
      ]; 
    
    this.formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'color',
    ]
  }


  render() {
    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          ref={(el) => { this.reactQuillRef = el }}
          placeholder={this.props.placeholder}
          modules={{
            toolbar: {
              container: "#toolbar",
              handlers: {
                rteChange: () => postComment(
                  this.reactQuillRef.getEditor(), this.props
                )
              }
          }}}
        />
      </div>
    )
  }
}