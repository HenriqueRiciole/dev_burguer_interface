import styled from "styled-components";
import Texture from '../../assets/Texture.svg'
import BackgroundImage from '../../assets/backgroundContainer.svg'


export const Container = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.secondWhite};
    background:
        linear-gradient(rgba(1, 1, 1, 0.1), rgba(1, 1, 1, 0.1)),
        url('${BackgroundImage}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: 100%;
        background-attachment: fixed;
        min-height: 100vh;
`
export const Banner = styled.div`
    background: url('${Texture}');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 180px;
    margin-top: 72px;

    img{
        height: 130px;
    }
`
export const Tittle = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: ${(props) => props.theme.gren};
    text-align: center;
    position: relative;

    &::after{
        position: absolute;
        left: calc(50% + -28px);
        content: '';
        width: 56px;
        height: 4px;
        background-color: ${(props) => props.theme.gren};
        bottom: 0;
    }
`
export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 32%;
    gap: 40px;
    width: 100%;
    max-width: 1440px;
    padding: 40px;
    margin: 0 auto;
`