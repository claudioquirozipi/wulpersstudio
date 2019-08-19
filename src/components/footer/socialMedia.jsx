import React from 'react';
import styled from 'styled-components';

const UlSocialMedia = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    li {
        margin: 0 25px 50px;
        a img {
            width: 50px;
        }
    }
`;

function SocialMedia(props) {
    const {data } = props;
    return(
        <UlSocialMedia>
            {data.map((data,i) =>{
                return(
                    <li key={i}>
                        <a href={data.link}><img src={data.img} alt={data.alt}/></a>
                    </li>
                )
            })}
        </UlSocialMedia>
        
    )
}

export default SocialMedia;