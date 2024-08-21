import { InstallMessageContext } from "../../Contexts/ShowInstallMessageContext";
import { useContext } from "react";
import { toast } from 'react-toastify';

import copy from 'copy-to-clipboard';

import Copy from '../../Assets/FaleConosco/copiar.svg';
import Check from '../../Assets/FaleConosco/check.svg';

import DevMobBanner from '../../Assets/FaleConosco/devmobBanner.svg';
import RUbanner from '../../Assets/FaleConosco/ruBanner.svg';
import FaleConoscoMobile from "./indexMobile";
import FaleConoscoWeb from "./indexWeb";
import { Banner, copiado } from "./FaleConoscoTypes";
    
export default function FaleConosco() {
    const { showInstallMessage } = useContext(InstallMessageContext);

    const Baloes: Array<Banner> = [
        {
            imagem: RUbanner,
            alt: 'Banner com fundo degradê laranja claro a um laranja vibrante, e ao centro a logo do Restaurante Universitário.',
            titulo: 'Restaurante Universitário UFRJ',
            descricao: 'Elogios, sugestões e/ou reclamações?Fale com a gente através do formulário ou email.',
            opcoes: [
                {tipo: 1, nome: 'admruufrj@gmail.com', linkOuId: 'admruufrj@gmail.com'},
                {tipo: 0, nome: 'Abrir formulário', linkOuId: 'https://docs.google.com/forms/d/e/1FAIpQLSctq79DYLYzK3IZ_dPuCewiu3g9gG46Px_ngzo5OzTLrtlDRA/viewform'}
            ],
            filtro: ''
        },
        {
            imagem: DevMobBanner,
            alt: 'Banner com fundo degradê azul médio a um azul concentrado, e ao centro a logo do Restaurante Universitário.',
            titulo: 'DevMob',
            descricao: 'Fale com a equipe DevMob para tirar dúvidas, enviar sugestões e tudo mais relacionado ao App.',
            opcoes: [
                {tipo: 1, nome: 'devmob@ic.ufrj.br', linkOuId: 'devmob@ic.ufrj.br'},
                {tipo: 1, nome: 'bandejapp@ic.ufrj.br', linkOuId: 'bandejapp@ic.ufrj.br'}
            ],
            filtro: 'invert(21%) sepia(74%) saturate(2729%) hue-rotate(196deg) brightness(87%) contrast(89%)'
        }
    ];

    const copiar = (id: string, link: string) => {
      const timers: copiado[] = [];
      copy(link);
      toast.success('Link copiado para a área de transferência', 
      {position: toast.POSITION.BOTTOM_CENTER})

      const alvo = document.getElementById(id);
      if (!alvo) 
          return;

      const listado = timers.find((el) => el.id === id);

      alvo.setAttribute('src', Check);
      if (!listado) {
          const novoTimer = setTimeout(() => alvo.setAttribute('src', Copy), 2000)
          timers.push({id: id, ativo: true, timeout: novoTimer});
      }
      else {
          if (listado.ativo)
              window.clearTimeout(listado.timeout);

          listado.ativo = true;
          listado.timeout = setTimeout(() => {
              listado.ativo = false;
              alvo.setAttribute('src', Copy)
          }, 2000)
      }
    }

    return (
      window.innerWidth/window.innerHeight <= 1 ?
        <FaleConoscoMobile showInstallMessage={showInstallMessage} Baloes={Baloes} copiar={copiar}/>:
        <FaleConoscoWeb showInstallMessage={showInstallMessage} Baloes={Baloes} copiar={copiar}/>
    );
}