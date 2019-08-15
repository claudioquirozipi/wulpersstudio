import React from 'react';
import {Link} from 'react-router-dom';

//Styled-Component
import {
    ContainerTitleHeader
} from './styled';
function Header() {
    return(
        <header className="cqGrid12x12 header">
		    <div className="header__header">
                <Link to="/" className="header__linkLogo">
                    <img src="image/header__logo.svg" alt="wulpers" className="header__logo"/>
                </Link>
            
                <div className="menu">
                    <div className="menu__Desplegable" id="menu__Desplegable">
                        <div className="menu__ContainerBanderas" id="menu__ContainerBanderas">
                            <a href="#" className="menu__Banderas"></a>
                            <a href="#" className="menu__Banderas"></a>
                            <a href="#" className="menu__Banderas"></a>
                        </div>
                        <div className="menu__ContainerDatos" id="menu__ContainerDatos">
                            {/* <Link to="/" className="menu__Datos">Wulpers</Link>
                            <Link to="/blog" className="menu__Datos">Blog</Link> */}
                            <Link to="/studio" className="menu__Datos">Wulpers Studio</Link>
                            						
                        </div>
                    </div>
                    <div className="menu__ContainerCircle" id="menu__ContainerCircle">
                        <div className="menu__Circle"></div>
                        <div className="menu__Circle"></div>
                        <div className="menu__Circle"></div>
                    </div>
                </div>
            </div>
            <ContainerTitleHeader >
                <h2>We help companies to</h2>
                <h1>Give the Jump</h1>
            </ContainerTitleHeader>
            <div className="header__img header__img--expandir">
                <img src="image/3/header__img.svg" alt=""/>
            </div>

        </header>
    )
}

export default Header;