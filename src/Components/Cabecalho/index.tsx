import { NotificationContext } from "../../Contexts/PendingNotificationContext";
import { useContext } from "react";
import { abrirSideBar } from "../../Functions/SideBar/abrirEfechar";

import { PlaceHolderCabecalho, CabecaDiv, PageTitle, DivAjustes, IconeAjustes,
    NotifDiv, NotifInside, SideButton, NotifIcon } from "./style";

import SideBar from "../SideBar";
import Menu from '../../Assets/SideBar/menu.svg';
import Ajustes from '../../Assets/Cardapio/Ajustes.svg';
import Close from '../../Assets/Close.svg';

type Nome = { 
    nome: string;
    setOpcoes?: Function;
}

const boxshadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
let aberto = true;

const abreAjustes = (setOpcoes?: Function) => {
    const acoes = document.getElementById('acoes');
    const conteudo = document.getElementById('conteudo');
    if (!acoes || !conteudo || !setOpcoes)
        return;

    requestAnimationFrame(() => {
        acoes.style.display = 'flex'
        conteudo.style.transform = 'translate(0, -29vh)'
        requestAnimationFrame(() => {
            acoes.style.opacity = '1'
            conteudo.style.transition = 'transform 300ms ease-in-out'
            conteudo.style.transform = 'translate(0)'
        })
    })
    aberto = true
    setOpcoes(aberto)
}

const fechaAjustes = (setOpcoes?: Function) => {
    const acoes = document.getElementById('acoes');
    const conteudo = document.getElementById('conteudo');
    if (!acoes || !conteudo || !setOpcoes)
        return;

    window.scrollTo(0, 0)
    acoes.style.opacity = '0'
    conteudo.style.transition = 'transform 300ms ease-in-out'
    conteudo.style.transform = 'translate(0, -29vh)'
    setTimeout(() => {
        requestAnimationFrame(() => {
            acoes.style.display = 'none'
            conteudo.style.transition = 'none'
            conteudo.style.transform = 'translate(0)'
        })
        aberto = false
        setOpcoes(aberto)
    }, 300);
}

export default function Cabecalho({nome, setOpcoes}: Nome) {
    const { pendingNotification } = useContext(NotificationContext);

    return (
        <PlaceHolderCabecalho>
            <SideBar/>
    
            <CabecaDiv style={{boxShadow:`${nome === 'Cardápio' ? '' : boxshadow}`}}>
                <NotifDiv onClick={abrirSideBar}>
                    <SideButton src={Menu} alt='Ícone para abrir o menu lateral'/>

                    <NotifIcon style={{display: `${pendingNotification? '':'none'}`}}>
                        <NotifInside/>
                    </NotifIcon>
                </NotifDiv>

                <PageTitle>{nome}</PageTitle>

                <DivAjustes>
                    <IconeAjustes style={{display: `${nome === 'Cardápio' ? '' : 'none'}`}}
                    src={aberto ? Close : Ajustes} 
                    alt={aberto ? 'Ícone para fechar ajustes' : 'Ícone para abrir ajustes'} 
                    onClick={() => aberto ? fechaAjustes(setOpcoes) : abreAjustes(setOpcoes)}/>
                </DivAjustes>
            </CabecaDiv>
        </PlaceHolderCabecalho>
    );
}