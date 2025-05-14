import styled from "styled-components";
import BannerHamburger from '../../assets/background_cardapio.svg'
import BackgroundContainer from '../../assets/backgroundContainer.svg'
import { Link } from "react-router";



export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.secondWhite};

`
export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 480px;
    width: 100%;
    position: relative;
    margin-top: 72px;

    background: url('${BannerHamburger}') no-repeat ;
    background-color: ${(props) => props.theme.mainBlack};
    background-position: center;
    background-size: cover;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: ${(props) => props.theme.white};
        position: absolute;

        right: 20%;
        top: 30%;

        span{
            display: block;
            color: ${(props) => props.theme.white};
            font-size: 20px;
        }
         
    }
`

export const ContainerTotal = styled.div`
 background:
      linear-gradient(rgba(1, 1, 1, 0.1), rgba(1, 1, 1, 0.1)),
      url('${BackgroundContainer}');
      background-size: cover;
      background-position: center;
      min-height: 100%;
      background-attachment: fixed;
      
`

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    padding-top: 30px;
   
`

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color:${(props) => (props.$isActiveCategory ? (props) => props.theme.purple : (props) => props.theme.strongRed)} ;
    font-size: 24px;
    font-weight: bold;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}`};
`
export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    padding-top: 60px;
    gap: 60px;
    justify-content: center;

`
export const BackButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.purple};
    padding-top: 10px;
    width: 300px;
    height: 52px;
    border: 0;
    border-radius: 5px;
    font-size: 30px;
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px auto 0 auto;
    position:  relative;
    top: -15px;

    
    &:hover{
        background-color: ${(props) => props.theme.secondDarkPurple};
    }
`