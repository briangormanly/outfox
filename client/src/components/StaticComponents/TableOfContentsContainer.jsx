import React from 'react';
import '../../static/css/base.css';
import TableOfContentsList from './TableOfContentsList';
import TableOfContentsFooter from './TableOfContentsFooter';

function TableOfContentsContainer() {
    return (  
        <div id = "table_of_contents_holder">
            <div id = "toc_text" className = "text_centerer">
                Table of Contents
            </div>
            <TableOfContentsList />
            <TableOfContentsFooter />
        </div>
    );
}

export default TableOfContentsContainer;