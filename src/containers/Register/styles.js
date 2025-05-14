
import styled from 'styled-components';
import { Link as ReactLink } from 'react-router';
import BackgroundLogin from '../../assets/background_img.svg'
import Background from '../../assets/imagem_fundo.png'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
     
`;
export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 80%;
    }
`;
export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    
    height: 100%;
    width: 100%;
    max-width: 50%;
    
   
    background: url(${Background}) no-repeat center center;
    background-color: #1e1e1e;
    background-size: cover;
     
   
   
`;
export const Title = styled.h2`
    font-family: 'Road Rage', sans-serif;
    font-size: 50px;
    color: ${(props) => props.theme.purple};
    line-height: 40px;
    font-weight: 400;
   

   
`;
export const Form = styled.form`

    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme. white};

    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
   

   
`;
export const InputContainer = styled.div`
   
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input{
        height: 52px;
        border-radius: 5px;
        border: none;
        padding: 0 16px;
        font-size: 18px;
    }

    label{
        font-size: 18px;
        font-weight: 600;
    }

    p{
        font-size: 14px;
        line-height: 80%;
        color: ${(props) => props.theme. darkRed};
        font-weight: 600;
        height: 10px;
    }
    
`;
export const Link = styled(ReactLink)`
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme. white};

    &:hover{
        text-decoration: underline;
        opacity: 0.8;
    }
`;

