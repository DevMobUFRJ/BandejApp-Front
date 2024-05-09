import { Descricao, Emoji, Linha, PratoDiv, Conteudo,
        Infos, Tipo } from "./style";
import { Formatacao } from "../../Functions/Formatacao";

import Acompanhamentos from '../../Assets/Cardapio/Icones/Acompanhamentos.svg';
import Entrada from '../../Assets/Cardapio/Icones/Entrada.svg';
import Guarnicao from '../../Assets/Cardapio/Icones/Guarnicao.svg';
import PratoPrincipal from '../../Assets/Cardapio/Icones/PratoPrincipal.svg';
import PratoVegano from '../../Assets/Cardapio/Icones/PratoVegano.svg';
import Sobremesa from '../../Assets/Cardapio/Icones/Sobremesa.svg';

type info = {
    emoji: number;
    descricao?: string;
    ru: string | null;
}

const icone = [Entrada, PratoPrincipal, PratoVegano, 
                Guarnicao, Acompanhamentos, Sobremesa];

const iconeMc = [Entrada, Guarnicao, PratoPrincipal, PratoVegano, Acompanhamentos, Sobremesa]
                
const tipoRefeicao = ['Entrada', 'Prato principal', 'Prato vegano',
                    'Guarnição', 'Acompanhamentos', 'Sobremesa'];

const tipoRefeicaoMc = ['Guarnição 1', 'Guarnição 2', 'Prato principal', 'Prato vegano', 'Acompanhamentos', 'Sobremesa'];

export default function Prato({emoji, descricao, ru}: info) {
    return(
        <Conteudo style={{borderRadius: `${Formatacao.bordaRedonda(emoji, 6)}`}}>
            <PratoDiv>
                <Emoji src={(ru!=='mc')?`${icone[emoji]}`:`${iconeMc[emoji]}`} alt={(ru!=='mc')?`Ícone de ${tipoRefeicao[emoji]}`:`Ícone de ${tipoRefeicaoMc[emoji]}`}/>
                <Infos>
                    <Tipo>{(ru!=='mc')?`${tipoRefeicao[emoji]}`:`${tipoRefeicaoMc[emoji]}`}</Tipo>
                    <Descricao id="prato">
                        {descricao}
                    </Descricao>
                </Infos>
            </PratoDiv>    
            <Linha />
        </Conteudo>
    );
};