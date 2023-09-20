import { useIBGE } from '../../contexts/ibgeContext';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  const { apiData } = useIBGE();

  if (apiData.length === 0) {
    return null;
  }

  return (
    <div className={ style.header }>
      <img className={ style.imag } src="" alt="logo gs news" />
      <h1 className={ style.gsnews }>GS NEWS</h1>
      <div>
        <Link target='_blank' to={'https://github.com/gsvirgilli'}>
          <img src="src/imgs/github.svg" alt="GitHub" />
        </Link>
        <Link target='_blank' to={'https://www.linkedin.com/in/gsvirgilli/'}>
          <img src="src/imgs/linkedin.svg" alt="LinkedIn" />
        </Link>
      </div>
      <div key={apiData[0].id}>
        <img src="" alt="imagens" />
        <h3>{apiData[0].titulo}</h3>
        <p>{apiData[0].introducao}</p>
        <p>{apiData[0].data_publicacao}</p>
        <Link target='_black' to={apiData[0].link}>Noticia Completa</Link>
        <button><img src="" alt="Favoritos" /></button>
      </div>
    </div>
  );
}

export default Header;