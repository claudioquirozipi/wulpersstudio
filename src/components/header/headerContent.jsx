import React from 'react';

import {
    HeaderContentSC
} from './styled';
function HeaderContent(props) {
    return(
        <HeaderContentSC>
            {props.children}
        </HeaderContentSC>
    );
}

export default HeaderContent;