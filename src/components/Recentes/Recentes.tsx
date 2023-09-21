import { Link } from "react-router-dom";
import { useIBGE } from "../../contexts/ibgeContext";
import style from "./Recentes.module.css";
import calcularDiasPassadosComTexto from "../../services/data";

function Recentes() {
  const { apiData, toggleFavorite, favorites } = useIBGE();

  const dataApi = apiData.filter((_arr, index) => index > 0);

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
              ><img className={ style.imgFav } src={favorites.some((favorite) => favorite.id === ibge.id) ? "src/imgs/heart (3).svg" : "src/imgs/heart.svg"} alt="Favoritos" /></button>
            </div>
          </div>
        ))}
    </>
  );
}

export default Recentes;
