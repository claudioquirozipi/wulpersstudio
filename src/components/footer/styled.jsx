import styled from 'styled-components';
import {MQ} from '../../config/style';


export const BgFooterSC = styled.footer`
    background-image: url(${props => props.bgImg});
    background-position: center top;
    background-size: cover;
    padding-top: 100px;
`;

export const CenterFooterSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    h2 {
        font-size: 15px;
        margin: 50px 0;
        text-align: center;
        @media ${MQ.md} {
            font-size: 35px;
        }
    }
`;


//TripleList
export const TripleListSC = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 8.3vw;
    margin-bottom: 50px;
    color: white;
    @media ${MQ.md} {
        flex-direction: row;
        align-items: flex-start;
    }
    ul {
        width: 180px;
        padding: 0;
        @media ${MQ.md} {
            width: auto;
        }
        li {
            list-style: none;
            h3 {
                font-weight: bold;
                font-size: 24px;
                @media ${MQ.md} {
                    font-size: 34.5px;
                }
            }
            p {
                font-size: 16px;
                margin: 12px 0;
                @media ${MQ.md} {
                    font-size: 23px;
                }
            }
        }
    }
`;