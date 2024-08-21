import { useContext } from "react";
import { CreditosDiv, FooterDiv, InstitutoDiv, LogoBandejApp, MostrarCreditos, Versao } from "./style";
import { PopupContext } from "../../Contexts/PopupContext";

import Logo from '../../Assets/SideBar/logo.svg';
import LogoUFRJ from '../../Assets/SideBar/LogoUFRJ.svg';
import LogoIC from '../../Assets/SideBar/LogoIC.svg';
import { global } from "../../globalStyle";
import PopUp from "../PopUp";
import Creditos from "../PopUp/Creditos";

export default function Footer() {
  const { mostrarPopup } = useContext(PopupContext);
  const branco = 'brightness(0) invert(1)';

  return window.innerWidth/window.innerHeight > 1 ? (
    <FooterDiv>
      <PopUp popID='creditos' titulo="Créditos"
          opcoes={['Fechar']} tiposOpcoes={[0]}
          funcoesOpcoes={[mostrarPopup]}
          componente={<Creditos/>}
      />
      <CreditosDiv>
        <LogoBandejApp src={Logo} alt="Logo do aplicativo BandejApp." style={{filter: branco}}/>
        <Versao>Versão 1.0.3</Versao>
        <MostrarCreditos onClick={() => mostrarPopup('creditos')}>Ver créditos</MostrarCreditos>
      </CreditosDiv>
      <InstitutoDiv>
        <img src={LogoIC} style={{width: '6.5vw', marginRight: '2vw', filter: branco}} alt="Logo da Universidade Federal do Rio de Janeiro."/>
        <img src={LogoUFRJ} style={{width: '6.5vw', borderLeft: `1px solid ${global.colors.cinzaClaro}`, paddingLeft: '2vw', filter: branco}} alt="Logo do Institudo de Computação da UFRJ."/>
      </InstitutoDiv>
    </FooterDiv>
  ) : <></>;
}