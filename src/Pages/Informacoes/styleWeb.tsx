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

    width: 74.375vw;
    height: 4.69vw;

    border-radius: 24px 24px 0 0;
    padding: 1.875vw;
    margin-top: 1.875vw;

    background: ${global.colors.cinza1};
`;

export const SelecionaInfoDiv = styled.div `
    display: block;
    width: 100%;
    height: 100%;    
 `;

/*----------------------------------------------------------------------------*/

export const BaloesContainer = styled.section `
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 74.375vw;
    height: 19.375vw;                                 

    padding: 0 1.875vw;                       
    border-radius: 0 0 24px 24px;

    margin-bottom: 10vw;

    background: ${global.colors.cinza1};
`;

export const BalaoInfo = styled.section<{cor: string}> `
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1.875vw 1.25vw;
    width: 20.39vw;
    height: 13.75vw;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);                //ver no figma como é o dropshadow
    background-color: ${global.colors.branco};
    
    border-radius: 16px;
    border-left: 0.625vw solid ${props => {
        switch (props.cor) {
            case "almoco":
                return global.colors.corAlmoco;
            case "jantar":
                return global.colors.corJanta;
            case "pagamento":
                return global.colors.cinza;
        }
    }};
`;

/*----------------------------------------------------------------------------*/

export const TitleBalao = styled.section `
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const InfoIcon = styled.img `
    width: 1.875vw;
`;

export const InfoTitle = styled.h3<{cor: string}> `
    font-family: ${global.fonts.quickSand};
    font-size: 1.25vw;
    font-weight: 700;

    color: ${props => {
        switch (props.cor) {
            case "almoco":
                return global.colors.corAlmoco;
            case "jantar":
                return global.colors.corJanta;
            case "pagamento":
                return global.colors.cinza;
        }
    }};
`;

/*----------------------------------------------------------------------------*/

export const InfoBalao = styled.div `
    display: flex;
    flex-direction: column;

    padding-top: 1.25vw;
    border-top: solid 1px ${global.colors.cinzaOpaco(0.16)};                  
`;

export const InfoUndertitle = styled.p `
    padding-bottom: 0.78125vw;

    font-family: ${global.fonts.quickSand};
    font-size: 0.9375vw;
    font-weight: 500;

    color: ${global.colors.cinzaPratos};
`;

export const InfoValor = styled.h4 `    
    font-family: ${global.fonts.quickSand};
    font-size: 1.25vw;
    font-weight: 700;

    color: ${global.colors.cinzaPratos};
`;