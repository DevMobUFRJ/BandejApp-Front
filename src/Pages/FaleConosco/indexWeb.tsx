import { ToastContainer } from 'react-toastify';

import Cabecalho from "../../Components/Cabecalho";

import { Balao, BalaoBanner, BalaoDescription, BalaoInfo, BalaoTitle,
         BaloesDiv, FaleDiv, InfoLink, LinkIcon, LinkName, Links } from "./styleWeb";
    
import DownPop from "../../Components/PopUpIOS";

import Copy from '../../Assets/FaleConosco/copiar.svg';
import Redirect from '../../Assets/FaleConosco/redirect.svg';

import Footer from "../../Components/Footer";
import { FaleConoscoProps } from "./FaleConoscoTypes";

export default function FaleConoscoWeb({showInstallMessage, Baloes, copiar}: FaleConoscoProps) {
    return (
        <FaleDiv>
            <ToastContainer autoClose={2000}/>
            <Cabecalho nome='Fale conosco'/>
            <BaloesDiv>
                {
                    Baloes.map( (banner, indice) => 
                        <Balao key={indice}>
                            <BalaoBanner src={banner.imagem} alt={banner.alt}/>

                            <BalaoInfo>
                                <BalaoTitle>{banner.titulo}</BalaoTitle>
                                <BalaoDescription>{banner.descricao}</BalaoDescription>
                                <Links>
                                    {banner.opcoes.map((opcao, index) => 
                                        opcao.tipo === 0?
                                        <InfoLink href={opcao.linkOuId} key={index}>
                                            <LinkName>{opcao.nome}</LinkName>
                                            <LinkIcon src={Redirect}
                                            alt="Ícone de redirecionamento"
                                            style={{filter: banner.filtro}}/>
                                        </InfoLink>

                                        :

                                        <InfoLink onClick={() => copiar(opcao.linkOuId, opcao.nome)} key={index}>
                                            <LinkName>{opcao.nome}</LinkName>
                                            <LinkIcon src={Copy} alt="Ícone de copiar" id={opcao.linkOuId}
                                            style={{filter: banner.filtro}}/>
                                        </InfoLink>
                                    )}
                                </Links>
                            </BalaoInfo>
                        </Balao>
                    )
                }
            </BaloesDiv>
            { showInstallMessage && <DownPop/> }
            <Footer/>
        </FaleDiv>
    );
}