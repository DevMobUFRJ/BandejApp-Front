import { useEffect } from "react";

import { BackImg, ButtonDiv, CurrentDiv,
    CurrentPage, InitialPage, PageDescription,
    PageTitle, PrevNext, StartSkip, Template,
    TemplateDiv, TutDiv, Logo, LogoDiv, StartDiv } from "./styleMobile";

import Background from '../../Assets/Tutorial/BgInicial.svg';
import TempAvaliacao from "../../Assets/Tutorial/TempAvaliacao.svg";
import TempCardapio from "../../Assets/Tutorial/TempCardapio.svg";
import TempDownload from "../../Assets/Tutorial/TempDownload.svg";
import TempNotificacao from "../../Assets/Tutorial/TempNotificacao.svg"
import LogoImg from '../../Assets/Tutorial/Logo.svg';
import BackgroundRu from '../../Assets/Tutorial/BgRu.svg';

import PopUp from "../../Components/PopUp";
import { PopTexto } from "../../Components/PopUp/style";

type TutorialProps = {
    history: any;
    mostrarPopup: Function;
    page: number;
    inicio: number;
    titulos: string[];
    descricoes: string[];
    tempHandler: (target: string) => void;
    tggInicio: (inicio: number) => void;
};

export default function TutorialMobile({history, mostrarPopup, page, inicio, titulos, descricoes, tempHandler, tggInicio}: TutorialProps) {

    useEffect(() => {
        mostrarPopup('agradecimento');
    }, [])

    return(
        <TutDiv>
            <PopUp popID='agradecimento' titulo="Obrigado! 🥳"
                opcoes={['Fechar']} tiposOpcoes={[0]}
                funcoesOpcoes={[mostrarPopup]}
                componente={
                    <PopTexto>
                        Estamos muito felizes em anunciar o lançamento oficial da primeira versão do BandejApp. 
                        Esperamos que aproveitem e aguardamos ansiosamente seus feedbacks. 🎉🎉
                    </PopTexto>
                }
            />

            <InitialPage style={{display: `${inicio?'none':'flex'}`}}>
                <BackImg src={BackgroundRu} alt='Imagem de fundo com as cubas do RU em destaque'/>

                <LogoDiv>
                    <Logo src={LogoImg} alt='Logo do aplicativo BandejApp'/>
                </LogoDiv>

                <PageDescription>
                    Tenha o cardápio do<br/>bandejão onde e quando<br/>você precisar
                </PageDescription>

                <StartDiv>
                    <StartSkip onClick={() => tggInicio(1)}>Começar</StartSkip>
                    <StartSkip className="skip" onClick={() => history.push('/Restaurante')}>Pular introdução</StartSkip>
                </StartDiv>
            </InitialPage>

            <div style={{display: `${inicio?'':'none'}`}}>
                <BackImg src={Background} alt='Imagem de onda laranja ao fundo'/>
                
                <CurrentDiv>
                    <CurrentPage id="page" className="currentPage"/>
                    <CurrentPage id="page"/>
                    <CurrentPage id="page"/>
                    <CurrentPage id="page"/>
                </CurrentDiv>

                <TemplateDiv>
                    <Template id="template" className="currentTemplate" src={TempDownload}
                    alt='Imagem ilustrativa do aplicativo'/>
                    <Template id="template" className="nextTemplate" src={TempNotificacao}
                    alt='Imagem ilustrativa do aplicativo'/>
                    <Template id="template" className="nextTemplate" src={TempCardapio}
                    alt='Imagem ilustrativa do aplicativo'/>
                    <Template id="template" className="nextTemplate" src={TempAvaliacao}
                    alt='Imagem ilustrativa do aplicativo'/>
                </TemplateDiv>

                <PageTitle>{`${titulos[page]}`}</PageTitle>
                <PageDescription>{`${descricoes[page]}`}</PageDescription>

                <ButtonDiv>
                    <PrevNext className="prevButton"
                    onClick={(e) => {tempHandler(e.currentTarget.className);}}>Voltar</PrevNext>

                    <PrevNext className="nextButton"
                    onClick={(e) => {tempHandler(e.currentTarget.className);}}
                    >{page===3? 'Ver Cardápio':'Próximo'}</PrevNext>
                </ButtonDiv>
            </div>
        </TutDiv> 
    );
};
