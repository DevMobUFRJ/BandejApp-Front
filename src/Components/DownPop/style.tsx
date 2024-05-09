import styled from "styled-components";
import { global } from "../../globalStyle";

export const PopupDiv = styled.div `
    display: none;
    width: 90%;

    position: fixed;
    bottom: 10px;
    left: 5%;
    z-index: 2;

    border-radius: 3.5vw;
    background: ${global.colors.laranja};
    font-family: ${global.fonts.nunito};

    &:after {
        content: "";
        position: absolute;
        top: 100%; /* ajuste para posicionar a seta na borda inferior */
        left: 50%;
        margin-left: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: ${global.colors.laranja} transparent transparent transparent; /* laranja */
    }
`;

export const PopText = styled.p `
    margin: 1vh 0 2vh 0;
    font-family: ${global.fonts.nunito};
    font-size: 3.5vw;
    font-weight: 500;
    color: white;
    padding: 0px 10px 0px 20px;
`;

export const CloseImg = styled.img `
    width: 8.88vw;
    margin-right: 20px;
`;