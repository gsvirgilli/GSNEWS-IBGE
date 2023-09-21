import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <header className={styles.header}> 
      <nav className={styles.nav}> 
        <Link
          to="/recentes"
          className={styles.Navlink} 
        >
          Recentes
        </Link>
        <Link
          to="/release"
          className={styles.NavLink}
        >
          Release
        </Link>
        <Link
          to="/favorites"
          className={styles.NavLink}
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;