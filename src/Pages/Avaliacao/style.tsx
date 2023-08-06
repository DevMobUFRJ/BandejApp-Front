import styled from "styled-components";
import { global } from "../../globalStyle";

export const Avadiv = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    align-items: center;

    background: ${global.colors.fundo};
`;

/*----------------------------------------------------------------------------*/

export const AvaForm = styled.form `
    display: flex;
    flex-direction: column;
    width: 82.22vw;

    align-items: center;

    margin: 3vh;
    padding: 0 4.44vw;
    
    border-radius: 4.44vw;
    background-color: ${global.colors.branco};
`;

export const AvaSection = styled.section `
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: 1.25vh;
    
    width: 100%;
    
    margin: 3vh 0;
`;

/*----------------------------------------------------------------------------*/

export const EmailInput = styled.input `
    width: 90%;
    height: 7.5vh;

    padding: 0 5%;

    outline: none;
    border: 2px solid ${global.colors.cinzaOpaco(0.24)};
    border-radius: 4.44vw;

    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 500;
    color: ${global.colors.cinza};

    :focus { border-color: ${global.colors.laranja}; }
`;

export const Comentario = styled.textarea `
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 500;
    color: ${global.colors.laranja};
`;