import { useEffect } from "react";
import * as styleMobile from "./style";
import * as styleWeb from "./styleWeb";
import { Formatacao } from "../../Functions/Formatacao";
import ImportStyle from "../../Functions/ImportStyle";

type switchDia = { 
    tggDia: Function
    semana: string[]
};

const meses = [' ', 'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
               'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
const diasSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex',
                    'Sáb', 'Dom'];

export default function NavBar({tggDia, semana}: switchDia) {


    const indiceDia = new Date().getDay();
    const dia = indiceDia === 0 ? 7 : indiceDia;


    useEffect(() => {
        const diaSem = document.querySelector(`button[value="${dia}"]`);
        const datas = document.querySelectorAll(`button[value="${dia}"] #diaSemana`);
        const passo = window.innerWidth * 0.252;

        diaSem?.classList.add('diaSelect');
        datas.forEach((data) => { data.classList.add('diaSelect')})

        const nav = document.getElementById('nav');
        if (nav) 
            nav.scrollTo({left: (dia - 2) * passo, behavior: 'smooth'});

        tggDia(dia); // O getDay tem o domingo como 0
    }, [dia, tggDia]);

    const switchDia = (id: string) => {
        document.querySelectorAll('.diaSelect').forEach((option) => {
            option.classList.remove('diaSelect');
        })

        const dia = document.getElementById(id);
        const datas = document.querySelectorAll(`#${id} #diaSemana`);

        dia?.classList.add('diaSelect');
        datas.forEach((data) => { data.classList.add('diaSelect')})
    }

    const seleciona = (clique: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const pos = parseInt(clique.currentTarget.value);
        const passo = window.innerWidth * 0.252;

        switchDia(clique.currentTarget.id); 
        tggDia(pos);

        const nav = document.getElementById('nav');
        if (nav) 
            nav.scrollTo({left: (pos - 2) * passo, behavior: 'smooth'});
    }

    const { DiaMes, DiaSemana, DiaRelativo, NavButton, NavDiv } = ImportStyle(styleMobile, styleWeb);

    return (
        <NavDiv id="nav">
            {
                semana.map((stringDia, indice) => 
                    <NavButton key={indice} id={diasSemana[indice]} value={indice + 1}
                    style={{marginLeft: indice === 0 || window.innerWidth/window.innerHeight > 1 ? '0' : '2.2vw'}}
                    onClick={seleciona}>
                        <DiaSemana id="diaSemana">{diasSemana[indice]}</DiaSemana>
                        <DiaMes id="diaSemana">
                            {`${stringDia.substring(0, 2)} 
                            ${meses[Number(stringDia.substring(3, 5))]}`}
                        </DiaMes>
                        <DiaRelativo id="diaSemana">
                            {
                                `${Formatacao.diaRelativo(stringDia)}`
                            }
                        </DiaRelativo>
                    </NavButton>
                )
            }  
        </NavDiv>
    )
}