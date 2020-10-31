import React, { Fragment } from 'react';
import '../../static/css/base.css';
import {
    TableOfContentsContainer,
    IntroText,
    UserSection
} from '../../components';


const UserDocPage = () =>{
    return(
        <Fragment>
            <TableOfContentsContainer />
                <div id = "content_holder">
                    <IntroText />
                    <UserSection />
                </div>
        </Fragment>
    );
    
}

export default UserDocPage;