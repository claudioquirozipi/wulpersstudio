import styled from 'styled-components';
import {MQ} from '../config/media';


export const Header = styled.header`
    background-image: url(${props => props.bgimgM});
    background-position: center bottom;
    background-size: cover;
    height: 100vh;
    overflow: hidden;
    margin-bottom: 150px;
    @media ${MQ.md} {
        background-image: url(${props => props.bgimgD});
    }
`;

export const HeaderContentSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: calc(100% - 56px);
    h2, h3 {
        color: white;
        text-shadow: 3px 3px 4px rgba(0,0,0,0.4);
        font-weight: 400;
        font-size: 20px;
        margin: 0;
        @media ${MQ.sm} {
            font-size: 40px;
            margin-top: 50px;
        }
        @media ${MQ.md} {
            font-size: 25px;
            margin-top: 0;
        }
    }
    h2 {
        margin: 10px 0 100px;
        font-size: 30px;
        font-weight: 700;
        @media ${MQ.sm} {
            font-size: 60px;
            
        }
        @media ${MQ.md} {
            margin: 10px 0 30px;
            font-size: 40px;
        }
    }
    
    img {
       height: auto; 
       max-height: 70%;
       max-width: 70%;
    }
`;