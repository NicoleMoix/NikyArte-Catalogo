import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function NavHome() {
  return (
    <nav className="navbar-container">

      <div className="navbar-left"></div>
      
      <div className="navbar-center">
        <Link to="https://www.instagram.com/nikyarte/?hl=es">
          <img src="/img/nombre.png" alt="NikyArte amigurumis" className="logo-pc" />
        </Link>
        <Link to="https://www.instagram.com/nikyarte/?hl=es">
          <img src="/img/logo.png" alt="NikyArte amigurumis" className="logo-movil" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="https://www.instagram.com/nikyarte/?hl=es" target='_blanck'><i class="ri-instagram-line"></i></Link>
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