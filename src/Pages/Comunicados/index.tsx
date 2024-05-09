import { useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Formatacao } from "../../Functions/Formatacao";
import { NotificationContext } from "../../Contexts/PendingNotificationContext";

import { ComunicadoDiv, Card, Container, CardMensagem, CardData, TextMensagem,
TextData, MensagensNaoLidas, DataRelativa, BalaoSemMensagens, IconeSemMensagens,
TextoSemMensagens, SideIcon, CardTop } from "./style";

import 'react-toastify/dist/ReactToastify.css';
import Load from "../../Components/Load";
import Cabecalho from "../../Components/Cabecalho";
import SemMsg from '../../Assets/Comunicados/SemMsg.svg'
    
type aviso = {
    comunicado: String,
    data: String,
    pending: boolean,
};

let consultando = false;

export default function Comunicados() {

    const [comentarios, setComentarios] = useState<aviso[]>([]);
    const [loading, setLoading] = useState(true);
    const { pendingNotification, setPendingNotification } = useContext(NotificationContext);
    const [quantidadeNaoLidas, setQuantidadeNaoLidas] = useState(0)

    const verificaPrecedenciaData = (data: String) => {
        let dataArmazenadaString = localStorage.getItem("bandejapp:ultimoAviso");
        let dataArmazenadaDate;
        if(dataArmazenadaString){
            let dataArmazenadaQuebrada=dataArmazenadaString.split(" ")[0].substring(1, 11).split("/")
            let horaArmazenada=dataArmazenadaString.split(" ")[1].split(":")
            dataArmazenadaDate=new Date(parseInt(dataArmazenadaQuebrada[2]), parseInt(dataArmazenadaQuebrada[1]) - 1, parseInt(dataArmazenadaQuebrada[0]), parseInt(horaArmazenada[0]), parseInt(horaArmazenada[1]))
        }

        let dataComentarioQuebrada=data.split(" ")[0].substring(0, 10).split("/")
        let horaComentario=data.split(" ")[1].split(":")
        let dataComentarioDate=new Date(parseInt(dataComentarioQuebrada[2]), parseInt(dataComentarioQuebrada[1]) - 1, parseInt(dataComentarioQuebrada[0]), parseInt(horaComentario[0]), parseInt(horaComentario[1]))

        if(dataArmazenadaDate && dataComentarioDate <= dataArmazenadaDate)
            return false
        else
            return true
    };

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    useEffect(() => {
        async function consultarAvisos():Promise<boolean> {
            try {
                const data = await fetch(`${process.env.REACT_APP_COMUNICADOS_API_URL}`);
                const post = await data.json();
                let qtd = 0;
                for (let aviso of post)
                {
                    aviso.pending = verificaPrecedenciaData(aviso.data)
                    if(aviso.pending){
                        qtd++;
                    }
                }
                setQuantidadeNaoLidas(qtd);
                setComentarios(post);
                setLoading(false);
                consultando = false;
                return true;
            }
            catch {
                await sleep(2500);
                consultando = false;
                return consultarAvisos();
            }
        }

        if (!consultando) {
            consultando = true
            toast.promise(
                consultarAvisos(),
                {
                    pending: 'Atualizando avisos...',
                    success: 'Avisos atualizados',
                    error: 'Não foi possível atualizar os avisos'
                }, {position: toast.POSITION.BOTTOM_CENTER}
            )
        }
    }, []);

    

    return (
        <ComunicadoDiv id="ComunicadoPage">
            <ToastContainer autoClose={2000}/>
            <Cabecalho nome='Comunicados'/>
            {
                (loading) ?
                    <Load />
                : 
                <>
                    <BalaoSemMensagens style={{display: comentarios.length ? 'none' : 'flex'}}>
                        <IconeSemMensagens src={SemMsg} alt='Sem mensagens'/>
                        <TextoSemMensagens>Não há novas mensagens publicadas pela coordenação do RU.</TextoSemMensagens>
                    </BalaoSemMensagens>
                    {
                        (pendingNotification) && 
                        <MensagensNaoLidas 
                            onClick={() => {setPendingNotification(false); localStorage.setItem("bandejapp:ultimoAviso", JSON.stringify(comentarios[0].data))}}
                            style={{display: comentarios.length ? '' : 'none'}}>{`Marcar tudo como lido (${quantidadeNaoLidas})`}
                        </MensagensNaoLidas>
                    }
                    <Container>
                        {
                        comentarios.map((comentario, index) => {
                            return (
                                <Card 
                                    key={index}
                                    style={{borderRadius: `${Formatacao.bordaRedonda(index, comentarios.length)}`}}
                                    new={comentario.pending && pendingNotification}
                                >
                                    <CardData>
                                        <CardTop>
                                            <DataRelativa new={comentario.pending && pendingNotification}>
                                                {`${Formatacao.diaRelativo(comentario.data)}`}
                                            </DataRelativa>
                                            {
                                                comentario.pending && pendingNotification && <SideIcon/>
                                            }
                                        </CardTop>
                                        <TextData new={comentario.pending && pendingNotification}>
                                            {`${Formatacao.diaPorExtenso(comentario.data)}`}
                                        </TextData>
                                    </CardData>
                                    
                                    <CardMensagem><TextMensagem dangerouslySetInnerHTML={{ __html: comentario.comunicado.replace(/\n/g, '<br>') }}></TextMensagem></CardMensagem>
                                </Card>
                            )})}
                    </Container>
                </>
            }
        </ComunicadoDiv>
    );
}
