import styled from 'styled-components';
import {MQ} from '../../../../config/style';
export const ContainerForm = styled.div`
    width: 100%;
`;
export const Header = styled.header`
    background: #635FFC;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        color: white;
        font-size: 30px;
        font-weight: 600;
        margin: 58px 10px ;
        text-align: center;
        @media ${MQ.md} {
            margin-top: 72px;
            margin-bottom: 87px;
            font-size: 60px;
        }
        @media ${MQ.lg} {
            font-size: 80px;
        }
    }
`;

export const FormContainer = styled.div`
    background: linear-gradient(#635FFC, #635FFC 50%, transparent 50%, transparent);
    transform: translateY(-1px);
    display: flex;
    justify-content: center;
    form {
        background: white;
        padding: 27px 47px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 3px 20px 0 rgba(0,0,0,.16);
        width: 87.2vw;
        box-sizing: border-box;
        @media ${MQ.md} {
            width: auto;
            padding: 51px 70px 82px;
            border-radius: 12px;
        }
        &>img {
            width: 84px;
            height: 84px;
            margin: 0 0 27px;
            @media ${MQ.md} {
                width: 8.18vw;
                height: 8.18vw;
                margin-bottom: 51px;
            }
        }
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    background: #F8F8F8;
    border-radius: 30px;
    height: 50px;
    width: 71.01vw;
    box-sizing: border-box;
    padding: 0 20px;
    margin-bottom: 12px;
    @media ${MQ.md} {
        width: 26.88vw;
        padding: 27px 30px;
        border-radius: 50px;
        margin-bottom: 21px;
    }
    input {
        margin-left: 27px;
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        @media ${MQ.md} {
            font-size: 14px;
        }
    }
    img {
        @media ${MQ.md} {
            width: 30px;
            height: 30px;
        }
    }
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    button {
        color: white;
        background: #635FFC;
        border: none;
        outline: none;
        height: 37px;
        width: 135px;
        border-radius: 20px;
        @media ${MQ.md} {
            height: 3.39vw;
            width: 12.24vw;
            font-size: 22px;
            border-radius: 30px;
        }
        @media ${MQ.lg} {
            font-size: 26px;
        }
    }
`;