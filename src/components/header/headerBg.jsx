import React from 'react';

//Styled-Components
import {
    Header
} from './styled';


function HeaderBg(props) {
    const {bgimgM, bgimgD} = props;
    
    return(
        <Header bgimgM={bgimgM} bgimgD={bgimgD}> 
            {props.children}
        </Header>
    )
}

export default HeaderBg;