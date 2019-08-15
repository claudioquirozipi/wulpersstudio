import styled, {css} from 'styled-components';
import {MQ} from '../../config/style';


export const LeftRightSC = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 8.3% 50px;
    @media ${MQ.md} {
        flex-direction: row;
        margin: 0 8.3% 150px;
    }
    ${props => props.reverse && css`
        @media ${MQ.md} {
            flex-direction: row-reverse;
        }
    `}
    ${props => props.center && css`
        flex-direction: column-reverse;
        @media ${MQ.md}{
            flex-direction: column-reverse;
        }
        div {
            
            width: 100%;
            
        }
    `}
`;

export const ContainerImg = styled.div`
    width: 80%;
    margin-bottom: 30px;
    @media ${MQ.md}{
        width: 40%;
        margin-bottom: 0;
    }
    img {
        width: 100%;
    }
`;
export const ContainerText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${MQ.md} {
        width: 40%;
    }
`;

