import React from 'react';

//Data
import {data} from './dataCard';
//Components
import Card from './card';

//Styled-Components
import {
    BackgroundCorteSeccion,
    Cards
} from './styled';




function CorteDeSeccion() {
    return(
        <>
            <BackgroundCorteSeccion>
                <h2>What we do</h2>
                <p>We give companies specialized teams<br/>
                to transform any project into reality
                </p>
                <p>We are a Startup that gives companies specialized<br/>teams to transform any project into reality</p>
            </BackgroundCorteSeccion>
            <Cards>
                {data.map((dato,i) => {
                    return(
                        <Card
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