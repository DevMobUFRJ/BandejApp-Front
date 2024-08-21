/*------------------------Import dos Componentes------------------------*/
import * as styleMobile from "./style";
import * as styleWeb from "./styleWeb";

/*------------------------Import das Imagens------------------------*/
import Central from '../../Assets/Restaurante/RUcentral.jpg';
import Macae from '../../Assets/Restaurante/macae.png';
import Pv from '../../Assets/Restaurante/ifcspv.png';
import Duque from '../../Assets/Restaurante/duque.png';
import { useState } from "react";
import { global } from "../../globalStyle";
import ImportStyle from "../../Functions/ImportStyle";

type propriedades = {
    childToParent: Function
}

export default function RestSelect({childToParent}: propriedades) {

    const [ruSelecionado, setRu] = useState<string>();
     
    const ruHandler = (value: string) => {
        if((ruSelecionado === undefined) && value) {
            const confirm = document.getElementById('confirm');

            if(confirm) confirm.style.background = `${global.colors.laranja}`;
            selecionarRu(value);
        }
        else {
            selecionarRu(value);
        }
    }

    const selecionarRu = (value: string) => {
        if(value === ruSelecionado) return;

        const restaurantes = document.querySelectorAll('#ruOption');

        restaurantes.forEach((restaurante) => {
            const textoSelecionado = restaurante.querySelector('h2');

            if(restaurante.getAttribute('value') === value) {
                if(restaurante.classList.contains('restNotSelecionado')) {
                    restaurante.classList.replace('restNotSelecionado', 'restSelecionado');
                    textoSelecionado?.classList.add('textoSelecionado');
                }
                else {
                    restaurante.classList.add('restSelecionado');
                    textoSelecionado?.classList.add('textoSelecionado');
                }
            }
            else {
                if(restaurante.classList.contains('restSelecionado')) {
                    restaurante.classList.replace('restSelecionado', 'restNotSelecionado');
                    textoSelecionado?.classList.remove('textoSelecionado');
                }
                else {
                    restaurante.classList.add('restNotSelecionado');
                    textoSelecionado?.classList.remove('textoSelecionado');
                }
            }
        })

        childToParent(value);
        setRu(value);
    }

    const { RestSelectDiv, RestTitle, SelectImg, SelectOption } = ImportStyle(styleMobile, styleWeb);

    return (
        <RestSelectDiv>
            <SelectOption id="ruOption" value="ct"
            onClick={(e: any) => {ruHandler(e.currentTarget.value)}}>
                <SelectImg src={Central} alt='Foto do RU central'/>
                <RestTitle>Central, CT e Letras</RestTitle>
            </SelectOption>

            <SelectOption id="ruOption" value="pv"
            onClick={(e: any) => {ruHandler(e.currentTarget.value)}}>
                <SelectImg src={Pv} alt='Foto do RU da Praia Vermelha'/>
                <RestTitle>IFCS e Praia Vermelha</RestTitle>
            </SelectOption>

            <SelectOption id="ruOption" value="dc"
            onClick={(e: any) => {ruHandler(e.currentTarget.value)}}>
                <SelectImg src={Duque} alt='Foto do RU de Duque de Caxias'/>
                <RestTitle>Duque de Caxias</RestTitle>
            </SelectOption>

            <SelectOption id="ruOption" value="mc"
            onClick={(e: any) => {ruHandler(e.currentTarget.value)}}>
                <SelectImg src={Macae} alt='Foto do RU de Macaé'/>
                <RestTitle>Macaé</RestTitle>
            </SelectOption>
        </RestSelectDiv>
    );
}