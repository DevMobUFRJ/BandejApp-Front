import '@fontsource/bebas-neue';
import '@fontsource/nunito';
import '@fontsource/quicksand';

export const global = {
    colors: {
        laranja: '#fd720f',
        cinza: '#3E3E3E',
        cinzaOpaco: (opacidade: number) => `rgba(62, 62, 62, ${opacidade})`,
        cinzaClaro: '#989796',
        cinzaPratos: '#666768',
        cinzaTexto: 'rgb(0, 0, 0, .49)',
        desativado: '#C2C3C4',
        fundo: '#EBECED',
        azul: '#2452A9',
        branco: '#FFF',
        preto: '#353637',
        corAlmoco: '#D59E14',
        corJanta: '#2452A9',
        corHorario: (horario: number | undefined) => horario ? global.colors.corJanta: global.colors.corAlmoco,
/*---------------------------------------------------- */
        cinzaTitulo: '#818181',
        cinza1: '#f4f4f4',
        cinza2: '#d9d9d9',
        cinza3: '#cccccc',
        cinzaOF: '#E3E3E3'
    },
    fonts: {
        bebas: 'Bebas Neue',
        nunito: 'Nunito',
        quickSand: 'Quicksand'
    }
};
