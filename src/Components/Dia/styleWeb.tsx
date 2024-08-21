import styled from "styled-components";
import { global } from "../../globalStyle";

export const DiaDiv = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 78.125vw;

    align-items: center;
    justify-content: center;
    column-gap: 2vw;

    margin-top: 24px;
    padding: 16px 0;

    background-color: ${global.colors.cinza1};
    border-radius: 16px;
`;

/*-----------------------------------------------------------------*/

export const Gluten = styled.div `
    display: flex;
    flex: 0 0 95.5%;
    // height: 3vw;

    background: rgba(36, 82, 169, 0.2);

    margin: 0 30%;
    padding: 12px 0;

    align-items: center;
    justify-content: center;
    justify-self: flex-start;
    gap: 16px;

    border-radius: 16px;
`;

export const InfoIcon = styled.img `
    width: 32px;
`;

export const Aviso = styled.strong `
    font-family: ${global.fonts.quickSand};
    font-weight: 500;
    font-size: 16px;

    color: ${global.colors.azul};
`;

/*-----------------------------------------------------------------*/

export const HoraDiv = styled.div `
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 24px;
    font-weight: 700;

    background: ${global.colors.branco};

    margin-bottom: 8px;

    box-shadow: 0px 2px 4px #00000014;

    border-radius: 24px;
    border-left: 12px solid black;

    box-sizing: border-box;

    @media (max-width: 1138px) {
        font-size: 20px;
    }
`;

export const HoraConteudo = styled.div `
    width: 90%;

    display: flex;
    justify-content: space-between;

    padding: 24px 16px;
`;

export const TituloHora = styled.div `
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const IconeHora = styled.img `
    width: 1.875vw;
`;

export const NomeHora = styled.span `
    font-family: ${global.fonts.quickSand};
    letter-spacing: 2px;
`;

export const InfoHora = styled.span `
    font-family: ${global.fonts.quickSand};
`;

export const Linha = styled.div `
    display: flex;
    width: 90%;
    height: 2px;
    align-self: center;
`;

export const Menu = styled.div `
    display: flex;
    width: 36.25vw;
    margin-top: 2vh;
    
    flex-direction: column;
`;