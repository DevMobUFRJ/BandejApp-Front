import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { PopupContext } from "../../Contexts/PopupContext";

import TutorialMobile from "./mobile";
import TutorialWeb from "./web";


export default function Tutorial() {
    const history = useHistory();
    const { mostrarPopup } = useContext(PopupContext);

    const [page, tggPage] = useState(0);
    const [inicio, tggInicio] = useState(0);

    const titulos = ['Instale o App', 'Acesse os avisos',
        'Confira o Cardápio', 'Faça Avaliações'];

    const descricoes = ['e acesse o cardápio até quando estiver sem conexão com a internet.',
        'e fique por dentro do funcionamento dos RU\'s e de tudo que acontece.',
        'e saiba o que será servido durante toda a semana no almoço e jantar.',
        'fornecendo o feedback necessário para que o RU possa ficar cada vez melhor.']


    const tempHandler = (target: string) => {
        if (target.includes('prevButton')) {
            if (page <= 0)
                tggInicio(0);
            else
                passarPara('prevTemplate');
        }
        else {
            if (page >= 3)
                history.push('/Restaurante');
            else
                passarPara('nextTemplate');
        }
    }

    const passarPara = (praOnde: string) => {
        const contrario = praOnde === 'nextTemplate' ? 'prevTemplate' : 'nextTemplate';
        const direcao = praOnde === 'nextTemplate' ? 1 : -1;

        const pageIndex = document.querySelectorAll('#page');
        const currentPage = document.querySelector('.currentPage');

        const currentTemp = document.querySelector('.currentTemplate');
        const nextTemps = document.querySelectorAll(`.${praOnde}`);
        const nextTemp = nextTemps[direcao === 1 ? 0 : nextTemps.length -1];

        tggPage(page + direcao);

        currentTemp?.classList.replace('currentTemplate', contrario);
        nextTemp?.classList.replace(praOnde, 'currentTemplate');

        if (currentPage)
            currentPage.classList.toggle('currentPage');
        pageIndex[page + direcao].classList.add('currentPage');
    }

    return (
        (window.innerWidth/window.innerHeight) <= 1 ?
            <TutorialMobile
                history={history}
                mostrarPopup={mostrarPopup}
                page={page}
                inicio={inicio}
                titulos={titulos}
                descricoes={descricoes}
                tempHandler={tempHandler}
                tggInicio={tggInicio}
            />:
            <TutorialWeb
                history={history}
                mostrarPopup={mostrarPopup}
                page={page}
                inicio={inicio}
                titulos={titulos}
                descricoes={descricoes}
                tempHandler={tempHandler}
                tggInicio={tggInicio}
            />
    );
};
