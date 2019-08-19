import React from 'react';
import {Link} from 'react-router-dom';
//Components
import Button from '../other/button';
//Styled Componets
import {
    ContainerNav,
    ContainerButtons,
    NavSC
} from './styled';
//img
import logo from '../../image/header/logo.svg';

import chevron from '../../image/header/chevron.svg';
function Nav() {
    return(
        <ContainerNav>
            <img src={logo} alt="Wulpers Studio"/>
            <ContainerButtons>
                <Link to="/"><Button text={"Let's talk"} /></Link>
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