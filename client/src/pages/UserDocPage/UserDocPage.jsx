import React, { Fragment } from 'react';
import '../../static/css/base.css';
import {
    TableOfContentsContainer,
    IntroText,
    UserSection,
    ResourceSection,
    GroupSection,
    FriendSection,
    Background,
    Mission,
    SignUp,
    FollowOutfox,
    SharedResourceSection,
    LogoContainer,
} from '../../components';
import OnlineTutorialsSection from '../../components/StaticComponents/OnlineTutorialSection';

const UserDocPage = () =>{
    return(
        <Fragment>
            <TableOfContentsContainer />
            <div id = "content_holder">
                <Background />
                <Mission />
                <SignUp />
                <FollowOutfox />
                <IntroText />
                <UserSection />
                <ResourceSection />
                <GroupSection />
                <FriendSection />
                <SharedResourceSection />
                <OnlineTutorialsSection />
            </div>
            <LogoContainer />
        </Fragment>
    );

}

export default UserDocPage;
