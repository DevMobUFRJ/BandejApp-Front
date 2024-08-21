import { RatingDiv, StarIcon } from "./style";

type starInfo = { 
    NotaToParent: Function; 
    fontSize?: string;
}

export default function Nota({NotaToParent, fontSize = '17vw'}: starInfo) {

    const SetNota = (evento: Event) => { // Adaptado do JSfiddle -> link no style
        evento.stopPropagation();

        const trigger = evento.target;
        const estrelas = document.querySelectorAll('#classificacao li');

        estrelas.forEach(star => {
            if((star === trigger) && !(star.classList.contains('notaSelecionada'))) {
                estrelas.forEach(item => item.classList.remove('notaSelecionada'));
                star.classList.add('notaSelecionada');
            }
        })
    }

    return (
        <RatingDiv id="classificacao" onClick={e => SetNota(e.nativeEvent)}>
            <StarIcon style={{display: 'none', fontSize}} value='0' className="notaSelecionada"/>
            <StarIcon style={{fontSize}} value='1' onClick={e => NotaToParent(e.currentTarget.value)}/>
            <StarIcon style={{fontSize}} value='2' onClick={e => NotaToParent(e.currentTarget.value)}/>
            <StarIcon style={{fontSize}} value='3' onClick={e => NotaToParent(e.currentTarget.value)}/>
            <StarIcon style={{fontSize}} value='4' onClick={e => NotaToParent(e.currentTarget.value)}/>
            <StarIcon style={{fontSize}} value='5' onClick={e => NotaToParent(e.currentTarget.value)}/>
        </RatingDiv>
    );
}