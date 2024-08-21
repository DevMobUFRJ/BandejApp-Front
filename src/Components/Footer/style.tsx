import styled from "styled-components";
import { global } from "../../globalStyle";

export const FooterDiv = styled.div `
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background-color: ${global.colors.preto};

  font-size: 1.25vw;
  font-weight: 500;

  color: ${global.colors.branco};

  padding: 2vw 12vw;

  margin-top: auto;
`;

export const CreditosDiv = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 32px;
`;

export const LogoBandejApp = styled.img `
  width: 19vw;
  margin-right: -3.5vw;
`;

export const Versao = styled.div `
  font-family: ${global.fonts.quickSand};
`;

export const MostrarCreditos = styled.u `
  font-family: ${global.fonts.quickSand};
  cursor: pointer;
`;

export const InstitutoDiv = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
`;