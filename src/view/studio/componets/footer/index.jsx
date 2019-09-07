import React from 'react';
import {Link} from 'react-router-dom';

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
import iconWeb from '../../image/footer/web.svg';
import iconWeb2 from '../../image/footer/web2.svg';

function Footer() {
    return(
        <ContainerFooter>
            <h3>Contact Us</h3>
            <ContainerMobile>
                <h2><span>Wulpers Studio</span> <br/>All Right Reserved</h2>
                <p>
                    <span>About us</span> 
                    <br/>Studio@wulpers.com
                    <br/> <Link to="/"> Wulpers Co.</Link>
                    <br/> <Link to="/studio/blog"> Wulpers news</Link>
                </p>
                <ContainerRedes>
                    <a href="https://dribbble.com/wulpers">
                        <img src={iconWeb} alt=""/>
                    </a> 
                    <a href="https://www.linkedin.com/company/wulpers/">
                        <img src={iconWeb2} alt=""/>
                    </a> 
                </ContainerRedes>
            </ContainerMobile>
            <ContainerDesktop>
                <h2><span>Wulpers Studio</span> <br/>All Right Reserved</h2>
                <p>
                    <span>About us</span> 
                    <br/>Studio@wulpers.com
                    <br/> <Link to="/"> Wulpers Co.</Link>
                    <br/> <Link to="/studio/blog"> Wulpers news</Link>
                </p>
                <div>
                    <ContainerRedes>
                        <a href="https://dribbble.com/wulpers">
                            <img src={iconWeb} alt=""/>
                        </a> 
                        <p>Dribbble</p>
                    </ContainerRedes>
                    <ContainerRedes>
                        <a href="https://www.linkedin.com/company/wulpers/">
                            <img src={iconWeb2} alt=""/>
                        </a> 
                        <p>Linkedin</p>
                    </ContainerRedes>
                </div>
            </ContainerDesktop>
            <Circle1 />
            <Circle2 />
            <Circle3 />
        </ContainerFooter>
    );
}
export default Footer;