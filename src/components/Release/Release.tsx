import { Link } from "react-router-dom";
import { useIBGE } from "../../contexts/ibgeContext";
import style from "./Release.module.css";
import calcularDiasPassadosComTexto from "../../services/data";
import heart2 from "../../imgs/heart2.png";
import heart from "../../imgs/heart.png";
import getImg from "../../services/imag";

function Release() {
  const { apiData, toggleFavorite, favorites } = useIBGE();

  const dataRelease = apiData.filter((ibge) => ibge.tipo === "Release");

  return (
    <>
        {dataRelease.map((ibge) => (
          <div className={style.cardP} key={ibge.id}>
            <h3 className={style.titulo}>{ibge.titulo}</h3>
            <div className={style.fotoIntro}>
              <img className={style.fotoimg} src={getImg(ibge.imagens)} alt="context" />
              <p className={style.imIn}>{ibge.introducao}</p>
            </div>
            <p className={style.data}>{calcularDiasPassadosComTexto(ibge.data_publicacao)}</p>
            <div className={style.links}>
              <button
                onClick={() => toggleFavorite(ibge)}
              ><img className={style.imgFav} src={favorites.some((favorite) => favorite.id === ibge.id) ? heart2 : heart} alt="Favoritos" /></button>
              <Link className={style.noti} target='_black' to={ibge.link}>Mais...</Link>
            </div>
          </div>
        ))}
    </>
  );
}

export default Release;