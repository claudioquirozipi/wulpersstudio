import React from 'react';
import './App.css';
//Components
import Header from './componets/header';
import CorteDeSeccion from './componets/cortedeseccion/index';
import ImgText from './componets/imgtext';
import Form from './componets/form';
import Slyder from './componets/slyder';
import Footer from './componets/footer';

function App() {
  return (
    <div >
      <Header />
      <CorteDeSeccion />
      <ImgText />
      <Form />
      <Slyder />
      <Footer />
    </div>
  );
}

export default App;
