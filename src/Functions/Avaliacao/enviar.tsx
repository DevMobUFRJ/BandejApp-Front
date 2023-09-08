import { toast } from 'react-toastify';
import { abrirPopUp } from '../PopUp/abrirEfechar';

export type formulario = {
    ru: string;
    email: string;
    turno: string;
    data: string;
    nota: number;
    comentario: string;
}

/*----------------------------------------------------------------------------*/

function formatarData(formulario: formulario) {
    const dataFormatada = formulario.data.split('-').reverse().join('/');

    if(!formulario.data) 
        formulario.data = '----';
    else
        formulario.data = dataFormatada;
}

export const verificarData = (dataInput: string): boolean => {
    if(dataInput === '') 
        return true;

    const hoje = new Date();
    const dataSelecionada = new Date(dataInput);

    if (dataSelecionada < hoje)
        return true;

    return false;
}

/*----------------------------------------------------------------------------*/

function reformatarDados(formulario: formulario) {
    while (formulario.comentario && formulario.comentario.charAt(0) === '=') {
        formulario.comentario = formulario.comentario.substring(1);
    }

    if(formulario.email === '') 
        formulario.email = '----';
}

/*----------------------------------------------------------------------------*/

function resetarForm(form: formulario, valores: Array<string>) {
    
    /* Resetar o campo da nota */
    const estrelas = document.querySelectorAll('#classificacao li');
    estrelas.forEach(estrela => {
        estrela.classList.remove('notaSelecionada');
    });
    estrelas.item(0).classList.add('notaSelecionada');

    /* Resetar Turno */
    const turno = form.turno;
    const dataInput = document.getElementById('dataSelect');

    if(turno !== '----') {
        if(turno === 'Almoço') {
            const selecionado = document.getElementById('almoco');
            selecionado?.click();
        }
        else {
            const selecionado = document.getElementById('janta');
            selecionado?.click();
        }
    }
    if(dataInput?.getAttribute('type') === 'date') dataInput?.setAttribute('type', 'text');

    /* Resetar Dropdown */
    const containerOpcoes = document.getElementById('opcoes');
    for (let valor of valores) {
        const it = document.getElementById(valor);
        
        if (!it || it.id === 'selec') {
            continue;
        }
        containerOpcoes?.appendChild(it);
    }
    const dropdown = document.getElementById('selecionado');
    const seta = document.getElementById('seta');
    const selec = document.getElementById('selec');
    if(selec && seta && dropdown) dropdown.insertBefore(selec, seta);
}

/*----------------------------------------------------------------------------*/

export const enviar = async(formulario: formulario, valores: Array<string>): Promise<boolean> => {
    const botaoEnvio = document.getElementById('botaoEnvio');
    botaoEnvio?.toggleAttribute('disabled', true);
    botaoEnvio?.classList.add('envioDesativado');

    formatarData(formulario);
    reformatarDados(formulario);

    const dados = JSON.stringify({formulario});

    const retorno = await fetch(`${process.env.REACT_APP_PLANILHA_API_URL}`, {
        method: 'post',
        body: dados,
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    }).then(response => {
        if (!response.ok)
        // Importante checar porque a fetch só é rejeitada em caso de erro de rede
            return "Erro ao acessar o servidor";

        return response.text();
    })
      .then((text) =>{
        if (text === 'OK') {
            // abrirPopUp();
            resetarForm(formulario, valores);
            botaoEnvio?.toggleAttribute('disabled', false);
            botaoEnvio?.classList.remove('envioDesativado');
            toast.success('Avaliação foi enviada com sucesso!',
            {position: toast.POSITION.BOTTOM_CENTER});
            return true;
        } 
        else {
            toast.error(text,
            {position: toast.POSITION.BOTTOM_CENTER});
            botaoEnvio?.toggleAttribute('disabled', false);
            botaoEnvio?.classList.remove('envioDesativado');
            return false;
        }})
        .catch(err => {
            toast.error("Erro de rede. Tente novamente mais tarde",
            {position: toast.POSITION.BOTTOM_CENTER});
            botaoEnvio?.toggleAttribute('disabled', false);
            botaoEnvio?.classList.remove('envioDesativado');
            return false;
        });
    
    return retorno;
}