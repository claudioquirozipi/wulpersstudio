import React from 'react';
//Styled Components
import {  
    ContainerTitle,
    Container,
    ContainerImgText,
    ContainerText,
    ContainerImg,
    MicroSalChichaSC,
    ContainerButton,
    Button
} from "./style";

//Data 
import {data} from './data';

//Functions
function handleMicroSalchicha(michosalchicha) {
    if (michosalchicha===true) {
        return( <MicroSalChichaSC/>)
    }
}
function ImgText() {
    return(
        <>
            <ContainerTitle>
                <h2>Our skills</h2>
                <p>We are a startup of 12 persons capable<br/>to create amazing things</p>
            </ContainerTitle>
            <Container>
                {data.map((data,i)=>{
                    return(
                        <ContainerImgText key={i}>
                            <ContainerImg>
                                <img src={data.imgM} alt=""/>
                                <img src={data.imgD} alt=""/>
                            </ContainerImg>
                            <ContainerText>
                                <h3>{data.subTitle}</h3>
                                <h2>{data.title}</h2>
                                <p>{data.text}</p>
                                {handleMicroSalchicha(data.microSalchicha)}
                            </ContainerText>
                        </ ContainerImgText>
                    );
                })}
            </Container>
            <ContainerButton>
                <a href="https://dribbble.com/wulpers"><Button>View Projects</Button></a>
            </ContainerButton>
        </>
    );
}
export default ImgText;