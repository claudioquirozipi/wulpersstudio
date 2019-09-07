import React from 'react';


//Components
import Card from './card';

//Styled-Components
import {
    BackgroundCorteSeccion,
    Cards
} from './styled';




function CorteDeSeccion(props) {
    const {bgColor ,title, textM, textD, data}= props;
    console.log("dataCard",data)
    return(
        <>
            <BackgroundCorteSeccion bgColor={bgColor}>
                <h2>{title}</h2>
                <p>{textM}</p>
                <p>{textD}</p>
            </BackgroundCorteSeccion>
            <Cards bgColor={bgColor}>
                {data.map((dato,i) => {
                    return(
                        <Card
                            bgColor={bgColor}
                            key= {i}
                            bg={i=== 0 ? true : false}
                            imgM = {dato.imgM}
                            title ={dato.title}
                            text = {dato.text}
                        />
                    )
                })}
            </Cards>
        </>
    );
}
export default CorteDeSeccion;