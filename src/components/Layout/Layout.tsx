import { Link, Outlet } from "react-router-dom"
import Header from "../Header/Header"
import { useIBGE } from "../../contexts/ibgeContext";
import NavBar from "../NavBar/NavBar";
import style from "./Layout.module.css";
import calcularDiasPassadosComTexto from "../../services/data";
import heart2 from "../../imgs/heart2.svg";
import heart from "../../imgs/heart.svg";

function Layout() {
  const { apiData, toggleFavorite, favorites } = useIBGE();

  if (apiData.length === 0) {
    return null;
  }
  const dados = apiData[0].imagens;
  const imagemData = JSON.parse(dados);
  const caminhoDaImagem = imagemData.image_fulltext;

  return (
    <div className={ style.root }>
      <Header />
      <div className={ style.principal } >
        <div className={ style.cardP } key={apiData[0].id}>
            <p className={ style.vermelho }>Notícia mais recente</p>
          <h2>{apiData[0].titulo}</h2>
          <div className={ style.imIn }>
            <img className={ style.imgFoto } src={`https://agenciadenoticias.ibge.gov.br/${caminhoDaImagem}`} alt="imagens" />
            <div className={ style.introlink }>
              <p className={ style.intro }>{apiData[0].introducao}</p>
          <p className={ style.data }>{calcularDiasPassadosComTexto(apiData[0].data_publicacao)}</p>
            </div>
          </div>
          <div className={ style.links }>
            <Link className={style.noti} target='_black' to={apiData[0].link} >Mais...</Link>
            <button
              onClick={() => toggleFavorite(apiData[0])}
            >
              <img className={style.smile} src={favorites.some((favorite) => favorite.id === apiData[0].id) ? heart2 : heart} alt="Favoritos" />
            </button>
          </div>
        </div>
      </div>
      <NavBar />
      <div className={ style.resto }>
      <Outlet />
      </div>
      
    </div>
  )
}

export default Layout;
