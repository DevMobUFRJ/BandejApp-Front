import { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import { InstallMessageContext } from "../../Contexts/ShowInstallMessageContext";
import { formulario } from "../../Functions/Avaliacao/enviar";
import "react-datepicker/dist/react-datepicker.css";
import { PopupContext } from "../../Contexts/PopupContext";
import AvaliacaoMobile from "./mobile";
import AvaliacaoWeb from "./web";

export default function Avaliacao() {
    const { showInstallMessage } = useContext(InstallMessageContext);
    const { mostrarPopup } = useContext(PopupContext);

    /* Funções do useForm */
    const UseForm =
    useForm<formulario>({defaultValues:{ru: 'selec', email: '', turno: '----', nota: 0, comentario: ''}});

    /* Variáveis do Dropdown */
    const opcoes = ['Selecione um Restaurante', 'CT', 'Central', 'Letras', 'Centro', 'Praia Vermelha', 'Duque de Caxias', 'Macaé'];
    const valores = ['selec', 'CT', 'Central', 'Letras', 'Centro', 'Praia Vermelha', 'Duque de Caxias', 'Macae'];

    const [dataSelecionada, setData] = useState<Date | null>();

/*----------------------------------------------------------------------------*/

    return (
        (window.innerWidth/window.innerHeight) <= 1 ?
        <AvaliacaoMobile 
            UseForm={UseForm}
            showInstallMessage={showInstallMessage}
            mostrarPopup={mostrarPopup}
            opcoes={opcoes}
            valores={valores}
            dataSelecionada={dataSelecionada}
            setData={setData}
        />:
        <AvaliacaoWeb
            UseForm={UseForm}
            showInstallMessage={showInstallMessage}
            mostrarPopup={mostrarPopup}
            opcoes={opcoes}
            valores={valores}
            dataSelecionada={dataSelecionada}
            setData={setData}
        />
    );
}