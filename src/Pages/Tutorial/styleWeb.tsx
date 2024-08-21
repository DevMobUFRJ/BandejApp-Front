import styled from "styled-components";
import { global } from "../../globalStyle";

export const TutDiv = styled.div `
    display: flex;
    min-height: 100vh;

    .currentPage { background: white; }
    .nextButton { 
        background: ${global.colors.laranja};
        color: white;
    }

    .currentTemplate {
        transform: translate(-50%, -50%);
    }
    .prevTemplate {
        transform: translate(-200%, -50%);
    }
    .nextTemplate {
        transform: translate(200%, -50%);
    }

    @media screen and (max-height: 1100px) {
        .prevTemplate {
            transform: translate(-300%, -50%);
        }
        .nextTemplate {
            transform: translate(300%, -50%);
        }
    }

    @media screen and (max-height: 550px) {
        .prevTemplate {
            transform: translate(-400%, -50%);
        }
        .nextTemplate {
            transform: translate(400%, -50%);
        }
    }
`;

/*----------------------------------------------------------------------------*/

export const PageDiv = styled.div `
    display: flex;
    flex-direction: column;

    overflow: hidden;

    width: 100vw;

    background-color: ${global.colors.branco};                               //REMOVER DPSSSSSSSSSSSSSSSSSSSSSSSS
`;

export const LogoDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 65.972vh;
    
    align-items: center;
    justify-content: center;                        

    background-color: ${global.colors.laranja};
`;

export const PageContent = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 34.028vh;

    justify-content: center;
    align-items: center;
    
    background-color: ${global.colors.branco};
`;

export const Logo = styled.img `
    height: 45vh;
`;

export const StartDiv = styled.div `
    display: flex;
    flex-direction: row;

    gap: 1.875vw;

    .skip {

        background: ${global.colors.branco};
        border: solid 2px ${global.colors.laranja};
        color: ${global.colors.laranja};
    }
`;

export const StartSkip = styled.button `
    width: 24.75vw;
    height: 6.67vh;

    font-family: ${global.fonts.quickSand};
    font-weight: 700;
    font-size: 2.22vh;

    color: white;
    background-color: ${global.colors.laranja};

    outline: none;
    border: none;
    border-radius: 12px;

    transition: transform 0.3s ease;
    :active {
        transform: translateY(0.5vh);
    }
`;

/*----------------------------------------------------------------------------*/

export const CurrentDiv = styled.div `
    display: flex;

    padding: 3.06vh 10.9375vw 0;

    justify-content: space-between;
`;

export const CurrentPage = styled.div `
    width: 18.125vw;
    height: 1.11vh;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.24);
`;

/*----------------------------------------------------------------------------*/

export const PageTitle = styled.h1 `
    font-size: 3.33vh;
    font-weight: 700;
    font-family: ${global.fonts.quickSand};
`;

export const PageDescription = styled.p `
    padding-bottom: 6.67vh;
    width: 35vw;                                            

    font-size: 3.33vh;
    font-weight: 500;
    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinza};
`;

/*----------------------------------------------------------------------------*/

export const BackDiv = styled.div `
    width: 100vw;
    height: 65.972vh;
    background-color: ${global.colors.laranja};
`;

export const TemplateDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: calc(100% - 4.17vh);

    position: relative;                        
`;

export const Template = styled.img `
    height: 54.81vh;

    z-index: 99;
    position: absolute;

    left: 50%;
    top: 52%;

    filter: drop-shadow(0px 7px 21px 7px rgba(0, 0, 0, 0.25));

    transition: transform 0.3s ease-out;
`;

/*----------------------------------------------------------------------------*/

export const ButtonDiv = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const PrevNext = styled.button `
    width: 24.75vw;
    height: 6.67vh;

    font-size: 2.22vh;
    font-weight: 700;
    font-family: ${global.fonts.quickSand};

    border-radius: 12px;
    border: solid 2px ${global.colors.laranja};

    color: ${global.colors.laranja};

    transition: transform 0.3s ease;
    :active {
        transform: translateY(3px);
    }
`;