import { CloseImg, PopText, PopupDiv } from "./style";
import Download from '../../Assets/Cardapio/download.svg';
import { useEffect, useState } from "react";
import Close from '../../Assets/Popup/close.svg';

export default function DownPop() {
    const [visibility, setVisibility] = useState(false);

    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

    useEffect(() => {
        if (isIos() && !isInStandaloneMode()) setVisibility(true);
        else setVisibility(false);
    }, []);

    return (
        <PopupDiv style={{ display: (visibility)? 'flex':'none'}}>
            <PopText>
                Instale esse aplicativo no seu Iphone: aperte
                <img width="15" height="15" src={Download} alt="Ícone de download" />
                e depois Adicionar à tela inicial.
            </PopText>

            <CloseImg id="closeButton" src={Close} alt="Ícone para fechar"
                onClick={() => setVisibility(false)}
            />
        </PopupDiv>
    );
}