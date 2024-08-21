import styled from "styled-components";
import { global } from "../../globalStyle";

interface CardProps {
    new?: boolean;
}

export const ComunicadoDiv = styled.div `
    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: 100vh;

    align-items: flex-start;

    background: ${global.colors.fundo};
`;

export const BalaoSemMensagens = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: auto 0;
    align-self: center;

    width: 91.1%;
    padding: 1.5% 0;

    background:${global.colors.cinzaOpaco(0.10)};

    border-radius: 16px;
`;

export const IconeSemMensagens = styled.img `
    width: 4vw;
`;

export const TextoSemMensagens = styled.p `
    margin-top: 1.25vw;

    width: 79.7vw;

    color: ${global.colors.cinza};
    text-align: center;
    font-family: ${global.fonts.quickSand};
    font-size: 16px;
    font-weight: 700;
`;

export const CardMensagem = styled.div `

`;

export const CardData = styled.div `

`;

export const MensagensNaoLidas = styled.button `
    width: 25%;

    padding: 16px 0;
    margin-top: 2vw;
    margin-left: 8vw;
    background: ${global.colors.laranja};

    border-radius: 16px;
    border:none;

    text-align: center;
    color: ${global.colors.branco};
    font-family: ${global.fonts.quickSand};
    font-size: 16px;
    font-weight: 700;

    cursor: pointer;
`;

export const Container = styled.div `
    width: calc(100% - 16%);
    margin: 2vw 8vw;

    display: grid;
    grid-template-columns: .5fr .5fr;

    grid-gap: 24px;
`;

export const Card = styled.div<CardProps>`
    padding: 1.75vw;
    margin-top: 1px;
    background: ${(props) => props.new ? global.colors.branco : '#F7F7F7'};
    font-family: ${global.fonts.quickSand};
`;

export const DataRelativa = styled.h3<CardProps>`
    font-family: ${global.fonts.quickSand};
    color: ${(props) => props.new ? global.colors.laranja : global.colors.cinza};
    font-size: 20px;
    font-weight: 700;
`;

export const TextData = styled.p<CardProps>`
    margin-top: 0.5vh; 
    font-family: ${global.fonts.quickSand};
    color: ${(props) => props.new ? global.colors.laranja : global.colors.cinza};
    font-size: 16px;
    font-weight: 500;    
`;

export const TextMensagem = styled.p `
    margin-top: 3vh;

    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinza};

    font-size: 16px;
    font-weight: 500;
    line-height: 28px; /* 175% */
    word-wrap: break-word;
`;

export const SideIcon = styled.div `
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    background-color: ${global.colors.laranja};
`;

export const CardTop = styled.section`
    display: grid;
    grid-template-columns: 90% auto;
`;