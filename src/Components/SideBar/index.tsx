import { useHistory } from "react-router-dom";
import { NotificationContext } from "../../Contexts/PendingNotificationContext";
import { useContext, useEffect, useState } from "react";

import { CloseSide, InstitutoDiv, ItemName, 
    ItemsDiv, Linha, LogoImg, NotifNumber, 
    SideBarDiv, SideHeader, SideIcon, SideItem,
    Versao, FecharDiv, TextoFechar, MostrarCreditos } from "./style";

import { global } from "../../globalStyle";
import { fecharSideBar } from "../../Functions/SideBar/abrirEfechar";
import PopUp from "../PopUp";
import Creditos from "../PopUp/Creditos";

import Logo from '../../Assets/SideBar/logo.svg';
import Close from '../../Assets/Close.svg';
import Home from '../../Assets/SideBar/cardapio.svg';
import Aval from '../../Assets/SideBar/avaliacao.svg';
import Comun from '../../Assets/SideBar/comunicados.svg';
import Info from '../../Assets/SideBar/sobrenos.svg';
import Fale from '../../Assets/SideBar/faleconosco.svg';
import LogoIC from '../../Assets/SideBar/LogoIC.svg';
import LogoUFRJ from '../../Assets/SideBar/LogoUFRJ.svg';
import LogoDevmob from '../../Assets/SideBar/LogoDevmob.svg';
import { PopupContext } from "../../Contexts/PopupContext";
import SideBarMobile from "./mobile";
import SideBarWeb from "./web";

export default function SideBar() {
    const { pendingNotification } = useContext(NotificationContext);
    const { mostrarPopup } = useContext(PopupContext);

    const history = useHistory();

    const rotaAtual = (onde: string):boolean => {
        return (history.location.pathname === onde)
    }

    const nomesTelas = ['Cardapio', 'Comunicados', 'Avaliação', 'Informações', 'Fale conosco'];
    const rotasTelas = ['/Cardapio', '/Notificacao', '/Avaliacao', '/Informacoes', '/FaleConosco'];
    const icones = [Home, Comun, Aval, Info, Fale];
    const laranjar = 'invert(48%) sepia(90%) saturate(1570%)' +
                    'hue-rotate(352deg) brightness(98%) contrast(102%)';
    const versao = '1.0.4';

    return (
        (window.innerWidth/window.innerHeight) <= 1 ?
            <SideBarMobile 
                pendingNotification={pendingNotification} mostrarPopup={mostrarPopup} rotaAtual={rotaAtual} 
                nomesTelas={nomesTelas} rotasTelas={rotasTelas} icones={icones} laranjar={laranjar} versao={versao}
            />:
            <SideBarWeb 
                pendingNotification={pendingNotification} mostrarPopup={mostrarPopup} rotaAtual={rotaAtual} 
                nomesTelas={nomesTelas} rotasTelas={rotasTelas} icones={icones} laranjar={laranjar} versao={versao}
            />
    );
}