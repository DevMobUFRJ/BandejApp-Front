import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ICardapioProps, ISemana } from "../../Types/storage";
import { ToastContainer, toast } from 'react-toastify';

import { CardapioDiv, Sombra, ActionsDiv, DropHeader, AvisoAtt, Conteudo} from "./style";

import NavBar from "../../Components/Navbar";
import Horario from "../../Components/Horario";
import DropDown from "../../Components/DropDown";
import Dia from "../../Components/Dia";
import Load from "../../Components/Load";
import FontSize from "../../Functions/Cardapio/FontSize";
import Cabecalho from "../../Components/Cabecalho";

import "react-toastify/dist/ReactToastify.css";

import ReactGA from "react-ga4";

let consultando = false;

const estadosRestaurante = ['ct', 'pv', 'dc', 'mc'];
const opcoesRestaurante = ['Central, CT e Letras', 'IFCS e Praia Vermelha',
                        'Duque de Caxias', 'Macaé'];

export default function Cardapio() {
    const history = useHistory();

    const [cardapio, setCardapio] = useState<ICardapioProps>();

    const [dia, tggDia] = useState(0);
    const [hora, tggHora] = useState();
    const [ruAtual, setRuAtual] = useState<string>();

    const [opcoes, setOpcoes] = useState(true);
    const [loading, setLoading] = useState(true);
    
    function selecionaRU(restaurante : string){
        localStorage.setItem("bandejapp:ruDefault", restaurante);
        setRuAtual(restaurante);
    }
    
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    useEffect(() => {
        if (!localStorage.getItem("bandejapp:ruDefault")) history.push('/Restaurante');
        
        ReactGA.send({hitType: "pageview", page: "/Cardapio", title: 'Cardapio'});
        let tentativas = 0;
        async function consultarCardapio():Promise<boolean> {
            tentativas++;
            try {
                const data = await fetch(`${process.env.REACT_APP_CARDAPIO_API_URL}`) 
                let post = await data.json();
                if(JSON.stringify(post) === "{}"){
                    throw new Error("ObjetoNulo");
                }
                setCardapio(post);
                localStorage.setItem("bandejapp:ultimoCardapio", JSON.stringify(post));    
                setLoading(false);
                consultando = false;
                return true;
            }
            catch {
                await sleep(2500);
                consultando = false;
                if(tentativas === 5 && localStorage.getItem("bandejapp:ultimoCardapio")){
                    throw new Error();
                }
                return consultarCardapio();
            }
        }
        
        let ultimoCardapio = localStorage.getItem("bandejapp:ultimoCardapio");
        setRuAtual(localStorage.getItem("bandejapp:ruDefault") + '');
        if(ultimoCardapio){ 
            setCardapio(JSON.parse(ultimoCardapio));
            setLoading(false);
        }

        if (!consultando) {
            consultando = true
            toast.promise(
                consultarCardapio(),
                {
                    pending: 'Atualizando cardápio...',
                    success: 'Cardápio atualizado',
                    error: 'Não foi possível atualizar o cardápio'
                },
                {position: toast.POSITION.BOTTOM_CENTER}
            )
        }        
    }, [history]);

    FontSize();

    function makePath(indexDia : Number) {
        let ru = localStorage.getItem("bandejapp:ruDefault");
        let temp;

        switch (ru) {
        case 'ct':
            temp = cardapio?.ct;
            break;
        case 'pv':
            temp = cardapio?.pv;
            break;
        case 'dc':
            temp = cardapio?.dc;
            break;
        case 'mc':
            temp = cardapio?.mc;
            break;
        }

        switch (indexDia) {
        case 1:
            return temp?.segunda;
        case 2:
            return temp?.terca;
        case 3:
            return temp?.quarta;
        case 4:
            return temp?.quinta;
        case 5:
            return temp?.sexta;
        case 6:
            return temp?.sabado;
        case 7:
            return temp?.domingo;
        }
    }

    function getAtt (restaurante: string) {
        switch(restaurante)
        {
        case 'ct':
            return cardapio?.ct.ultimaAtt;
        case 'pv':
            return cardapio?.pv.ultimaAtt;
        case 'dc':
            return cardapio?.dc.ultimaAtt;
        case 'mc':
            return cardapio?.mc.ultimaAtt;
        }
    }

    function passaSemana (semana: ISemana): string[] {
        const lista = [''];
        lista.pop();

        lista.push(semana?.segunda);
        lista.push(semana?.terca);
        lista.push(semana?.quarta);
        lista.push(semana?.quinta);
        lista.push(semana?.sexta);
        lista.push(semana?.sabado);
        lista.push(semana?.domingo);

        return lista;
    }


/* - - - - - Fim das funções - - - - - */

    return(
        <CardapioDiv id="cardapio">
            <ToastContainer autoClose={2000}/>
            <Cabecalho nome="Cardápio" setOpcoes={setOpcoes}/>
            {
                (loading) ?
                    <Load />
            : 
            <>
                <Sombra style={{display: opcoes ? 'none' : ''}}/>

                <ActionsDiv id='acoes'>
                    <DropHeader>
                        <DropDown 
                        opcaoInicial={localStorage.getItem("bandejapp:ruDefault") || ''}
                        valoresState={estadosRestaurante}
                        valoresOpcoes={opcoesRestaurante}
                        tela='cardapio'
                        alterarState={selecionaRU}/>
                    </DropHeader>

                    <NavBar
                    tggDia={tggDia}
                    semana={passaSemana(cardapio?.semana as ISemana)}/>
                    <Horario
                    hora={tggHora}/>
                </ActionsDiv>
                <Conteudo id='conteudo'>
                    <Dia
                    hora={hora}
                    cardapio={makePath(dia)}
                    ru={localStorage.getItem("bandejapp:ruDefault")}
                    />
                    <AvisoAtt>Atualizado em: {`${getAtt(ruAtual + '')}`}</AvisoAtt>
                </Conteudo>
            </>
            }
        </CardapioDiv>
    );
}
