import styled from "styled-components";
import Banner_Home from '../../assets/banner-home.svg'
import BackgroundContainer from '../../assets/backgroundContainer.svg'

export const Banner = styled.div`
    background-image: url('${Banner_Home}');
    background-size: cover;
    background-position: center;
    height: 480px;
    margin-top: 72px;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        color: ${(props) => props.theme. darkWhite};
        position: absolute;
        right: 20%;
        top: 10%;
    }
`
export const Container = styled.section`
    background:
    linear-gradient(rgba(1, 1, 1, 0.1), rgba(1, 1, 1, 0.1)),
    url('${BackgroundContainer}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100%;
    background-attachment: fixed;
`
