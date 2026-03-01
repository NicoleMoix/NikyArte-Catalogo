import { HashLink } from 'react-router-hash-link';

function NavHome (){
    return(
        <>
            <div className="nav-img">
                <div className="div-img-pc">
                    <img src="/img/nombre.png" alt="NikyArte amigurumis"/>
                </div>
                <div className="div-img-mv">
                    <img src="/img/logo.png" alt="NikyArte amigurumis"/>
                </div>
            </div>
            <div className="section-nav">
                <HashLink smooth to="/"><p>Inicio</p></HashLink>
                <HashLink smooth to="/#catalogo"><p>Catalogo</p></HashLink>
                <HashLink smooth to="/#contacto"><p>Contacto</p></HashLink>
            </div>
            <div className="div-search">
                <i class="ri-search-line"></i>
            </div>
        </>
    );
}
export default NavHome;