import React from 'react';
import styled from 'styled-components';
import {MQ} from '../../../../config/style';
const ButtonSC = styled.button`
    background: #635FFC;
    height: 50px;
    width: 160px;
    border-radius: 35px;
    border: none;
    outline: none;
    color: white;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    :active {
        transform: translate(1px,1px);
    }
    @media ${MQ.md} {
        border-radius: 50px;
    }
`;


function Button(props) {
    const {text} = props
    return(
        <ButtonSC > {text} </ButtonSC>
    );
}

export default Button