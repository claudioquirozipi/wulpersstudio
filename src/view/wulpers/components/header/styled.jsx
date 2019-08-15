import styled from 'styled-components';
import {MQ} from '../../../../config/style';

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

