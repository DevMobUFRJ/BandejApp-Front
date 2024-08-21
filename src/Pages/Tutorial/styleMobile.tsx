import styled from "styled-components";
import { global } from "../../globalStyle";

export const TutDiv = styled.div `
    display: flex;
    flex-direction: column;

    width: 100vw;
    min-height: 100vh;

    .currentPage { background: white; }
    .nextButton { 
        background: ${global.colors.laranja};
        color: white;
    }

    .currentTemplate {
        transform: translateX(75vw);
    }
    .prevTemplate {
        transform: translateX(-75vw);
    }
    .nextTemplate {
        transform: translateX(175vw);
    }
`;

export const FullTutorial = styled.div `
    display: flex;
`;

/*----------------------------------------------------------------------------*/

export const InitialPage = styled.div `
    display: flex;
    flex-direction: column;

    width: 100vw;
    min-height: 100vh;
    align-items: center;
`;

export const LogoDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 125vw;

    position: relative;
    z-index: 1;

    padding: 15% 0 0 0;
    
    align-items: center;

    overflow: hidden;
`;

export const Logo = styled.img `
    width: 50vw;
`;

export const StartDiv = styled.div `
    display: grid;

    grid-template-rows: auto auto;
    grid-row-gap: 2vh;

    width: 90.83vw;

    margin: 0 0 10% 0;

    .skip {
        width: calc(100% - 0.55vw);
        height: calc(7vh - 0.55vw);

        background: ${global.colors.branco};
        border: solid 0.55vw ${global.colors.laranja};
        color: ${global.colors.laranja};
    }
`;

export const StartSkip = styled.button `
    width: 100%;
    height: 7vh;

    font-family: ${global.fonts.quickSand};
    font-weight: 700;
    font-size: 5.55vw;

    color: white;
    background-color: ${global.colors.laranja};

    outline: none;
    border: none;
    border-radius: 4.44vw;

    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);

    transition: transform 0.3s ease;
    :active {
        transform: translateY(0.5vh);
    }
`;

/*----------------------------------------------------------------------------*/

export const CurrentDiv = styled.div `
    display: flex;
    width: 90%;
    z-index: 1;

    padding: 0 5%;
    margin: 2% 0 0 0;

    justify-content: space-evenly;
`;

export const CurrentPage = styled.div `
    width: 20%;
    height: 8px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.24);
`;

/*----------------------------------------------------------------------------*/

export const PageTitle = styled.h1 `
    width: 82vw;
    margin: 0 9vw;

    font-size: 5.5vw;
    font-weight: 700;
    font-family: ${global.fonts.quickSand};
`;

export const PageDescription = styled.p `
    width: 82vw;
    margin: 0 9vw 6vh 9vw;

    font-size: 5.55vw;
    font-weight: 500;
    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinza};
`;

/*----------------------------------------------------------------------------*/

export const BackImg = styled.img `
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
`;

export const TemplateDiv = styled.div `
    display: flex;
    width: 100vw;
    height: 134.18vw;

    position: relative;
    z-index: 1;

    margin: 0 0 10% 0;
    
    justify-content: center;
    align-items: center;

    overflow: hidden;
`;

export const Template = styled.img `
    width: 50.5vw;

    z-index: 1;
    position: absolute;
    left: -50.5vw;

    filter: drop-shadow(0 7px 7px rgba(0, 0, 0, 0.25));

    transition: transform 0.3s ease-out;
`;

/*----------------------------------------------------------------------------*/

export const ButtonDiv = styled.div `
    display: flex;
    width: 100vw;
    justify-content: space-evenly;
`;

export const PrevNext = styled.button `
    width: 43.33vw;
    height: 7vh;

    font-size: 5vw;
    font-weight: 600;
    font-family: ${global.fonts.quickSand};

    border-radius: 4vw;
    border: solid 2.5px ${global.colors.laranja};

    color: ${global.colors.laranja};

    transition: transform 0.3s ease;
    :active {
        transform: translateY(3px);
    }
`;