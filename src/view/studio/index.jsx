import React from 'react';


//Componets
import Header from './componets/header';

import CorteDeSeccion from './componets/cortedeseccion/index';
import ImgText from './componets/imgtext';
import Form from './componets/form';
import Slyder from './componets/slyder';
import Footer from './componets/footer';


function Studio() {
    return(
        <>
            <Header />
            <CorteDeSeccion />
            <ImgText />
            <Form />
            <Slyder />
            <Footer /> 
        </>
    )
}

export default Studio;