import React from 'react';
import {Link} from 'react-router-dom';
//Components
import Form from './form';
import BgFooter from '../../../../components/footer/bgFooter';
import CenterFooter from '../../../../components/footer/centerFooter';
import TripleList from '../../../../components/footer/tripleList';
import SocialMedia from '../../../../components/footer/socialMedia';


//Assest
import bgImg from '../../../../static/img/wulpers/footer/bgFooter.svg';
import googleimg from '../../../../static/img/wulpers/footer/google.png';
import lindeninimg from '../../../../static/img/wulpers/footer/linkedin.png';


function Footer() {
    return(
        
        <BgFooter bgImg={bgImg}>
            <CenterFooter>
                <h2>Leave us your email. We will contact you</h2>
                <Form />
            </CenterFooter>
            <TripleList>
                <ul>
                    <li><h3>Wulpers Co.</h3></li>
                    <li><p>All Right Reserved</p></li>
                </ul>
                <ul>
                    <li><h3>About us</h3></li>
                    <li><p><a href="#">Wulpers Co.</a></p></li>
                    <li><p><Link to="/studio">Wulpers Studio</Link></p></li>
                    <li><p>Partners</p></li>
                </ul>
                <ul>
                    <li><h3>Contact</h3></li>
                    <li><p>Advisor@wulpers.com</p></li>
                    <li><p>4703 Westslope Cir,</p></li>
                    <li><p>Austin, Tx 78731.</p></li>
                </ul>
            </TripleList>
            <SocialMedia 
                data={[
                    {link:"https://www.youtube.com/channel/UCcKEtWR6WOl38hxlsRhUreA", img: googleimg, alt:"google +"},
                    {link:"https://www.linkedin.com/company/wulpers/", img: lindeninimg, alt:"linkedin"}
                ]}
            />
        </BgFooter>
    )
}

export default Footer;