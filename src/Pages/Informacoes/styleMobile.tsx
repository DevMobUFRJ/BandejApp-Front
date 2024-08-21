import styled from "styled-components";
import { global } from "../../globalStyle";

export const InformDiv = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    align-items: center;
    justify-content: center; 

    background: ${global.colors.fundo};
`;


export const SelecionaInfoDivBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 91.1vw;
    height: 12vh;

    margin-top: 2vh;

    border-radius: 16px;
    background: ${global.colors.branco};
`;

export const SelecionaInfoDiv = styled.div `
    display: block;
    width: 91.1%;
    height: 8vh;    
 `;

/*----------------------------------------------------------------------------*/

export const BalaoInfo = styled.section `
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 2vh;
    width: 82.23vw;
    height: fit-content;

    margin: 2vh 0 0 0;
    padding: 4.44vw;

    border-radius: 4.44vw;
    background-color: ${global.colors.branco};
`;

export const InfoTitle = styled.h3 `
    padding: 0 0 0 1%;

    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;

    color: ${global.colors.cinza};
`;

/*----------------------------------------------------------------------------*/

export const InfoGrid = styled.div `
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 0.5vh;
`;

export const InfoSubtitle = styled.p `
    padding: 0 0 0 1%;

    font-family: ${global.fonts.quickSand};
    font-size: 3.33vw;
    font-weight: 500;
    
    color: ${global.colors.cinzaClaro};
`;

export const InfoArea = styled.section `
    display: flex;
    width: 100%;
    height: 100%;
    
    justify-content: space-between;
`;

/*----------------------------------------------------------------------------*/

export const InfoBalao = styled.div `
    display: flex;
    flex-direction: column;
    width: 48.64%;
    height: calc(100% - 4vh);

    padding: 2vh 0;
    
    align-self: flex-start;
    align-items: center;
    justify-content: space-between;

    border: solid 1px ${global.colors.cinzaOpaco(0.16)};
    border-radius: 4.44vw;
`;

export const InfoUndertitle = styled.p `
    padding: 0 0 3vh 0;

    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 500;

    text-align: center;
    color: ${global.colors.cinzaClaro};
`;

export const InfoValor = styled.h4 `
    width: 70%;
    
    text-align: center;
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;

    color: ${global.colors.cinzaPratos};
`;