import React from 'react';

//Componenst
import Header from './components/header';
import Check from './components/check';
import ImgText from './components/imgText';
import Blogs from './components/blogs';
import Footer from './components/footer';


function Home() {
    return(
        <>
            <Header />
            <Check />
            <ImgText />
            <Blogs />
            <Footer />
        </>
    )
}

export default Home;