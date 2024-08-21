import * as styleMobile from './style';
import * as styleWeb from './styleWeb';
    
import arrowDown from '../../Assets/Cardapio/ArrowDown.svg';
import Pin from '../../Assets/Cardapio/Pin.svg';
import Rest from '../../Assets/Informacoes/Ajustes.svg'
import { useEffect } from 'react';
import ImportStyle from '../../Functions/ImportStyle';

type DropDownProps = {
    opcaoInicial: string, // Valor que o useState está definido quando o componente é renderizado
    valoresState: string[], // Valores que o useState pode assumir
    valoresOpcoes: string[], /* O que vai estar escrito na opção. A opção com o texto da
                            i-ésima posição desse array vai ativar o estado na i-ésima posição 
                            do array anterior. Por isso, obviamente, os arrays devem ter o mesmo tamanho */
    tela: string, // Quem é o pai (Pra definir qual ícone fica à esquerda, no switch ali embaixo)
    alterarState: Function,
    height?: string
};

const escolheIcone = (lugar: string) => {
    switch (lugar) // Vai adicionando os cases aqui
    {
        case 'cardapio': return Pin;
    
        default: return Rest;
    }
}

const tamanho = (lugar: string) => {
    switch (lugar) // Vai adicionando os cases aqui
    {
        case 'cardapio': return '90vw';
    
        default: return '80.5vw';
    }
};

export default function DropDown(
    {opcaoInicial, valoresState, valoresOpcoes, tela, alterarState, height}: DropDownProps
    ) {
    
    useEffect(() => {
        const seta = document.getElementById('seta');
        const containerSelecionado = document.getElementById('selecionado');
        const elementoPrimeiraOpcao = document.getElementById(opcaoInicial);

        if(!containerSelecionado) console.log('container');
        if(!elementoPrimeiraOpcao) console.log('primeira');
        if(!seta) console.log('seta');
        
        if (containerSelecionado && elementoPrimeiraOpcao && seta)
        containerSelecionado.insertBefore(elementoPrimeiraOpcao, seta);
    }, [])
    
    
    const arruma = () => {
        const containerOpcoes = document.getElementById('opcoes');
        for (let valor of valoresState) {
            const it = document.getElementById(valor);
            
            if (!it ||it.id === opcaoSelecionada)
            continue;
            containerOpcoes?.appendChild(it);
        }
    }
    
    let opcaoSelecionada = opcaoInicial;
    arruma();
    
    const animacao = (abrindo: boolean) => {
        const containerOpcoes = document.getElementById('opcoes');
        if (!containerOpcoes)
            return;
        requestAnimationFrame(() => {
            if (!abrindo) {
                containerOpcoes.style.opacity = '0';
                containerOpcoes.style.transform = 'translateY(-7.75vh)';
                containerOpcoes.style.pointerEvents = 'none';
                containerOpcoes.style.height = '0';
            }
            else {
                containerOpcoes.style.opacity = '1';
                containerOpcoes.style.transform = 'translateY(0vh)';
                containerOpcoes.style.pointerEvents = 'auto';
                containerOpcoes.style.height = window.innerWidth/window.innerHeight <= 1 ? `${(valoresState.length - 1) * 7.5}vh` : `${(valoresState.length - 1) * 4.6875}vw`;
            }
        })
    };

    const OpenDrop = () => { // Abre o dropdown e adiciona os listeners
        const seta = document.getElementById('seta');
        const options = document.querySelectorAll('#dropdown button');

        animacao(true);
        
        seta?.addEventListener('click', DropHandler);
        options.forEach((option) => {option.addEventListener('click', DropHandler)});
    }

    const DropHandler = (evento: Event) => { // Remove os listeners e manipula o CloseDrop
        const triggerElem = evento.currentTarget;

        const seta = document.getElementById('seta');
        const options = document.querySelectorAll('#dropdown button');

        let achou = false;

        evento.stopPropagation();
        seta?.removeEventListener('click', DropHandler);
        options.forEach((opt) => opt.removeEventListener('click', DropHandler));
        
        options.forEach(opt => {
            if(triggerElem === opt) {
                CloseDrop(opt);
                achou = true;
            }
        });
        if (!achou)
            CloseDrop();
    }

    const CloseDrop = (elemento?: Element) => {
        const containerOpcoes = document.getElementById('opcoes');
        const containerSelecionado = document.getElementById('selecionado');
        const seta = document.getElementById('seta');

        requestAnimationFrame(() => {
            if(elemento) {
                const velho = document.querySelector('#selecionado button');
                
                if (velho && containerOpcoes && containerSelecionado && seta) {
                    containerOpcoes.appendChild(velho);
                    containerSelecionado.insertBefore(elemento, seta);
                }
                opcaoSelecionada = elemento.id;
                alterarState(elemento.id);
                arruma();
            }

            animacao(false);
        })

    }

    const { DropDiv, Opcoes, DropItem, 
        IconeEsquerda, Selecionado, DropArrow } = ImportStyle(styleMobile, styleWeb);

    return (
        <DropDiv id='dropdown' onClick={OpenDrop}>
            <Selecionado id='selecionado' style={{height}}>
                <IconeEsquerda src={escolheIcone(tela)} 
                    style={{width: `${tela === 'cardapio'? '': window.innerWidth/window.innerHeight <= 1 ? '5vw' : '2vw' }` }
                }
                alt='Ícone para selecionar restaurante'/>
                <DropArrow id='seta' src={arrowDown} 
                alt='Ícone para selecionar restaurante'/>
            </Selecionado>
            <Opcoes id='opcoes'>
                {
                    valoresState.map((estado, indice) => 
                        <DropItem type='button' style={{height}}
                        key={indice}
                        id={estado}>{valoresOpcoes[indice]}
                        </DropItem>
                    )
                }
            </Opcoes>
        </DropDiv>
    );
}