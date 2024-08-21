import { IPratoProps } from "../../Types/storage";
import Prato from "../Prato";
import * as styleMobile from './style'
import * as styleWeb from './styleWeb'

import Info from '../../Assets/Cardapio/info.svg';
import Almoco from '../../Assets/Cardapio/almoco.svg';
import Jantar from '../../Assets/Cardapio/jantar.svg';
import { global } from "../../globalStyle";
import { Formatacao } from "../../Functions/Formatacao";
import ImportStyle from "../../Functions/ImportStyle";

type horario = {
    hora: number | undefined;
    cardapio: {
        almoco: IPratoProps;
        janta: IPratoProps;
    } | undefined;
    ru: string | null;
}

function clean_str(myStr : string | undefined){
    let clean_string;
    if(myStr)
        clean_string = myStr.replace(/\([^)]*\)/g, '');
    return clean_string;
}

export default function Dia({hora, cardapio, ru}: horario) {
    const { 
        Aviso, DiaDiv, Gluten, HoraConteudo, HoraDiv, IconeHora, 
        InfoHora, InfoIcon, Linha, Menu, NomeHora, TituloHora } = ImportStyle(styleMobile, styleWeb);

    return (
        <DiaDiv>
            <Gluten>
                <InfoIcon src={Info} alt='Informação'/>
                <Aviso>As preparações podem conter glúten</Aviso>
            </Gluten>

            <Menu style={{display: hora===0 || window.innerWidth/window.innerHeight > 1 ? 'flex':'none'}}>
                {window.innerWidth/window.innerHeight > 1 && 
                    <HoraDiv style={{color: global.colors.corHorario(0), borderColor: global.colors.corHorario(0)}}>
                        <HoraConteudo>
                            <TituloHora>
                                <IconeHora src={Almoco} alt=''/>
                                <NomeHora>ALMOÇO</NomeHora>
                            </TituloHora>
                            <InfoHora>
                                11:00h às 14:15h
                            </InfoHora>
                        </HoraConteudo>
                        {/* <Linha style={{background: `${global.colors.corHorario(0)}`}}/> */}
                    </HoraDiv>
                }
                <Prato
                ru={ru}
                emoji={0}
                descricao={clean_str(cardapio?.almoco.entrada)}/>
                <Prato
                ru={ru}
                emoji={1}
                descricao={clean_str(cardapio?.almoco.pratoPrincipal)}/>
                <Prato
                ru={ru}
                emoji={2}
                descricao={clean_str(cardapio?.almoco.pratoVeg)}/>
                <Prato
                ru={ru}
                emoji={3}
                descricao={clean_str(cardapio?.almoco.guarnicao)}/>
                <Prato
                ru={ru}
                emoji={4}
                descricao={clean_str(cardapio?.almoco.acompanhamento)}/>
                <Prato
                ru={ru}
                emoji={5}
                descricao={clean_str(cardapio?.almoco.sobremesa)}/>
            </Menu>
            
            <Menu style={{display: hora===1 || window.innerWidth/window.innerHeight > 1 ? 'flex':'none'}}>
                {window.innerWidth/window.innerHeight > 1 && 
                    <HoraDiv style={{color: global.colors.corHorario(1), borderColor: global.colors.corHorario(1)}}>
                        <HoraConteudo>
                            <TituloHora>
                                <IconeHora src={Jantar} alt='' style={{width: '1.475vw', padding: '0.2vw'}}/>
                                <NomeHora>JANTAR</NomeHora>
                            </TituloHora>
                            <InfoHora>
                                17:30h às 20:00h
                            </InfoHora>
                        </HoraConteudo>
                        {/* <Linha style={{background: `${global.colors.corHorario(1)}`}}/> */}
                    </HoraDiv>
                }
                <Prato
                ru={ru}
                emoji={0}
                descricao={clean_str(cardapio?.janta.entrada)}/>
                <Prato
                ru={ru}
                emoji={1}
                descricao={clean_str(cardapio?.janta.pratoPrincipal)}/>
                <Prato
                ru={ru}
                emoji={2}
                descricao={clean_str(cardapio?.janta.pratoVeg)}/>
                <Prato
                ru={ru}
                emoji={3}
                descricao={clean_str(cardapio?.janta.guarnicao)}/>
                <Prato
                ru={ru}
                emoji={4}
                descricao={clean_str(cardapio?.janta.acompanhamento)}/>
                <Prato
                ru={ru}
                emoji={5}
                descricao={clean_str(cardapio?.janta.sobremesa)}/>
            </Menu>
        </DiaDiv>
    );
};