import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.white};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

    *{
        color: ${(props) => props.theme.secondBlack};
        font-weight: 500;
    }
`
export const ContainerTop = styled.div`
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas: 
    'tittle tittle'
    'items items-price'
    'delivery-tax delivery-tax-price';

    .tittle{
        grid-area: tittle;
        font-size: 20px;
        font-weight: 700;
        background-color: ${(props) => props.theme.secondBlack};
        color: ${(props) => props.theme.white};
        width: 100%;
        padding: 16px;
        text-align: center;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .items{
        grid-area: items;
        font-size: 20px;
        padding-left: 16px;
        
    }
    .items-price{
        grid-area: items-price;
        font-size: 18px;
    }
    .delivery-tax{
        grid-area: delivery-tax;
        font-size: 20px;
        padding-left: 16px;
        
    }
    .delivery-tax-price{
        grid-area: delivery-tax-price;
        font-size: 18px;
        padding-right: 20px;
    }
    
    `
export const ContainerBottom = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
    padding: 0 16px 10px 16px ;
    
    *{
        color: ${(props) => props.theme.secondBlack};
        font-weight: bold;
    }
`
