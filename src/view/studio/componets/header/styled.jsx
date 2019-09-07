import styled from 'styled-components';

import { MQ } from '../../../../config/style';


export const ContainerHeader = styled.div`
    img {
        width: 100vw;
    }
    @media ${MQ.md}  {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 105px;
        img {
            width: 50vw;
        }
    }
`;
export const TextHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${MQ.md} {
        width: 40vw;
        margin-top: 50px;
        margin-left: 8vw;
        margin-right: 2vw;
        align-items: flex-start;
    }
    h1 {
        color: #2C3E50;
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        font-weight: 700;
        margin-top: 0px;
        margin-bottom: 0;
        @media ${MQ.md} {
            font-size: 45px;
            text-align: left;
        }
        @media ${MQ.lg} {
            font-size: 70px;
        }
    }
    p {
        display: none;
        @media ${MQ.md} {
            display: block;
            font-size:  25px;   
            text-align: left;
            margin: 44px 0 0;
        }
        @media ${MQ.lg} {
            font-size: 30px;
        }
    }
    button {
        height: 50px;
        width: 180px;
        font-size: 17px;
        font-weight: 700;
        margin-top: 57px;
        margin-bottom: 170px;
        @media ${MQ.md} {
            font-size: 21px;
            width: 15.63vw;
            height: 4.17vw;
            margin-top: 105px;
        }
        @media ${MQ.lg} {
            font-size: 30px;
            margin-top: 145px;
        }
    }
`;

export const ContainerNav = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 19px 26px;
    width: calc(100vw - 54px);
    &>img {
        height: 41px;
        @media ${MQ.md} {
            height: 50px;
        }
    }
    @media ${MQ.md} {
        margin: 15px 8vw 0px;
        width: calc(100vw - 200px);
    }
`;
export const NavSC = styled.div`
    display: none;
    opacity: 0;
    justify-content: center;
    align-items: center;
    border: 2px solid #3A3A3A;
    border-radius: 20px;
    position: relative;
    padding: 5px 15px;
    width: 60px;
    @media ${MQ.md} {
        width: 110px;
        height: 70px;
        font-size: 25px;
        border-radius: 50px;
        margin-left: 26px;
    }
    p {
        margin: 0;
        @media ${MQ.md} {
            font-size: 25px;
        }
    }
    img {
        margin-left: 15px;
        @media ${MQ.md} {
            width: 20px;
            height: 12px;
        }
    }
    ul {
        position: absolute;
        top: 100%;
        right: 0px;
        background: white;
        padding: 15px;
        width: 60px;
        border-radius: 10px;
        box-shadow: 0 3px 20px 0 rgba(0,0,0,.16);
        @media ${MQ.md} {
            width: 110px;
        }
        li {
            list-style: none;
            text-align: center;
            @media ${MQ.md} {
                font-size: 25px;
                margin: 17px 0 ;
            }
        }
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        display: none;
        @media ${MQ.sm} {
            display: block;
            font-size: 20px;
            width: 195px;
            height: 50px
        }
    }
`;

