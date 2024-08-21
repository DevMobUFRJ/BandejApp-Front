import styled from "styled-components";
import { global } from "../../globalStyle";

export const SideBarDiv = styled.div `
    // position: fixed;
    // top: 0;
    // left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    width: 100%;

    z-index: 4;

    background: white;

    border-bottom: 3px solid ${global.colors.cinzaOpaco(.32)};
`;

/*----------------------------------------------------------------------------*/

export const SideHeader = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.25vw 0;
`;

export const LogoImg = styled.img `
    height: 3.75vw;

    margin-right: -3.5vw;
`;

export const CloseSide = styled.img `
    align-self: center;
    width: 3.8vw;
`;

export const Versao = styled.p `
    font-family: ${global.fonts.quickSand};
    font-size: 3.33vw;
    font-weight: 500;

    color: ${global.colors.cinza};
`;

export const MostrarCreditos = styled.u `
    font-family: ${global.fonts.quickSand};
    font-size: 3.33vw;
    font-weight: 500;

    color: ${global.colors.cinza};
`;

/*----------------------------------------------------------------------------*/

export const ItemsDiv = styled.ul `
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: .35vw;

    width: 75%;
`;

export const SideItem = styled.li `
    box-sizing: border-box;
    border-bottom: 3px solid ${global.colors.cinzaOpaco(.32)};
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 8px;
    
    justify-content: center;
    align-content: start;

    align-items: center;

    padding: 0.3vw 0 0;
    margin-bottom: -3px;
    
    font-family: ${global.fonts.nunito};

    width: 80%;
    height: 3.125vw;

    :active {
		background-color: ${global.colors.cinza1};
	}

    cursor: pointer;
`;

export const SideIcon = styled.img `
    width: 1.75vw;
`;

export const ItemName = styled.p `
    font-family: ${global.fonts.quickSand};
    font-weight: 700;
    font-size: 1.25vw;
    color: ${global.colors.cinza};
`;

/*----------------------------------------------------------------------------*/

export const NotifNumber = styled.p `
    display: flex;
    width: 1vw;
    height: 1vw;

    align-items: center;
    justify-content: center;

    font-size: 4.5vw;
    font-weight: 700;

    border-radius: 50%;

    background: ${global.colors.laranja};
    color: ${global.colors.branco};
`;

export const InstitutoDiv = styled.div `
    display: flex;
    width: 66.6vw;
    height: 6.125vh;

    margin-top: 4.625vh;
    align-self: center;
    position: relative;

    align-items: center;
    justify-content: space-evenly;
`;

export const Linha = styled.div `
    width: 1px;
    height: 4.5vh;
    background-color: ${global.colors.cinzaOpaco(.16)};
`;

export const FecharDiv = styled.div `
    display: flex;
    width: 20.3vw;
    height: 20.3vw;
    margin-top: 4.625vh;
    
    flex-direction: column;
    justify-content: center;
    align-self: center;

    border: 1px solid ${global.colors.cinzaOpaco(.16)};
    border-radius: 50%;
`;

export const TextoFechar = styled.p `
    margin-top: 1.125vh;

    color: ${global.colors.preto};
    font-family: ${global.fonts.quickSand};

    text-align: center;
    font-size: 10px;
    font-weight: 700;
`;
