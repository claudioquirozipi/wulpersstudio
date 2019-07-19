import React, {useState} from 'react';

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
import d1 from '../../static/image/slyder/D1.png';
import d5 from '../../static/image/slyder/D5.png';

const valorInicial = [
    {
        titulo: "Why us?",
        parrafo: "Why is so necessary for this digital era has a partner for UI/UX to resolve all your digital projects.",
        positionX: "0%",
        button1: true,
        button2: false,
        button3: false
    },
    {
        titulo: "title 2",
        parrafo: "text 2 asñdkfjadsfkñadf",
        positionX: "-100%",
        button1: false,
        button2: true,
        button3: false
    },
    {
        titulo: "title 3",
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
                    <img src={d1} alt=""/>
                    <img src={d1} alt=""/>
                    <img src={d1} alt=""/>
                </SlyderSC>
            </Container2>
            <Container3>
                <img src={d1} alt=""/>
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