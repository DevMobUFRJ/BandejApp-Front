import { useEffect } from "react";

import {
    BackDiv, ButtonDiv, CurrentDiv,
    CurrentPage, PageDiv, PageDescription,
    PageTitle, PrevNext, StartSkip, Template,
    TemplateDiv, TutDiv, Logo, LogoDiv, StartDiv,
    PageContent
} from "./styleWeb";

import TempAvaliacaoWeb from "../../Assets/Tutorial/TempAvaliacaoWeb.svg";
import TempCardapioWeb from "../../Assets/Tutorial/TempCardapioWeb.svg";
import TempDownloadWeb from "../../Assets/Tutorial/TempDownloadWeb.svg";
import TempNotificacaoWeb from "../../Assets/Tutorial/TempNotificacaoWeb.svg"
import LogoImgWeb from '../../Assets/Tutorial/LogoWeb.svg';

import PopUp from "../../Components/PopUp";
import { PopTexto } from "../../Components/PopUp/styleWeb";

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

export default function TutorialWeb({ history, mostrarPopup, page, inicio, titulos, descricoes, tempHandler, tggInicio }: TutorialProps) {

    useEffect(() => {
        mostrarPopup('agradecimento');
    }, [])

    return (
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

            <PageDiv style={{ display: `${inicio ? 'none' : 'flex'}` }}>

                <LogoDiv>
                    <Logo src={LogoImgWeb} alt='Logo do aplicativo BandejApp' />
                </LogoDiv>

                <PageContent>
                    <PageDescription style={{ textAlign: 'center', width: '100%' }}>
                        Tenha o cardápio do bandejão onde<br />e quando você precisar
                    </PageDescription>

                    <StartDiv>
                        <StartSkip className="skip" onClick={() => history.push('/Restaurante')}>Pular introdução</StartSkip>
                        <StartSkip onClick={() => tggInicio(1)}>Começar</StartSkip>
                    </StartDiv>
                </PageContent>
            </PageDiv>

            <PageDiv style={{ display: `${inicio ? '' : 'none'}` }}>

                <BackDiv>
                    <CurrentDiv>
                        <CurrentPage id="page" className="currentPage" />
                        <CurrentPage id="page" />
                        <CurrentPage id="page" />
                        <CurrentPage id="page" />
                    </CurrentDiv>

                    <TemplateDiv>
                        {/* <Logo src={LogoImgWeb} alt='Logo do aplicativo BandejApp' /> */}
                        <Template id="template" className="currentTemplate" src={TempDownloadWeb}
                        alt='Imagem ilustrativa do aplicativo' />
                        <Template id="template" className="nextTemplate" src={TempNotificacaoWeb}
                        alt='Imagem ilustrativa do aplicativo' />
                        <Template id="template" className="nextTemplate" src={TempCardapioWeb}
                        alt='Imagem ilustrativa do aplicativo' />
                        <Template id="template" className="nextTemplate" src={TempAvaliacaoWeb}
                    alt='Imagem ilustrativa do aplicativo' />
                    </TemplateDiv>
                </BackDiv>


                <PageContent style={{ alignItems: 'start', padding: '0 10.937vw', boxSizing: 'border-box' }}>
                    <PageTitle>{`${titulos[page]}`}</PageTitle>
                    {/* <PageDescription style={{paddingBottom: '1.562vw'}}>{`${descricoes[page]}`}</PageDescription> */}
                    <PageDescription style={{paddingBottom: '2.78vh'}}>{`${descricoes[page]}`}</PageDescription>

                    <ButtonDiv>
                        <PrevNext className="prevButton"
                            onClick={(e) => { tempHandler(e.currentTarget.className); }}>Voltar</PrevNext>

                        <PrevNext className="nextButton"
                            onClick={(e) => { tempHandler(e.currentTarget.className); }}
                        >{page === 3 ? 'Ver Cardápio' : 'Próximo'}</PrevNext>
                    </ButtonDiv>
                </PageContent>
            </PageDiv>
        </TutDiv>
    );
};
