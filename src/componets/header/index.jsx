import React from 'react';
//Components
import Nav from './nav';
import Button from '../other/button';
//Styled Components
import {
    ContainerHeader,
    TextHeader
} from './styled';
//img
import imgM1 from '../../static/image/header/imgM1.png';
function Header() {
    return(
        <>
        <Nav/>
        <ContainerHeader>
            <img src={imgM1} alt=""/>
            <TextHeader>
                <h1>In the digital world,<br/> we become essential</h1>
                <p>We are a digital studio capable of transforming an idea into a mind blowing project</p>
                <Button text="Button"/>
            </TextHeader>
        </ContainerHeader>
        </>
    );
}
export default Header;
