import React from 'react';

//Components
import NavCQ from '../nav';

// Styled-Components
import {
    BlogsContainer,
    TitleBlog
} from './styled';

function BlogsCQ(props) {
    const {blogs, title} = props;
    return(
        <>
            <TitleBlog>{title}</TitleBlog>
            <BlogsContainer>
                {blogs.map((blog, i) => {
                    console.log(blog);
                    return(
                        <div key={i}>
                            <img src={blog.img} alt=""/>
                            <h2>{blog.title}</h2>
                            <p>{blog.text}</p>
                            <a href={blog.url}>Go to</a>
                        </div>
                    )})
                }
                
            </BlogsContainer>
        </>
    )
}

export default BlogsCQ;