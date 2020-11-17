import React, { Fragment } from 'react';
import '../../static/css/base.css';
import TextEditor from './TextEditor.jsx';

const OnlineTutorialsSection = () =>{
    return(
        <Fragment>
            <br /><br />
            <h2 id = "onlineTutorials" className = "sub_header">Online Tutorials </h2>
            <br />
                <p>
                    Coming Soon!!
                </p>
                <br /><br />
            <div id = "container">
            <TextEditor /></div>
        </Fragment>
    );
}

export default OnlineTutorialsSection;