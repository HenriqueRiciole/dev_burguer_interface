import { Link } from "react-router";
import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    background-color:${(props) => props.theme.mainBlack};
    width: 100%;
    height: 72px;
    padding: 0 56px;
    z-index: 1000;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

`
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        hr{
            height: 24px;
            border: 1px solid ${(props) => props.theme.darkGray};
        }
    }
`
export const HeaderLink = styled(Link)`
    color:${props=> props.$isActive 
     ? (props) => props.theme.purple  
     : (props) => props.theme.white};
    text-decoration: none;
    font-size: 14px;
    transition: color 200ms;

    &:hover{
        color: ${(props) => props.theme.purple};
    }
`
export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
`
export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;

    p{
        color: ${(props) => props.theme.white};
        line-height: 90%;
        font-weight: 300;

        span{
            font-weight: 700;
            color:${(props) => props.theme.purple};
        }
    }
`
export const LinkContainer = styled.div`    
    display: flex;
    align-items: center;
    gap: 10px;
`
export const Logout = styled.button`
    color: ${(props) => props.theme. red};
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    border: none;
`