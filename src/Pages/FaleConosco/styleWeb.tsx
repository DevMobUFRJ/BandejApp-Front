import styled from "styled-components";
import { global } from "../../globalStyle";

export const FaleDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;

    align-items: center;

    background: ${global.colors.fundo};
`;

/*----------------------------------------------------------------------------*/

export const BaloesDiv = styled.div `
    width: 75%;

    display: flex;
    flex-direction: row;
    padding: 32px;
    gap: 32px;

    background-color: ${global.colors.cinza1};
    border-radius: 24px;

    margin: 64px 0;
`;

export const Balao = styled.section `
    width: 23.5vw;
    
    // margin: 2vh 0;
    // padding: 0 0 4.44vw 0;
    
    overflow: hidden;
    
    border-radius: 16px;

    background: ${global.colors.branco};

    box-shadow: 0px 2px 10px #00000040;
    // box-shadow: 0px 2px 4px #00000014;
`;

export const BalaoBanner = styled.img `
    width: 100%;
`;

export const BalaoInfo = styled.div `
    box-sizing: border-box;
    width: 100%;

    display: flex;
    flex-direction: column;
    jutify-content: space-between;
    gap: 12px;

    padding: 1.25vw;
`;

export const BalaoTitle = styled.p `
    font-family: ${global.fonts.quickSand};
    font-size: 1.41vw;
    font-weight: 700;
    color: ${global.colors.cinza};
`;

export const BalaoDescription = styled.p `
    font-family: ${global.fonts.quickSand};
    font-size: 1.125vw;
    font-weight: 500;
    color: ${global.colors.cinzaTexto};
`;

/*----------------------------------------------------------------------------*/

export const Links = styled.span `
    display: grid;
    grid-template-rows: auto;
    grid-gap: 1vw;

    border-radius: 16px;
`;

export const InfoLink = styled.a `
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 85% 15%;
    width: 100%;
    height: 4.75vw;

    align-items: center;

    border: solid 2px ${global.colors.cinzaOpaco(.24)};
    border-radius: 16px;

    text-decoration: none;

    cursor: pointer;

    transition: background-color 50ms ease;
    :active {
        background-color: ${global.colors.cinzaOpaco(0.05)};
        .p {
            color: white;
        }
    }
`;

export const LinkName = styled.p `
    font-family: ${global.fonts.quickSand};
    font-size: 1.125vw;
    font-weight: 700;
    color: ${global.colors.cinza};

    padding-left: 1vw;
`;

export const LinkIcon = styled.img `
    width: 1.5vw;
`;