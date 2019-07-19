import React from 'react';

//Components
import Button from '../other/button';
//Styled Componets
import {
    ContainerNav,
    ContainerButtons,
    NavSC
} from './styled';
//img
import logo from '../../static/image/header/logo.svg';
import chevron from '../../static/image/header/chevron.svg';
function Nav() {
    return(
        <ContainerNav>
            <img src={logo} alt=""/>
            <ContainerButtons>
                <Button text={"Let's talk"} />
                <NavSC>
                    <p>Nav</p>
                    <img src={chevron} alt=""/>
                    <ul>
                        <li>En</li>
                        <li>Es</li>
                        <li>Po</li>
                    </ul>
                </NavSC>
            </ContainerButtons>
        </ContainerNav>
    );
}
export default Nav;