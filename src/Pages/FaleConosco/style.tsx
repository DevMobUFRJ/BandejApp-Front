import styled from "styled-components";
import { global } from "../../globalStyle";

export const FaleDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;

    align-items: center;
`;

/*----------------------------------------------------------------------------*/

export const BalaoInfo = styled.section `
    width: 86.67vw;
    
    margin: 2vh 0 0 0;
    padding: 0 0 3.33vw 0;
    
    overflow: hidden;
    
    border-radius: 4.44vw;
    
    /* Lembrar de tirar isso depois, foi só pq o fundo tá branco */
    box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.3);
    
    div {
        display: grid;
        grid-template-rows: auto auto;
        grid-row-gap: 2vh;
        padding: 3.33vw 4.44vw 0 4.44vw;
    }
`;

export const BalaoBanner = styled.img `
    width: 100%;
`;

export const BalaoTitle = styled.h3 `
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;
    color: ${global.colors.cinza};
`;

export const BalaoDescription = styled.p `
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 500;
    color: ${global.colors.cinzaTexto};
`;

/*----------------------------------------------------------------------------*/

export const Links = styled.span `
    display: grid;
    grid-template-rows: auto;
    grid-gap: 2vh;

    border-radius: 4.44vw;
`;

export const InfoLink = styled.a `
    display: grid;
    grid-template-columns: 85% 15%;
    width: 100%;
    height: 7.5vh;

    align-items: center;

    border: solid 2px ${global.colors.cinzaOF};
    border-radius: 4.44vw;
`;

export const LinkName = styled.p `
    padding: 4.44vw;
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;
    color: ${global.colors.cinza};
`;

export const LinkIcon = styled.img `
    width: 6.66vw;
`;