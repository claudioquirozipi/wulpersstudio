import React from 'react';


//Componets
import Seo from '../../components/seo';
import Header from './componets/header';
import CorteDeSeccion from './componets/cortedeseccion/index';
import ImgText from './componets/imgtext';
import Form from './componets/form';
import Slyder from './componets/slyder';
import Footer from './componets/footer';

//Assets
import img from './image/header/logo.svg';

function Studio() {
    return(
        <>
            <Seo 
                title="Wulpers Studio - UI/UX for digital projects"
                description="We are a digital studio capable of transforming an idea into a mindblowing project."
                img={img}
                keywords="App design, UI, UX, Software development, Sofware factory, Software interfase.
                Diseño de apps, diseño de interfases, experiencia de usuario, empresa de software,"
            />
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