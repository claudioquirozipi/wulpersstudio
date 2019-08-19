import React from 'react';

//Assest
import {
    BgFooterSC
} from './styled';


function BgFooter(props) {
    const {bgImg} = props;
    return(
        <BgFooterSC bgImg={bgImg}>
            {props.children}
        </BgFooterSC>
        
    )
}

export default BgFooter;