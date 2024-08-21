import styled from "styled-components";
import { global } from "../../globalStyle";

export const RestSelectDiv = styled.section `
    display: grid;
    grid-template-columns: 15.04vw 15.04vw;
    grid-template-rows: 9.6vw 9.6vw;
    grid-gap: 2.22vw;
`;

export const SelectOption = styled.button `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    overflow: hidden;
    border: none;
    border-radius: 2.22vw;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
    transition: transform 0.5s ease;
`;

export const SelectImg = styled.img `
    width: 100%;
    height: 61.7%;

    object-fit: cover;
`;

export const RestTitle = styled.h2 `
    font-size: 1.25vw;
    font-family: ${global.fonts.quickSand};
    font-weight: 800;

    color: #666768;
    text-align: left;

    margin: 10% 0;
`;