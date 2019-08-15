import React from 'react';

//Components
import Form from './form';

//Styled-Components
import {
    ContainerFooter
} from './styled';

function Footer() {
    return(
        <ContainerFooter className="cqGrid12 footer">
            <div className="footer__bg1-2"></div>
            <div className="footer__bg2"></div>
            <div className="cqFlexCenterColumn footer__titulo1">
                <h3 className="footerTitulo1__h3">We got the formula to</h3>
                <h2 className="footerTitulo1__h2">Grow leads</h2>
            </div>
            <div className="cqFlexCenterColumn footer__mailing">
                <h2>Leave us your email. We will contact you</h2>
                <div className="footer__form">
                    <Form />
                </div>
            </div>
            <div className="cqflexBetween footer__information">
                <ul className="footerInformationElement">
                    <h2>Wulpers Co.</h2>
                    <li>All Right Reserved</li>
                </ul>
                <ul className="footerInformationElement">
                    <h2>About us</h2>
                    <li>Success Cases</li>
                    <li>Press</li>
                    <li>Partners</li>
                    <li>Investors</li>
                </ul>
                <ul className="footerInformationElement">
                    <h2>Contact</h2>
                    <li>Advisor@wulpers.com</li>
                    <li>4703 Westslope Cir,</li>
                    <li>Austin, Tx 78731.</li>
                </ul>
        
            </div>
            <div className="cqFlexCenter footer__redes">
               
                <a href="#" className="footerRedes__img footer__google"></a>
                <a href="#" className="footerRedes__img footer__instagram"></a>
            </div>
        </ContainerFooter>
    )
}

export default Footer;