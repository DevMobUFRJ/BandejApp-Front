import Cabecalho from "../../Components/Cabecalho";
import DownPop from "../../Components/PopUpIOS";

import { InstallMessageContext } from "../../Contexts/ShowInstallMessageContext";
import { useContext, useState } from "react";
import { SelecionaInfoDiv, InfoArea, InfoBalao, InfoGrid, InfoSubtitle, InfoTitle, 
        InfoUndertitle, InformDiv, InfoValor, BalaoInfo, SelecionaInfoDivBlock } from "./styleMobile";
import DropDown from "../../Components/DropDown";
import InformacoesWeb from "./web";
import InformacoesMobile from "./mobile";


export default function Informacoes() {

    const { showInstallMessage } = useContext(InstallMessageContext);

/*----------------------------------------------------------------------------*/

    const options = ['CT', 'Central', 'Letras', 'Centro', 'Praia Vermelha', 'Duque de Caxias', 'Macaé - Centro Multidisciplinar', 'Macaé - NUPEM', '2CT'];
    const values = ['ct', 'central', 'lt', 'centro', 'pv', 'dc', 'mc-cm', 'mc-nupem', '2ct'];
    const [ruSelecionado, setRU] = useState('ct');

    const horarios  = (option: string): Array<string> => {
        switch(option) {
            case 'central':
                return ['11:00h às 14:15h', '17:30h às 20:15h', '12:00h às 14:00h', '17:30h às 19:15h', '14,00'];

            case 'ct':
                return ['10:30h às 14:30h', '17:30h às 20:15h', 'Somente no Central', 'Somente no Central', '14,86'];

            case 'lt':
                return ['11:00h às 14:15h', '17:30h às 20:15h', 'Somente no Central', 'Somente no Central', '14,86'];
            
            case 'centro':
                return ['11:00h às 14:15h', '17:30h às 20:00h', 'Fechado', 'Fechado', '14,76'];

            case 'pv':
                return ['11:00h às 14:15h', '17:30h às 20:00h', 'Fechado', 'Fechado', '15,87'];

            case 'dc':
                return ['11:00h às 14:15h', 'Fechado', 'Fechado', 'Fechado', '13,54'];

            case 'mc-cm':
                return ['11:00h às 14:00h', 'Fechado', 'Fechado', 'Fechado', '?'];

            case 'mc-nupem':
                return ['11:30h às 14:00h', 'Fechado', 'Fechado', 'Fechado', '?'];
            
            case '2ct' :
                return ['11:00h às 14:15h', '17:30h às 20:15h', 'Somente no Central', 'Somente no Central', '14,86'];

            default:
            return [];
        }
    }

    return (
        (window.innerWidth/window.innerHeight) <= 1 ?
        <InformacoesMobile 
            showInstallMessage={showInstallMessage}
            options={options}
            values={values}
            ruSelecionado={ruSelecionado}
            setRU={setRU}
            horarios={horarios}
        />:
        <InformacoesWeb
            showInstallMessage={showInstallMessage}
            options={options}
            values={values}
            ruSelecionado={ruSelecionado}
            setRU={setRU}
            horarios={horarios}
        />
    );
}