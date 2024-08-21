import { NotificationContext } from "../../Contexts/PendingNotificationContext";
import { useContext, useEffect, useState } from "react";
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

const useScrollDirection = (nome: String) => {
    const stickyLimit = nome === 'Cardápio' ? 400: 20;
    const stickySensitivity = 5;
    const [scrollDirection, setScrollDirection] = useState("");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (
                    (scrollY - lastScrollY > stickySensitivity && scrollY > stickyLimit) || 
                    (scrollY - lastScrollY < -stickySensitivity && scrollY < stickyLimit)
                )) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);

    return scrollDirection;
};

export default function Cabecalho({nome, setOpcoes}: Nome) {
    const { pendingNotification } = useContext(NotificationContext);
    const scrollDirection = useScrollDirection(nome);

    return (
        <PlaceHolderCabecalho 
            style={window.innerWidth/window.innerHeight <= 1 ? 
                {height: 'calc(8vh + 2.25vh)'} : 
                {height: 'unset', width: '100%', position: 'sticky', zIndex: 99, transition: '500ms', left: 0, top: scrollDirection === "down" ? '-12vw' : 0}}
        >
            <SideBar/>
    
            {(window.innerWidth/window.innerHeight) <= 1 &&
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
            </CabecaDiv>}
        </PlaceHolderCabecalho>
    );
}