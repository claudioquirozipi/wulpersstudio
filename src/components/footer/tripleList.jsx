import React from 'react';
import {
    TripleListSC
} from './styled';


function TripleList(props) {
    return(
        <TripleListSC>
            {props.children}
        </TripleListSC>
    )
}

export default TripleList;