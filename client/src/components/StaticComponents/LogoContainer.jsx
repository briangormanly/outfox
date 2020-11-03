import React from 'react';
import fox from '../../assets/fox.svg';
import '../../static/css/base.css';

function LogoContainer() {
    return (
        <div id = "logoHolder">
            <img src = {fox} id = "fox_image" alt = "logo"></img>
        </div>
    );
}

export default LogoContainer;