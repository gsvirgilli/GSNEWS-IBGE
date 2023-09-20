import style from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {

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
    </div>
  );
}

export default Header;