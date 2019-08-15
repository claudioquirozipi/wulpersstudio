import React from 'react';

//Components
import NavCQ from '../../../components/nav';
import img1 from '../../blog/img/dbs.jpg';
import BlogsCQ from '../../../components/blog/blogsCQ';

//Data
import {dataBlogs} from '../../blog/tickets';

function StudioBlog() {
    return(
        <>
            <NavCQ imgNav={img1} imgAlt="wulpers" imgUrl="/studio" 
                links={[
                    {text: "Blog1", url:"/studio/blog/1"},
                    {text: "Blog2", url:"/studio/blog/2"},
                    {text: "Blog3", url:"/studio/blog/3"}
                ]}
            />
            <BlogsCQ blogs={dataBlogs}  title="Blog de Studio"/>
        </>
    )
}

export default StudioBlog;