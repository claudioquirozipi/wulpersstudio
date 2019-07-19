import styled from 'styled-components';
import {MQ} from '../../config/style';


export const ContainerFooter = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 100%;
    h3 {
        color: #635FFC;
        font-size: 30px;
        font-weight: 900;
        margin-bottom: 76px;
        margin-top: 314px;
        @media ${MQ.md} {
            font-size: 80px;
        }
    }
    
`;
export const ContainerMobile = styled.div`
    h2 {
        text-align: center;
        font-size: 16px;
        color: #2C3E50;
    }
    p {
        padding: 0 110px;
        text-align: center;
        line-height: 58px;
        color: #2C3E50;
        font-weight: 500;
        span {
            color: #2C3E50;
            font-size: 16px;
            font-weight: 500;
        }
    }
    @media ${MQ.md} {
        display: none;
    }
`;
export const ContainerDesktop = styled.div`
    display: none;
    & >:nth-child(n) {
        margin: 0 60px;
    }
    @media ${MQ.md} {
        display: flex;
        justify-content: center;
        width: 80%;
        margin-bottom: 320px;
    }
    h2, p {
        font-size: 20px;
        line-height: 50px;
    }
    h2 {
        font-weight: bold;
    }
    h2 span, p span {
        font-size: 45px;
        font-weight: bold;
    }

`;

export const ContainerRedes = styled.div`
    display: flex;
    justify-content: center;
    img {
        margin: 0 25px;
        height: 60px;
        width: 60px;
        margin-top: 21px;
        margin-bottom: 104px;
    }
    p {
        margin-left: 30px;
    }
    @media ${MQ.md} {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 30px;
        img {
            margin: 0;
        }
    }
    
`;
//*************Circles *****************/
export const Circle1 = styled.div`
    background: #635FFC;
    width: 250px;
    height: 250px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    transform: translateX(-50%);
    @media ${MQ.md} {
        width: 600px;
        border-radius: 250px;
        transform:  translate(-340px, 40px) rotateZ(25deg);
    }
`;
export const Circle2 = styled.div`
    background: #635FFC;
    width: 250px;
    height: 250px;
    position: absolute;
    top: 60%;
    right: 0;
    border-radius: 50%;
    transform: translate(70%, -50%);
    @media ${MQ.md} {
        width: 700px;
        height: 400px;
        top: 0;
        transform: translate(400px, 200px) rotate(-30deg);
        border-radius: 200px;
    }
`;
export const Circle3 = styled.div`
    background: #635FFC;
    width: 250px;
    height: 250px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    transform: translate(-50%, 50%);
    @media ${MQ.md} {
        width: 700px;
        height: 350px;
        transform: translate(-200px, 100px) rotate(-30deg);
        border-radius: 160px;
    }
`;