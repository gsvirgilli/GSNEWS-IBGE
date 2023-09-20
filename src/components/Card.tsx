import { Link } from 'react-router-dom';
import { useIBGE } from '../contexts/ibgeContext';

function Card() {
  const { apiData } = useIBGE();

  return (
    <>
      <nav>
        <button>Mais noticias</button>
        <button>Realsea</button>
        <button>favoritos</button>
      </nav>
      <div>
        {apiData.map((ibge) => (
          <div key={ibge.id}>
            <h3>{ibge.titulo}</h3>
            <p>{ibge.introducao}</p>
            <p>{ibge.data_publicacao}</p>
            <Link target='_black' to={ibge.link}>Noticia Completa</Link>
            <button><img src="" alt="Favoritos" /></button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;