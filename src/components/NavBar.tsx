import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <nav>
        <NavLink to="/recentes">Mais Recentes</NavLink>
        <NavLink to="/release">Release</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;