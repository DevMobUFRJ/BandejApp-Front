import { useHistory } from "react-router-dom";

import { ItemName, ItemsDiv, LogoImg, NotifNumber, 
         SideBarDiv, SideHeader, SideIcon, SideItem } from "./styleWeb";

import { global } from "../../globalStyle";

import Logo from '../../Assets/SideBar/logo.svg';

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

export default function SideBarWeb({pendingNotification, mostrarPopup, rotaAtual, nomesTelas, rotasTelas, icones, laranjar, versao}: SideBarProps) {
    const history = useHistory();

    return (    
        <SideBarDiv id="sidebar">
            <SideHeader>
                <LogoImg src={Logo} alt="Logo do aplicativo BandejApp."/>
            </SideHeader>
{/*--------------------------------------------------------------------------*/}
            <ItemsDiv>
            {
                rotasTelas.map((rota, indice) => 
                    <SideItem key={indice} style={{ borderBottomColor:  rotaAtual(rota) ? global.colors.laranja : ''}} onClick={() => {
                        if(!rotaAtual(rota)) history.push(rota);
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
        </SideBarDiv>
    );
}