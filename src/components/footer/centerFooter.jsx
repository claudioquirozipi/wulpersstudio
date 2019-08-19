import React from 'react';

//Styled-Components
import {
    CenterFooterSC
} from './styled';
function CenterFooter(props) {
    return(
        <CenterFooterSC>
            {props.children}
        </CenterFooterSC>
    )
}

export default CenterFooter;