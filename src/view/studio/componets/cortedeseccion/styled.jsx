import styled,  {css} from 'styled-components';
import {colors} from '../../../../static/style'
import {MQ} from '../../../../config/style';

export const BackgroundCorteSeccion = styled.div`
    background: ${colors.purple};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 0 26px;
    h2 {
        font-size: 30px;
        margin-top: 55px;
        margin-bottom: 0;
        @media ${MQ.md} {
            font-size: 70px;
            margin-top: 50px;
        }
        @media ${MQ.lg} {
            font-size: 80px;
        }
    }
    p {
        text-align: center;
        font-size: 18px;
        line-height: 40px;
        margin: 26px 0  50px;
        @media ${MQ.md} {
            margin: 50px 0 65px;
            font-size: 27px;
        }
        @media ${MQ.lg} {
            font-size: 30px,
        }
    }
    & :nth-child(2) {
        @media ${MQ.md} {
            display: none;
        }
    }
    & :nth-child(3) {
        display: none;
        @media ${MQ.md} {
            display: block;
        }
    }
`;
export const Cards = styled.div`
    @media ${MQ.md} {
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(${colors.purple}, ${colors.purple} 50%,transparent 50%, transparent);
        transform: translateY(-1px);
        margin-bottom: 191px;
    }
`;
export const CardContainer = styled.div`
    transform: translateY(-1px);
    padding: 0 26px;
    margin-bottom: 26px;
    background: transparent;
    width: 100vw;
    box-sizing: border-box;
    ${props => props.bg && css`
        background: linear-gradient(${colors.purple}, ${colors.purple} 50%,transparent 50%, transparent);
    `}
    @media ${MQ.md} {
        background: transparent;
        padding: 0;
        width: auto;
    }
`;
export const CardSC = styled.div`
    border-radius: 8px;
    background: white;
    box-shadow: 3px 3px 6px 0 rgba(0,0,0,.16);
    padding: 0 23px;
    display: grid;
    grid-template-columns: 108px 1fr;
    align-items: center;
    grid-column-gap: 12px;
    @media ${MQ.md} {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 .99vw;
        width: 20.9vw;
        height: 470px;
        box-sizing: border-box;
        padding: 0px 2.6vw;
    }
    @media ${MQ.lg} {
        height: 550px;
    }
    img {
        width: 108px;
        height: 108px;
        margin-right: 12.4px;
        @media ${MQ.md} {
            margin-top: 46px;
            margin-bottom: 36px;
            margin-right: 0 ;
            width: 11.5vw;
            height: 11.5vw;
        }
    }
    h3 {
        font-size: 21px;
        margin-top: 30px;
        margin-bottom: 9px;
        font-weight: bold;
        color: #707070;
        @media ${MQ.md} {
            font-size: 24px;
            text-align: center;
            margin: 0;
        }
        @media ${MQ.lg} {
            font-size: 32px;
        }
    }
    p {
        margin: 0 0 30px;
        font-size: 13px;
        color: #CFCFCF;
        @media ${MQ.md} {
            font-size: 17px;
            text-align: center;
            margin: 27px 0 24px;
        }
        @media ${MQ.lg} {
            font-size: 19px;
        }
    }
`;