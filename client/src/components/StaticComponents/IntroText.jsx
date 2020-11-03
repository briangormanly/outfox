import React, { Fragment } from 'react';
import '../../static/css/base.css';

const IntroText = () =>{
    return(
        <Fragment>
            <h1 id = "userDocumentation" className = "header">User Documentation</h1>
            <br />
                <p>Outfox is an open-source educational platform that encourages the betterment of its users through the
                    dissemination of instructive content. Unlike institutionally controlled learning platforms such as Blackboard or Google
                    Classroom, Outfox gives all users the ability to access and manage educational resources like never before.
                    As a platform that is user-centric, the user has the power to explore, join,
                    and customize groups with their own resources. Everyone can interact with the content by making changes, comments,
                    and connections with other users to tailor their educational experience to what works best for them.
                </p>
        </Fragment>

    );
}

export default IntroText;