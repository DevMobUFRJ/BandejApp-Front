import { useContext, useEffect } from "react";
import { BlurDiv, PopOuterDiv } from "./style";
import { PopupContext } from "../../Contexts/PopupContext";

import DownPop from "../DownPop";
import { useLocation } from "react-router-dom";

export default function GlobalComponents() {

    const { mostrarPopup } = useContext(PopupContext);
    const { pathname } = useLocation();

    mostrarPopup();
    useEffect(() => {
        document.getElementById('BlurDiv')?.setAttribute('style', 'display: none;');
    }, [pathname]);

    return (
        <div>
            <BlurDiv id="BlurDiv"/>

            <PopOuterDiv id="popOuter" onClick={() => mostrarPopup()}/>

            <DownPop/>
        </div>
    );
}