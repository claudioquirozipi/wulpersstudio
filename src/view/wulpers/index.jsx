import React from 'react';

//Componenst
import Header from './components/header';
import ImgText from './components/imgText';
import Blogs from './components/blogs';
import Footer from './components/footer';


function Home() {
    return(
        <>
            <Header />
            <ImgText />
            <Blogs />
            <Footer />
        </>
    )
}

export default Home;