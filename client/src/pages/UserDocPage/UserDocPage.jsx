import React, { Fragment } from 'react';
import '../../static/css/base.css';
import {
    TableOfContentsContainer,
    IntroText,
    UserSection,
    ResourceSection,
    GroupSection,
    FriendSection,
    SharedResourceSection
} from '../../components';
import OnlineTutorialsSection from '../../components/StaticComponents/OnlineTutorialSection';
import { LogoContainer } from '../../styles';


const UserDocPage = () =>{
    return(
        <Fragment>
            <TableOfContentsContainer />
                <div id = "content_holder">
                    <IntroText />
                    <UserSection />
                    <ResourceSection />
                    <GroupSection />
                    <FriendSection />
                    <SharedResourceSection />
                    <OnlineTutorialsSection />
                    <LogoContainer />
                </div>
        </Fragment>
    );
    
}

export default UserDocPage;