export type ibgeType = {
  id: number,
  tipo: string,
  titulo: string,
  introducao: string,
  data_publicacao: string,
  produto_id: number,
  produtos: string,
  editorias: string,
  imagens: string,
  produtos_relacionados: string,
  destaque: boolean,
  link: string,
}

export type ibgeContext = {
  apiData: ibgeType[];
  favorites: ibgeType[];
  addToFavorites: (item: ibgeType) => void;
  removeFromFavorites: (itemId: number) => void;
};