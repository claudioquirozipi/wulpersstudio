import React from 'react';

//Components
import NavCQ from '../../../components/nav';

import BlogsCQ from '../../../components/blog/blogsCQ';

//Data
import {dataBlogs} from './tickets';

function StudioBlog() {
    return(
        <>
            <NavCQ 
                imgAlt="wulpers" 
                imgUrl="/studio" links={[ ]}
                bgNav="#635FFC"
            />
            <BlogsCQ blogs={dataBlogs} bgLink="#635FFC" title="Blog de Studio"/>
        </>
    )
}

export default StudioBlog;