import { useHistory } from "react-router-dom";
import { NotificationContext } from "../../Contexts/PendingNotificationContext";
import { useContext } from "react";

import { CloseSide, InstitutoDiv, ItemName, 
    ItemsDiv, Linha, LogoImg, NotifNumber, 
    SideBarDiv, SideHeader, SideIcon, SideItem,
    Versao, FecharDiv, TextoFechar, MostrarCreditos } from "./style";

import { global } from "../../globalStyle";
import { fecharSideBar } from "../../Functions/SideBar/abrirEfechar";
import Creditos from "../../Functions/PopUps/Creditos";

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

export default function SideBar() {
    const { pendingNotification } = useContext(NotificationContext);
    const { mostrarPopup, PopUp } = useContext(PopupContext);

    const history = useHistory();

    const rotaAtual = (onde: string):boolean => {
        return (history.location.pathname === onde);
    }

    const nomesTelas = ['Cardapio', 'Comunicados', 'Avaliação', 'Informações', 'Fale conosco'];
    const rotasTelas = ['/Cardapio', '/Notificacao', '/Avaliacao', '/Informacoes', '/FaleConosco'];
    const icones = [Home, Comun, Aval, Info, Fale];
    const laranjar = 'invert(48%) sepia(90%) saturate(1570%)' +
                    'hue-rotate(352deg) brightness(98%) contrast(102%)';

    return (    
        <SideBarDiv id="sidebar">
            <SideHeader>
                <LogoImg src={Logo} alt="Logo do aplicativo BandejApp."/>
                <Versao>Versão 1.0.4 · <MostrarCreditos onClick={() => mostrarPopup('creditos')}>
                        Ver créditos
                    </MostrarCreditos>
                </Versao>
            </SideHeader>

            <PopUp popID='creditos' titulo='Créditos'
                opcoes={['Fechar']} tiposOpcoes={[0]}
                funcoesOpcoes={[mostrarPopup]} componente={<Creditos/>}
            />

{/*--------------------------------------------------------------------------*/}

            <ItemsDiv>
            {
                rotasTelas.map((rota, indice) => 
                    <SideItem key={indice} onClick={() => {
                        if(!rotaAtual(rota)) history.push(rota);
                        fecharSideBar();
                    }}>

                        <SideIcon src={icones[indice]} alt={nomesTelas[indice]}
                            style={{filter: rotaAtual(rota) ? laranjar : ''}}
                        />

                        <ItemName style={{color: rotaAtual(rota) ? `${global.colors.laranja}`: ' '}}>
                            {nomesTelas[indice]}
                        </ItemName>

                        {(pendingNotification && nomesTelas[indice] === "Comunicados") ?
                            <NotifNumber/>
                            :
                            null
                        }
                    </SideItem>
                )
            }
            </ItemsDiv>

            <InstitutoDiv>
                <img src={LogoUFRJ} style={{width: '35%'}}
                alt="Logo do Institudo de Computação da UFRJ."/>
                <Linha/>
                <img src={LogoDevmob} style={{width: '22%', padding: '0 6.5% 0 6.5%'}}
                alt="Logo da Universidade Federal do Rio de Janeiro."/>
            </InstitutoDiv>

            <FecharDiv onClick={fecharSideBar} >
                <CloseSide id="closeSide" src={Close} alt='Ícone para fechar menu lateral'/>
                <TextoFechar>Fechar</TextoFechar>
            </FecharDiv>
        </SideBarDiv>
    );
}