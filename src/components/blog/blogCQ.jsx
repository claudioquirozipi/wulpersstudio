import React from 'react';

//Assets
import {
    BlogContainer
} from './styled';

function BlogCQ(props) {
    return(
        <BlogContainer>
            {props.children}
        </BlogContainer>
    )
}

export default BlogCQ;