import React from 'react';

//Styled-Components
import {
    NavSC
} from './styled';


function NavHeader(props) {
    const {logo} = props;
    return(
        <NavSC>
            <img src={logo} alt="Wulpers"/>
            <h1> nav</h1>
        </NavSC>
    )
}

export default NavHeader;