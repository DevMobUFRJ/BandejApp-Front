import Cabecalho from "../../Components/Cabecalho";
import DownPop from "../../Components/PopUpIOS";
import { SelecionaInfoDiv, InfoArea, InfoBalao, InfoGrid, InfoSubtitle, InfoTitle, 
        InfoUndertitle, InformDiv, InfoValor, BalaoInfo, SelecionaInfoDivBlock } from "./styleMobile";
import DropDown from "../../Components/DropDown";

type InformacoesProps = {
    showInstallMessage: boolean;
    options: string[];
    values: string[];
    ruSelecionado: string;
    setRU: React.Dispatch<React.SetStateAction<string>>;
    horarios: (option: string) => Array<string>;
};

export default function InformacoesMobile({showInstallMessage, options, values, ruSelecionado, setRU, horarios}: InformacoesProps) {

    return (
        <InformDiv>
            <Cabecalho nome="Informações"/>
            
            <SelecionaInfoDivBlock>
                <SelecionaInfoDiv>
                        <DropDown
                        opcaoInicial={ruSelecionado}
                        valoresState={values}
                        valoresOpcoes={options}
                        tela="info"
                        alterarState={setRU}/>
                </SelecionaInfoDiv>
            </SelecionaInfoDivBlock>

            <BalaoInfo>
                <InfoTitle>Horário de funcionamento</InfoTitle>

                <InfoGrid>
                    <InfoSubtitle>SEGUNDA A SEXTA</InfoSubtitle>
                    <InfoArea>
                        <InfoBalao>
                            <InfoUndertitle>Almoço</InfoUndertitle>
                            <InfoValor>{`${horarios(ruSelecionado)[0]}`}</InfoValor>
                        </InfoBalao>
                        <InfoBalao>
                            <InfoUndertitle>Jantar</InfoUndertitle>
                            <InfoValor>{`${horarios(ruSelecionado)[1]}`}</InfoValor>
                        </InfoBalao>
                    </InfoArea>
                </InfoGrid>

                <InfoGrid>
                    <InfoSubtitle>FINAIS DE SEMANA E FERIADOS:</InfoSubtitle>
                    <InfoArea>
                        <InfoBalao>
                            <InfoUndertitle>Almoço</InfoUndertitle>
                            <InfoValor>{`${horarios(ruSelecionado)[2]}`}</InfoValor>
                        </InfoBalao>
                        <InfoBalao>
                            <InfoUndertitle>Jantar</InfoUndertitle>
                            <InfoValor>{`${horarios(ruSelecionado)[3]}`}</InfoValor>
                        </InfoBalao>
                    </InfoArea>
                </InfoGrid>
            </BalaoInfo>

            <BalaoInfo>
                <InfoTitle>Preços</InfoTitle>

                <InfoGrid>
                    <InfoArea>
                        <InfoBalao>
                            <InfoUndertitle>Alunos</InfoUndertitle>
                            <InfoValor>R$ 2,00</InfoValor>
                        </InfoBalao>
                        <InfoBalao>
                            <InfoUndertitle>Servidores</InfoUndertitle>
                            <InfoValor>R$ {horarios(ruSelecionado)[4]}</InfoValor>
                        </InfoBalao>
                    </InfoArea>
                </InfoGrid>
            </BalaoInfo>
            {
                showInstallMessage &&
                <DownPop/>
            }
        </InformDiv>
    );
}