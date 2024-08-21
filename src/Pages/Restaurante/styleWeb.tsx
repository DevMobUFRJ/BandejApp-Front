import styled from "styled-components";
import { global } from "../../globalStyle";

export const RestDiv = styled.div `
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;

    padding: 0 2vw;

    align-items: center;
    justify-content: center;
    gap: 32px;
    background-color: #EBECED;

    .restSelecionado {
        background: ${global.colors.laranja};
        transform: scale(1.05);
    }
    .textoSelecionado {
        color: white;
    }
    .restNotSelecionado {
        filter: opacity(50%);
    }
`;

/*----------------------------------------------------------*/

export const RestHeader = styled.header `
    display: flex;
    flex-direction: column;
    width: 91.11%;

    align-items: center;
`;

export const RestTitle = styled.h1 `
    font-family: ${global.fonts.quickSand};
    font-size: 3.33vw;
    font-weight: 800;
    color: black;
`;

export const RestP = styled.p `
    margin: 1.18vh 0 0 0;

    font-family: ${global.fonts.nunito};
    font-size: 2vw;
    font-weight: 600;

    text-align: center;
    color: ${global.colors.cinzaTexto};
`;

/*----------------------------------------------------------*/

export const RestButton = styled.button `
    display: flex;
    width: 70%;
    
    padding: 0.6vh 0;

    align-items: center;
    justify-content: center;

    font-family: ${global.fonts.quickSand};
    font-size: 1.8vw;
    font-weight: 800;

    border: none;
    border-radius: 4.2vw;

    color: white;
    background: ${global.colors.desativado};
`;