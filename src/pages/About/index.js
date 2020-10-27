import React from 'react';
import {Link} from 'react-router-dom';
import '../About/style.css'
import logoImg from '../../assets/logo.png';
import tanakaImg from  '../../assets/tanaka.jpg'

export default function About(){
    return (
        <div> 
            <header>
                <div className="topo">
                    <div className="container" >
                        <p>(13) 9 9718 5549</p>
                        <p>tanaka@ramonalvares.com.br</p>
                    </div>
                </div>
                <div className="menu">
                    <div className="container">
                        <img src={logoImg} alt="logo"/>
                        <p>Creci: 2352:56</p>
                        <Link className="botao_menu" to="/about">SOBRE</Link>
                        <Link className="botao_menu" to="/search">IMÓVEIS</Link>
                        <Link className="botao_menu" to="/">HOME</Link>
                    </div>
                </div>
            </header>

            <main>

                <div className="container">

                    <div className="aboutmensagembonita">
                        <h1>Tanaka Corretor</h1>
                        <p>Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 Atuando na riviera desde 1992 
                            Atuando na riviera desde 1992 Atuando na riviera desde 1992 
                            Atuando na riviera desde 1992 
                        </p><img src={tanakaImg} alt=""/>
                    </div>

                </div>
            </main>

            <footer>
                <p>Desenvolvido por Allan Cruvinel</p>
            </footer>




        </div>
    )
};