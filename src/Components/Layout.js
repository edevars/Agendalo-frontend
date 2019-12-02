import React, { useState } from 'react';
import '../Styles/Menu.css'
import { Link } from 'react-router-dom'

const Layout = (props) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="Wrapper">
            <button className="menuButton" onClick={handleClick}>
                MENU
            </button>
            
            <div className={open ? "menu-visible" : "menu-not-visible"}>
                <nav className="navMenu">
                    <button className="exitButton" onClick={handleClick}>
                        X
                    </button>
                </nav>
                
                <nav className="navMenu"> 
                    <Link to="/">
                    <button className="opcButton" onClick={handleClick}>
                        Inicio
                    </button>
                    </Link>
                </nav>

                <nav className="navMenu"> 
                    <Link to="/destinos">
                    <button className="opcButton" onClick={handleClick}>
                        Destinos
                    </button>
                    </Link>
                </nav>

                
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}
export default Layout;