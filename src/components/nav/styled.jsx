import styled from 'styled-components';

export const NavContainer = styled.nav`
    background: ${props => props.bgNav || "#17a2b8"};
    padding: 0 8.3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    a > img {
        height: 30px;
    }
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            margin-left: 15px;
            list-style: none;
            a {
                color: white;
                text-decoration: none;
                font-weight: 700;
            }
        }
    }
`;