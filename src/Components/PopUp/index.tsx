import ReactDOM from "react-dom";
import { useContext, useEffect } from "react";

import * as styleMobile from "./style";
import * as styleWeb from "./styleWeb";

import { PopupContext } from "../../Contexts/PopupContext";
import ImportStyle from "../../Functions/ImportStyle";

type PopInfo = {
    popID: string;
    titulo: string;
    opcoes: Array<string>;
    tiposOpcoes: Array<number>;
    funcoesOpcoes: Array<Function>;
    componente: JSX.Element;
}

export default function PopUp(
    {popID, titulo, opcoes, tiposOpcoes, funcoesOpcoes, componente}: PopInfo
) {
    const popOuter = document.getElementById('popOuter');
    const { popupAtual } = useContext(PopupContext);
    const { PopButton, PopButtonDiv, PopDiv, PopTitulo } = ImportStyle(styleMobile, styleWeb);

    useEffect(() => {
        const popOuter = document.getElementById('popOuter');
        const popup = document.getElementById('popup');

        if(popOuter && popup && popupAtual) {
            popOuter.style.display = 'flex';
            
            requestAnimationFrame (() => {
                popup.style.transform = 'scale(1, 1)';
            });
        }
    }, [popupAtual]);

    if(popID !== popupAtual) return null;

    if(popOuter) return (
        ReactDOM.createPortal(
                <PopDiv id="popup">
                    <PopTitulo>{titulo}</PopTitulo>
                    <div>
                        {
                            componente
                        }
                    </div>
                    <PopButtonDiv>
                        { opcoes?.map((opcao, index) =>
                            <PopButton key={index}
                                className={tiposOpcoes[index] === 1? 'segundoTipo':''}
                                onClick={() => funcoesOpcoes[index]()}
                            >
                                {opcao}
                            </PopButton>
                        )}
                    </PopButtonDiv>
                </PopDiv>
        , popOuter)
    );
    else return null;
}