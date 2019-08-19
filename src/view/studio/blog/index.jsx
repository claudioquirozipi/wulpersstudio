import React from 'react';

//Components
import NavCQ from '../../../components/nav';

import BlogsCQ from '../../../components/blog/blogsCQ';

//Data
import {dataBlogs} from './tickets';

function StudioBlog() {
    return(
        <>
            <NavCQ imgAlt="wulpers" imgUrl="/studio" links={[ ]}/>
            <BlogsCQ blogs={dataBlogs}  title="Blog de Studio"/>
        </>
    )
}

export default StudioBlog;