import { Link, Outlet } from "react-router-dom"
import Header from "./Header/Header"
import { useIBGE } from "../contexts/ibgeContext";
import NavBar from "./NavBar";

function Layout() {
  const { apiData, toggleFavorite } = useIBGE();

  if (apiData.length === 0) {
    return null;
  }
  const dados = apiData[0].imagens;
  const imagemData = JSON.parse(dados);
  const caminhoDaImagem = imagemData.image_fulltext;
  
  return (
    <>
      <Header />
      <div key={apiData[0].id}>
        <img src={`https://agenciadenoticias.ibge.gov.br/${caminhoDaImagem}`} alt="imagens" />
        <h3>{apiData[0].titulo}</h3>
        <p>{apiData[0].introducao}</p>
        <p>{apiData[0].data_publicacao}</p>
        <Link target='_black' to={apiData[0].link}>Noticia Completa</Link>
        <button
          onClick={ () => toggleFavorite(apiData[0]) }
          >
          <img src="" alt="Favoritos" />
        </button>
      </div>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Layout;