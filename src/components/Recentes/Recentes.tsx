import { Link } from "react-router-dom";
import { useIBGE } from "../../contexts/ibgeContext";
import style from "./Recentes.module.css";
import calcularDiasPassadosComTexto from "../../services/data";
import heart2 from "../../imgs/heart2.svg";
import heart from "../../imgs/heart.svg";

function Recentes() {
  const { apiData, toggleFavorite, favorites } = useIBGE();

  const dataApi = apiData.slice(1);

  return (
    <>
        {dataApi.map((ibge) => (
          <div className={ style.cardP } key={ibge.id}>
            <h3 className={ style.titulo }>{ibge.titulo}</h3>
            <p className={style.imIn}>{ibge.introducao}</p>
            <p className={style.data}>{calcularDiasPassadosComTexto(ibge.data_publicacao)}</p>
            <div className={style.links}>
              <Link className={style.noti} target='_black' to={ibge.link}>Mais...</Link>
              <button
                onClick={() => toggleFavorite(ibge)}
              ><img className={style.imgFav} src={favorites.some((favorite) => favorite.id === ibge.id) ? heart2 : heart} alt="Favoritos" /></button>
            </div>
          </div>
        ))}
    </>
  );
}

export default Recentes;
