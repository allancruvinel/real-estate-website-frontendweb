
import React, { useEffect, useState } from 'react';
import logoImg from '../../assets/sss@2x.png';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

import '../Header/style.css';

export default function Header() {

    const cookies = new Cookies();
    const history = useHistory();
    const [isLogged,setIsLogged]= useState(false);

    useEffect(() => {
        if(cookies.get('aut') === `${process.env.REACT_APP_TOKEN_AUT}`){
            setIsLogged(true);
        }
        else
        {
            setIsLogged(false);
        }
        
    }, []);

    function logOut(e) {
        cookies.remove('aut');
        window.location.reload();
    }

    return (
        <header>
            <div className="menu">
                <div className="container">
                    <Link className="logo" to="/"> <img src={logoImg} alt="logo" /></Link>
                    <div className="menu_options">
                        <Link className="botao_menu" to="/contact">Contato</Link>
                        <Link className="botao_menu" to="/search">Imóveis</Link>
                        <Link className="botao_menu" to="/about">Sobre</Link>
                        {isLogged ? <div>
                            <Link className="botao_menu" to="/register">Registrar</Link>
                            <Link className="botao_menu" onClick={logOut}>Sair</Link>
                        </div> : <div>
                                <Link className="botao_menu" to="/login">Login</Link>
                            </div>}
                    </div>
                </div>
            </div>
        </header>
    )
}