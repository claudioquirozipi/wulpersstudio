import React from 'react';
//Styled-components
import { 
    CardSC,
    CardContainer
} from './styled';

function Card(pros) {
    const {imgM, title, text, bg} = pros
    console.log("hola",pros, bg)
    return(
        <CardContainer bg={bg}>
            <CardSC>
                <img src={imgM} alt="img"/>
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </CardSC>
        </CardContainer>
    );
}
export default Card;