export type copiado = {
  id: string;
  ativo: boolean;
  timeout: NodeJS.Timeout;
}


export type Banner = {
  imagem: string;
  alt: string;
  titulo: string;
  descricao: string;
  opcoes: Array<{
      tipo: number; /* 0 -> Link | != 0 -> copiar */
      nome: string; /* Se for texto para copiar, o nome DEVERIA ser o texto para copiar*/
      linkOuId:  string;
  }>;
  filtro: string;
}

export type FaleConoscoProps = {
  showInstallMessage: boolean;
  Baloes: Array<Banner>;
  copiar: (id: string, link: string) => void;
}