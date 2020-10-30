import React from 'react';
import '../../static/css/base.css';

function TableOfContentsList() {
    return (
        <div id = "toc_list">
            <ul id = "top-menu">
                <li className = "list_item"><a href = "#intro">Introduction</a></li>
                <li className = "list_sub_item"><a href = "#background">Background</a></li>
                <li className = "list_sub_item"><a href = "#mission">Mission</a></li>
                <li className = "list_sub_item"><a href = "#sign_up">Sign Up</a></li>
                <li className = "list_sub_item"><a href = "#follow">Follow Outfox</a></li>
                <li className = "list_item"><a href= "userDocumentation.html">User Documentation</a></li>
                <li className = "list_sub_item"> <a href = "userDocumentation.html#users">Users</a></li>
                <li className = "list_sub_item"> <a href = "userDocumentation.html#resources">Resources</a></li>
                <li className = "list_sub_item"> <a href = "userDocumentation.html#groups">Groups</a></li>
                <li className = "list_sub_item"> <a href = "userDocumentation.html#friends">Friends</a></li>
                <li className = "list_sub_item"> <a href = "userDocumentation.html#sharing">Sharing Resources</a></li>
                <li className = "list_sub_item"> <a href = "userDocumentation.html#onlineTutorials">Online Tutorials</a></li>
            </ul>
        </div>
    );
}

export default TableOfContentsList;