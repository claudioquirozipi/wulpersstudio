import styled from 'styled-components';
import {MQ} from '../../../../config/style';
//Assets
import imgAvion from '../../../../static/img/wulpers/footer/formAvion.svg';


export const FormSC = styled.form`
    background: white;
    display: flex;
    align-items: center;
    max-width: 400px;
    width: 70.7vw;
    padding: 0 25px;
    height: 50px;
    border-radius: 50px;
    margin-bottom: 50px;
    & :nth-child(1) {
        border: none;
        outline: none;
        width: 100%;
        font-weight: 700;
        color: #1E384D;
        font-size: 15px;
        @media ${MQ.md} {
        font-size: 20px;
        }
    }
    & :nth-child(1)::placeholder {
        color: #9c9c9c;
    }
    & :nth-child(2) {
        border: none;
        height: 38px;
        width: 38px;
        background: transparent;
        background-image: url(${imgAvion});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
`;

