import { useHistory } from "react-router-dom";

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
import LogoIC from '../../Assets/SideBar/LogoIC.svg';
import LogoUFRJ from '../../Assets/SideBar/LogoUFRJ.svg';
import LogoDevmob from '../../Assets/SideBar/LogoDevmob.svg';

type SideBarProps = { 
    pendingNotification: boolean;
    mostrarPopup: Function;
    rotaAtual: Function;
    nomesTelas: string[];
    rotasTelas: string[];
    icones: string[];
    laranjar: string;
    versao: string;
}

export default function SideBarMobile({pendingNotification, mostrarPopup, rotaAtual, nomesTelas, rotasTelas, icones, laranjar, versao}: SideBarProps) {
    const history = useHistory();

    return (    
        <SideBarDiv id="sidebar">
            <SideHeader>
                <LogoImg src={Logo} alt="Logo do aplicativo BandejApp."/>
                <Versao>Versão {versao} · <MostrarCreditos onClick={() => mostrarPopup('creditos')}>
                        Ver créditos
                    </MostrarCreditos>
                </Versao>
            </SideHeader>

            <PopUp popID='creditos' titulo="Créditos"
                opcoes={['Fechar']} tiposOpcoes={[0]}
                funcoesOpcoes={[mostrarPopup]}
                componente={<Creditos/>}
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
                alt="Logo da Universidade Federal do Rio de Janeiro."/>
                <Linha/>
                <img src={LogoIC} style={{width: '35%'}}
                alt="Logo do Instituto de Computação da UFRJ."/>
            </InstitutoDiv>

            <FecharDiv onClick={fecharSideBar} >
                <CloseSide id="closeSide" src={Close} alt='Ícone para fechar menu lateral'/>
                <TextoFechar>Fechar</TextoFechar>
            </FecharDiv>
        </SideBarDiv>
    );
}