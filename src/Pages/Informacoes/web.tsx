import Cabecalho from "../../Components/Cabecalho";
import DownPop from "../../Components/PopUpIOS";
import {
    SelecionaInfoDiv, InfoBalao, InfoTitle,
    InfoUndertitle, InformDiv, InfoValor, BalaoInfo, SelecionaInfoDivBlock, BaloesContainer,
    InfoIcon,
    TitleBalao
} from "./styleWeb";
import DropDown from "../../Components/DropDown";
import Footer from "../../Components/Footer";
import almocoIcon from '../../Assets/Cardapio/almoco.svg';
import jantarIcon from '../../Assets/Cardapio/jantar.svg';
import pagamentoIcon from '../../Assets/Informacoes/payments.svg';

type InformacoesProps = {
    showInstallMessage: boolean;
    options: string[];
    values: string[];
    ruSelecionado: string;
    setRU: React.Dispatch<React.SetStateAction<string>>;
    horarios: (option: string) => Array<string>;
};

export default function InformacoesWeb({ showInstallMessage, options, values, ruSelecionado, setRU, horarios }: InformacoesProps) {

    return (
        <InformDiv>
            <Cabecalho nome="Informações" />

            <SelecionaInfoDivBlock>
                <SelecionaInfoDiv>
                    <DropDown
                        height='4.69vw'
                        opcaoInicial={ruSelecionado}
                        valoresState={values}
                        valoresOpcoes={options}
                        tela="info"
                        alterarState={setRU} />
                </SelecionaInfoDiv>
            </SelecionaInfoDivBlock>

            <BaloesContainer>
                <BalaoInfo cor={'almoco'}>
                    <TitleBalao>
                        <InfoIcon src={almocoIcon} alt="Ícone o Almoço" style={{ paddingRight: '0.781vw' }} />
                        <InfoTitle cor={'almoco'}>HORÁRIO DO ALMOÇO</InfoTitle>
                    </TitleBalao>

                    <InfoBalao>
                        <InfoUndertitle>SEGUNDA A SEXTA-FEIRA:</InfoUndertitle>
                        <InfoValor>{`${horarios(ruSelecionado)[0]}`}</InfoValor>
                    </InfoBalao>

                    <InfoBalao>
                        <InfoUndertitle>SÁBADO, DOMINGO E FERIADOS:</InfoUndertitle>
                        <InfoValor>{`${horarios(ruSelecionado)[2]}`}</InfoValor>
                    </InfoBalao>
                </BalaoInfo>

                <BalaoInfo cor={'jantar'}>
                    <TitleBalao>
                        <InfoIcon src={jantarIcon} alt="Ícone o Almoço" style={{ paddingRight: '0.781vw' }} />
                        <InfoTitle cor={'jantar'}>HORÁRIO DO JANTAR</InfoTitle>
                    </TitleBalao>

                    <InfoBalao>
                        <InfoUndertitle>SEGUNDA A SEXTA-FEIRA:</InfoUndertitle>
                        <InfoValor>{`${horarios(ruSelecionado)[1]}`}</InfoValor>
                    </InfoBalao>

                    <InfoBalao>
                        <InfoUndertitle>SÁBADO, DOMINGO E FERIADOS:</InfoUndertitle>
                        <InfoValor>{`${horarios(ruSelecionado)[3]}`}</InfoValor>
                    </InfoBalao>
                </BalaoInfo>

                <BalaoInfo cor={'pagamento'}>
                    <TitleBalao>
                        <InfoIcon src={pagamentoIcon} alt="Ícone o Almoço" style={{ paddingRight: '0.781vw' }} />
                        <InfoTitle cor={'pagamento'}>PAGAMENTO</InfoTitle>
                    </TitleBalao>

                    <InfoBalao>
                        <InfoUndertitle>ALUNOS</InfoUndertitle>
                        <InfoValor>R$ 2,00 <span style={{ fontSize: '0.9375vw', fontWeight: '500' }}>(somente em dinheiro)</span></InfoValor>
                    </InfoBalao>

                    <InfoBalao>
                        <InfoUndertitle>SERVIDORES</InfoUndertitle>
                        <InfoValor>R$ {horarios(ruSelecionado)[4]} <span style={{ fontSize: '0.9375vw', fontWeight: '500' }}>(somente em dinheiro)</span></InfoValor>
                    </InfoBalao>
                </BalaoInfo>
            </BaloesContainer>

            {
                showInstallMessage &&
                <DownPop />
            }
            <Footer />
        </InformDiv>
    );
}