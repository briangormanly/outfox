import React, { Fragment } from 'react';
import '../../static/css/base.css';

const UserSection = () =>{
    return(
        <Fragment>
            <br /><br />
            <h2 id = "users" className = "sub_header"> Users</h2>
            <br />
                <p>Unlike most other educational platforms which make a sharp distinction between students and teachers, Outfox
                    only has users making it easier for everyone to collaborate and share resources.  As a user you can create
                    and customize groups with your own resources and thoes provided by your friends, teachers, colleagues and classmantes.
                </p>
        </Fragment>
    );
}

export default UserSection;