import React, { Fragment } from 'react';
import '../../static/css/base.css';

const GroupSection = () =>{
    return(
        <Fragment>
            <h2 id = "groups" className = "sub_header"> Groups</h2>
                <p>Similar to classrooms in other educational platforms groups act as way to share and group information.  Unlike most educational
                    platforms however any user can create a group.  The benefit of this is that students can group resources from a number of classes
                    to create their own unique group with resources from years of school.  This also allows the user to create groups and add resources and
                    other users to topics that are unrelated to their currents studies that they may be interested in.  This feature helps to promote growth
                    and learning while allowing a number of users to help and collaborate along the way.
                </p>
        </Fragment>
    );

}

export default GroupSection;