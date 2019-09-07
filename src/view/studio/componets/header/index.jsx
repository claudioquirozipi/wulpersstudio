import React from 'react';
//Components
import Nav from './nav';
import Button from '../../componets/other/button';
//Styled Components
import {
    ContainerHeader,
    TextHeader
} from './styled';
//img
import imgM1 from '../../image/header/img1.svg';
function Header() {
    return(
        <>
        {/* <Nav/> */}
        <ContainerHeader>
            <img src={imgM1} alt=""/>
            <TextHeader>
                <h1>In the digital world,<br/> we become essential</h1>
                <p>We are a digital studio capable of transforming an idea into a mind blowing project</p>
                <a href="https://www.youtube.com/watch?v=-28dS9_oVbA&t=9s"><Button text="Watch video"/></a>
            </TextHeader>
        </ContainerHeader>
        </>
    );
}
export default Header;
