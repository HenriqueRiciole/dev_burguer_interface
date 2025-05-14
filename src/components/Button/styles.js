import styled from "styled-components";

export const ContainerButton = styled.button`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 5px;

    text-align: center;
    justify-content: center;

    &:hover{
        background: ${(props) => props.theme.secondDarkPurple};
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23FFFDFDFF' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
        border-radius: 5px;
    }

    font-family: 'Road Rage', sans-serif;
    font-weight: 400;
    font-size: 30px;
    background-color:   ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
`