import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function NavHome() {
  return (
    <nav className="navbar-container">

      <div className="navbar-left">
        <Link tp="/">
          <img src="/img/logo.png" alt="NikyArte amigurumis" className="logo-pc" />
        </Link>
      </div>
      <div className="navbar-center">
        <HashLink smooth to="/">Inicio</HashLink>
        <HashLink smooth to="/#catalogo">Catalogo</HashLink>
        <HashLink smooth to="/#contacto">Contacto</HashLink>
      </div>

      <div className="navbar-right">
        <i className="ri-search-line"></i>
        <div className="menu-toggle">
          <button className="mobile-menu-btn">
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>

    </nav>
  );
}

export default NavHome;