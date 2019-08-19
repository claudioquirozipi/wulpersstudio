import styled from 'styled-components';
import {MQ} from '../../../../config/style';


export const HeaderContainer = styled.header`
    position: relative;
    height: 100vh;
    border: 1px solid red;
    overflow: hidden;
`;
export const Headerimg = styled.img`
    position: absolute;
    left: 0%;
    bottom: -33%;
    bottom: 0;
    z-index: -10;
`;

// Title
export const ContainerTitleHeader = styled.div`
    grid-area: 4/2/span 1/12;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    @media ${MQ.md} {
        grid-area: 3/2/span 1/12;    
    }
    h2 {
        font-size: 20px;
        font-weight: 400;
        margin: 0;
        filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.4));
        @media ${MQ.sm} {
            font-size: 40px;
        }
        @media ${MQ.md} {
            font-size: 25px;
        }
    }
    h1 {
        font-weight: 700;
        font-size: 30px;
        margin: 10px 0 0;
        filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.4)); 
        @media ${MQ.md} {
            margin: 10px 0 0;
            font-size: 40px;
        }
    }
`;

//*********************Nav  **********************/
export const NavSC = styled.nav`
    background: red;
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 0 8.3vw;
    & > img {
        height: 25px;
    }
`;