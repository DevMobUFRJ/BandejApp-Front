import { useEffect } from "react";

export default function FontSize() {
    useEffect(() => {
        if(window.innerWidth/window.innerHeight > 1) return;

        const cardapioItems = document.querySelectorAll('#prato');

        cardapioItems.forEach((item) => {
        /*
            if(item.innerHTML.length > 53) {
                const errado = item.innerHTML.split(' ');
                item.innerHTML = errado.filter(x => x !== '').join(' ');
            }
        */
            const tamanho = item.innerHTML.length;
            if(tamanho > 53) {
                const fontSize = (tamanho-53)*0.02;

                item.setAttribute('style', `font-size: ${3.73-fontSize}vw`);
            }
            else item.setAttribute('style', 'font-size: 3.73vw;')
        });
    })
}