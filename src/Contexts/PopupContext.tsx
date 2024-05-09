import React, { createContext, useState } from 'react';
import PopUp from '../Components/PopUp';
import { PopSection, PopTexto, PopSubtitle, PopLink } from '../Components/PopUp/style';
import { StyledComponent } from "styled-components";

type popAtual = {
    popupAtual: string;
    mostrarPopup: Function;
    PopUp: Function;
    Components: {
        PopSection: StyledComponent<"section", any, {}, never>,
        PopTexto: StyledComponent<"p", any, {}, never>,
        PopLink: StyledComponent<"a", any, {}, never>,
        PopSubtitle: StyledComponent<"h3", any, {}, never>
    }
}

export const PopupContext = createContext<popAtual>({
    popupAtual: '',
    mostrarPopup: () => {},
    PopUp: PopUp,
    Components: {
        PopSection: PopSection,
        PopLink: PopLink,
        PopTexto: PopTexto,
        PopSubtitle: PopSubtitle
    }
});

export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [popupAtual, setPopup] = useState('');

    function mostrarPopup(popID?: string) {
        if(popID) setPopup(popID);
        else {
            const popOuter = document.getElementById('popOuter');
            const popup = document.getElementById('popup');
            
            if(popOuter && popup) {
                setTimeout(() => {
                    popOuter.style.display = 'none';
                    setPopup('')
                }, 300);

                requestAnimationFrame (() => {
                    popup.style.transform = 'scale(0, 0)';
                });
            }
            else if (popOuter) popOuter.style.display = 'none';
        }
    }

    return (
        <PopupContext.Provider value={{
            popupAtual, mostrarPopup, PopUp, Components:{PopLink, PopSection, PopSubtitle, PopTexto}
        }}>
            {children}
        </PopupContext.Provider>
    );
};