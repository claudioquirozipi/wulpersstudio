import React from 'react';


//Components
import Nav2CQ from '../../../../components/nav/nav2';
import HeaderBg from '../../../../components/header/headerBg';
import HeaderContent from '../../../../components/header/headerContent';

//Assets
import bgHeaderImgM from '../../../../static/img/wulpers/header/headerBgM.svg'
import bgHeaderImgD from '../../../../static/img/wulpers/header/headerBgD.svg'
import logo from '../../../../static/img/wulpers/header/headerLogo.svg'
import imgWulpers from '../../../../static/img/wulpers/header/imgWulpers.svg';

function Header() {
    return(
        <>
        <HeaderBg bgimgM={bgHeaderImgM} bgimgD={bgHeaderImgD}>
            <Nav2CQ imgUrl="/" bgNav="transparent" imgNav={logo}
                links={[{text:"Wulpers Studio", url:"/studio"}]}
            />
            <HeaderContent>
                <h3>We help companies to</h3>
                <h2>Give the Jump</h2>
                    <img src={imgWulpers} alt=""/>  
            </HeaderContent>
        </HeaderBg>
        </>
    )
}
export default Header;