import style from './Header.module.css';
import { Link } from 'react-router-dom';
import linkedin from '../../imgs/linkedin.svg';
import github from '../../imgs/github.svg';

function Header() {

  return (
    <div className={ style.header }>
      <h1 className={ style.gsnews }>GS NEWS</h1>
      <div className={ style.link }>
        <Link target='_blank' to={'https://github.com/gsvirgilli'}>
          <img src={github} alt="GitHub" />
        </Link>
        <Link target='_blank' to={'https://www.linkedin.com/in/gsvirgilli/'}>
          <img src={linkedin} alt="LinkedIn" />
        </Link>
      </div>
    </div>
  );
}

export default Header;