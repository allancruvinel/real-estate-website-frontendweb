
import React from 'react';
import logoImg from '../../assets/sss@2x.png';
import { Link } from 'react-router-dom';

import '../Header/style.css';

export default function Header() {
    return (
        <header>
            <div className="menu">
                <div className="container">
                    <Link className="logo" to="/"> <img src={logoImg} alt="logo" /></Link>
                    <div className="menu_options">
                        <Link className="botao_menu" to="/contact">Contato</Link>
                        <Link className="botao_menu" to="/search">Imóveis</Link>
                        <Link className="botao_menu" to="/about">Sobre</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}