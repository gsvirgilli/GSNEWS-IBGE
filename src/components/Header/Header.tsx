import style from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={ style.header }>
      <img className={ style.imag } src="" alt="logo gs news" />
      <h1 className={ style.gsnews }>GS NEWS</h1>
      <div>
        <Link />
        
      </div>
    </div>
  );
}

export default Header;