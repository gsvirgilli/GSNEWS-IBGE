import { Link } from "react-router-dom";
import { useIBGE } from "../contexts/ibgeContext";

function Favorites() {
  const { favorites, toggleFavorite } = useIBGE();

  return (
    <>
      <div>
        {favorites.map((ibge) => (
          <div key={ibge.id}>
            <h3>{ibge.titulo}</h3>
            <p>{ibge.introducao}</p>
            <p>{ibge.data_publicacao}</p>
            <Link target='_black' to={ibge.link}>Noticia Completa</Link>
            <button
              onClick={ () => toggleFavorite(ibge) }
              ><img src="" alt="Favoritos" /></button>
          </div>
        ))}
      </div>
    </>
  );
}
export default Favorites;