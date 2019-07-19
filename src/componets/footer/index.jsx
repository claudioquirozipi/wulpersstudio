import React from 'react';
//Styled Components
import {
    ContainerFooter,
    Circle1,
    Circle2,
    Circle3,
    ContainerRedes,
    ContainerMobile,
    ContainerDesktop
} from './styled';
//img
import iconWeb from '../../static/image/footer/web.svg';
function Footer() {
    return(
        <ContainerFooter>
            <h3>Contact Us</h3>
            <ContainerMobile>
                <h2><span>Wulpers Studio</span> <br/>All Right Reserved</h2>
                <p><span>Contact</span> studio@wulpers.com 4703 Westslope Cir, Austin, TX 78731.</p>
                <ContainerRedes>
                    <img src={iconWeb} alt=""/>
                    <img src={iconWeb} alt=""/>
                </ContainerRedes>
            </ContainerMobile>
            <ContainerDesktop>
                <h2><span>Wulpers Studio</span> <br/>All Right Reserved</h2>
                <p>
                    <span>Contact</span> 
                    <br/>studio@wulpers.com
                    <br/>Cordoba 2470
                    <br/>Rosario, Argentina
                </p>
                <div>
                    <ContainerRedes><img src={iconWeb} alt=""/> <p>Wulpers</p></ContainerRedes>
                    <ContainerRedes><img src={iconWeb} alt=""/> <p>Wulpers</p></ContainerRedes>
                </div>
            </ContainerDesktop>
            <Circle1 />
            <Circle2 />
            <Circle3 />
        </ContainerFooter>
    );
}
export default Footer;