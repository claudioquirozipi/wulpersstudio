import React from 'react';

//Components
import BlogsCQ from '../../components/blog/blogsCQ';
import NavCQ from '../../components/nav';


//Data
import {dataBlogs} from './tickets';


function Blog() {
    
    return(
        <>
            <NavCQ  imgAlt="wulpers" imgUrl="/" 
                bgNav="#75BAF3"
                links={[
                    // {text: "Blog1", url:"/blog/1"},
                    // {text: "Blog2", url:"/blog/2"},
                    // {text: "Blog3", url:"/blog/3"}
                ]}
                
            />
            <BlogsCQ blogs={dataBlogs}  title="Blog" bgLink="#75BAF3"/>
            
        </>
    )
}

export default Blog;