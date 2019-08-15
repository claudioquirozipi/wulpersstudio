import React, {useState} from 'react';
import {Link} from 'react-router-dom';
//Styled Components
import {
    ContainerSlyder,
    Container1,
    ContainerSlyderButton,
    ButtonSC,
    Container2,
    SlyderSC,
    Container3,
    Container4,
    SubTitle
} from './styled';

//Asest
import d1 from '../../../blog/img/img1.jpg';
import d2 from '../../../blog/img/img2.jpg';
import d3 from '../../../blog/img/img3.jpg';
import d4 from '../../../blog/img/img4.jpg';
import d5 from '../../image/slyder/D5.png';

const valorInicial = [
    {
        titulo: "Analyze CX funnels",
        parrafo: "Why is so necessary for this digital era has a partner for UI/UX to resolve all your digital projects.",
        positionX: "0%",
        button1: true,
        button2: false,
        button3: false
    },
    {
        titulo: "Easy sales management",
        parrafo: "text 2 asñdkfjadsfkñadf",
        positionX: "-100%",
        button1: false,
        button2: true,
        button3: false
    },
    {
        titulo: "The necessary team",
        parrafo: "text 3",
        positionX: "-200%",
        button1: false,
        button2: false,
        button3: true
    }
]
function Slyder() {
    const [valor, cambiarValor] = useState(valorInicial[0]);
    function Button1() { cambiarValor(valorInicial[0]) }
    function Button2() { cambiarValor(valorInicial[1]) }
    function Button3() { cambiarValor(valorInicial[2]) }
    return(
        <ContainerSlyder>
            <Container1>
                <div>
                    <h2>{valor.titulo}</h2>
                    <p>{valor.parrafo}</p>
                </div>
                <ContainerSlyderButton>
                    <ButtonSC onClick={Button1} colorSC={valor.button1}/>
                    <ButtonSC onClick={Button2} colorSC={valor.button2}/>
                    <ButtonSC onClick={Button3} colorSC={valor.button3}/>
                </ContainerSlyderButton>
            </Container1>
            <Container2>
                <SlyderSC left={valor.positionX}>
                    <Link to="/studio/blog/1"><img src={d1} alt=""/></Link>
                    <Link to="/studio/blog/2"><img src={d2} alt=""/></Link>
                    <Link to="/studio/blog/3"><img src={d3} alt=""/></Link>
                </SlyderSC>
            </Container2>
            <Container3>
                <img src={d4} alt=""/>
                <SubTitle>Courses</SubTitle>
            </Container3>
            <Container4>
                <img src={d5} alt=""/>
                <SubTitle>Awards</SubTitle>
            </Container4>
        </ContainerSlyder>
    );
}

export default Slyder;