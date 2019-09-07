import React from 'react';

//Componenst
import Header from './components/header';
import ImgText from './components/imgText';
import Blogs from './components/blogs';
import Footer from './components/footer';
import Seo from '../../components/seo';
//Components-Library
import CorteDeSeccion from '../../components/cortedeseccion';

//Data
import {dataCard} from './dataCard';

//Assets
import img from '../../static/img/wulpers/header/imgWulpers.svg'

function Home() {
    console.log("index datacard", dataCard)
    return(
        <>
            <Seo
            title="wulpers"
            description="Helping companies to give the jump by giving them dedicated teams"
            img={img}
            keywords="get leads, increase sales, better marketing, marketing agency.
            generar clientes, incrementar ventas, marketing, agencia de marketing."
            />
            <Header />
            <ImgText />
            <CorteDeSeccion 
                bgColor="#2c5bd8"
                title="Making possible these results"
                textM="Each team member has specific KPIs to successfully achieved a standardized sales and marketing process"
                textD="Each team member has specific KPIs to successfully achieved a standardized sales and marketing process"
                data= {dataCard}
            />
            <Blogs />
            <Footer />
        </>
    )
}

export default Home;