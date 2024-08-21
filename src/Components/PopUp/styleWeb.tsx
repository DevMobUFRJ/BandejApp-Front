import styled from "styled-components";
import { global } from "../../globalStyle";

export const PopDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 60%;

    padding: 32px 0;
    
    align-items: center;

    overflow: auto;

    border: none;
    border-radius: 32px;

    background-color: ${global.colors.branco};

    transition: transform 0.3s ease-in-out;
    transform: scale(0, 0);
`;

/*----------------------------------------------------------------------------*/

export const PopTitulo = styled.h2 `
    margin: 0 0 3vh 0;
    font-family: ${global.fonts.quickSand};
    font-size: 2.5vw;
    font-weight: 700;
    color: ${global.colors.cinza};
`;

/*----------------------------------------------------------------------------*/

export const PopButtonDiv = styled.div `
    width: 100%;
`;

export const PopButton = styled.button `
    width: 30%;
    height: 6vh;

    margin: 1vw 35% 0;

    font-family: ${global.fonts.quickSand};
    font-size: 1.5vw;
    font-weight: 700;

    border: none;
    border-radius: 16px;

    background-color: ${global.colors.laranja};
    color: ${global.colors.branco};
`;

/*----------------------------------------------------------------------------*/
/*  A partir daqui são os elementos para serem usados como conteúdo do PopUp  */
/*----------------------------------------------------------------------------*/

export const PopSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 3vh 0;
`;

export const PopTexto = styled.p `
    margin: 2vh 3vw;

    font-family: ${global.fonts.quickSand};
    font-size: 1.5vw;
    font-weight: 500;
    text-align: center;

    color: ${global.colors.cinzaPratos};
`;

export const PopSubtitle = styled.h3 `
    margin: 0 0 0.5vh 0;
    font-family: ${global.fonts.quickSand};
    font-size: 1vw;
    font-weight: 500;
`;

export const PopLink = styled.a `
    font-family: ${global.fonts.quickSand};
    font-size: 1.5vw;
    font-weight: 700;
    color: ${global.colors.cinzaPratos};
    text-decoration: underline;
`;