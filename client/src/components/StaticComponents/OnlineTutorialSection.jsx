import React, { Fragment } from 'react';
import '../../static/css/base.css';
import TextEditor from './TextEditor';

const OnlineTutorialsSection = () =>{
    return(
        <Fragment>
            <br /><br />
            <h2 id = "onlineTutorials" className = "sub_header">Online Tutorials </h2>
            <br />
                <p>
                    Coming Soon!!
                </p>
            <TextEditor />
        </Fragment>
    );
}

export default OnlineTutorialsSection;