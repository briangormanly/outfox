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
                <li className = "list_sub_item"><a href = "#followoutfox">Follow Outfox</a></li>
                <li className = "list_item"><a href= "#userDocumentation">User Documentation</a></li>
                <li className = "list_sub_item"> <a href = "#users">Users</a></li>
                <li className = "list_sub_item"> <a href = "#resources">Resources</a></li>
                <li className = "list_sub_item"> <a href = "#groups">Groups</a></li>
                <li className = "list_sub_item"> <a href = "#friends">Friends</a></li>
                <li className = "list_sub_item"> <a href = "#sharing">Sharing Resources</a></li>
                <li className = "list_sub_item"> <a href = "#onlineTutorials">Online Tutorials</a></li>
            </ul>
        </div>
    );
}

export default TableOfContentsList;