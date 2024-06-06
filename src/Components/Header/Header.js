import "./Header.css"   
import { Link } from "react-router-dom"

const Header = () => {
    return <header className="header">
         <img src= "/img/Header@2x.png" alt='header' /> 

         <div className="menu-hamburguer">
                <span className="menu-hamburguer__icon"></span>
            </div>
            <div className="header-container">
                <Link to="/" className="flex flex--center">
                    <h1 className="header__title">Organiza</h1>
                </Link>
            </div>
            <nav className="menu-header">
                <ul className="menu-items">
                    <li><Link className="menu-item menu-item--entrar" to="#">Entrar</Link></li>
                    <li><Link className="menu-item" to="/Agregar">Agregar</Link></li>
                    <li><Link className="menu-item" to="/">Blog</Link></li>
                    <li><Link className="menu-item" to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
            <div className="menu-header-background"></div>

    </header>
} 

export default Header