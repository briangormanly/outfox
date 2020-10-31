import React, { Fragment } from 'react';
import '../../static/css/base.css';
import {
    TableOfContentsContainer,
    IntroText
} from '../../components';


const UserDocPage = () =>{
    return(
        <Fragment>
            <TableOfContentsContainer />
                <div id = "content_holder">
                    <IntroText />
                </div>
        </Fragment>
    );
    
}

export default UserDocPage;