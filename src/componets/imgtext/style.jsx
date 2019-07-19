import styled from 'styled-components';
import {MQ} from '../../config/style';


export const ContainerTitle = styled.div`
    text-align: center;
    width: 100%;
    h2 {
        font-size: 30px;
        font-weight: 900;
        margin-bottom: 50px;
        @media ${MQ.md} {
            font-size: 80px;
        }
    }
    p {
        @media ${MQ.md} {
            font-size: 30px;
            margin-top: 0;
        }
    }
`;

export const ContainerImgText = styled.div``;
export const Container = styled.div`
    margin: 50px 0 0;
    & >:nth-child(1n) {
        @media ${MQ.md} {
            display: grid;
            grid-template-columns: 1fr .8fr 153px;
            & >:nth-child(1) {
                grid-column: 1/2;
                grid-row: 1/2;
            }
            & >:nth-child(2) {
                grid-column: 2/3;
                grid-row: 1/2;
                padding-left: 64px;
            }
        }
    } 
    & >:nth-child(2n) {
        @media ${MQ.md} {
            display: grid;
            grid-template-columns: 153px .8fr 1fr;
            & >:nth-child(1) {
                grid-column: 3/4;
                grid-row: 1/2;
            }
            & >:nth-child(2) {
                grid-column: 2/3;
                grid-row: 1/2;
                padding-left: 0;
            }
        }
    } 
`;


export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 25px;
    @media ${MQ.md} {
        justify-content: center;
        align-items: flex-start;
    }
    h3 {
        color: #CFCFCF;
        font-size: 18px;
        font-weight: bold;
        margin: 0 0 30px;
        @media ${MQ.md} {
            font-size: 30px;
            font-weight: bold;
        }
    }
    h2 {
        color: #2C3E50;
        font-size: 30px;
        text-align: center;
        font-weight: bold;
        margin: 0px 0 30px;
        @media ${MQ.md} {
            font-size: 70px;
            font-weight: bold;
            text-align: left;
        }
    }
    p {
        color: #707070;
        font-size:18px;
        line-height: 40px;
        text-align: center;
        margin: 0 0 50px 0;
        @media ${MQ.md} {
            font-size: 30px;
            text-align: left;
        }
    }
`;

export const ContainerImg = styled.div`
    & >:nth-child(1) {
        @media ${MQ.md} {
            display: none;
        }
    }
    & >:nth-child(2) {
        display: none;
        @media ${MQ.md} {
            display: block;
        }
    }
    img {
        width: 100%;
        height: auto;
        margin-bottom: 50px;
    }
`;

export const MicroSalChichaSC = styled.div`
    background: #6C68FD;
    width: 80px;
    height: 10px;
    border-radius: 10px;
    @media  ${MQ.md} {
        width: 120px;
        height: 20px;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 116px;
    margin-top: 116px;
`;

export const Button = styled.button`
    color: white;
    font-weight: bold;
    font-size: 25px;
    border: none;
    outline: none;
    background: #6C68FD;
    border-radius: 40px;
    width: 220px;
    height: 70px;
    :hover {
        background: #6C68FD;
    }
    :active {
        transform: translate(1px,1px);
    }
`;