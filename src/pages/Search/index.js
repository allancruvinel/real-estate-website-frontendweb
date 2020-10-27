import React from 'react';

import logoImg from '../../assets/logo.png';
import apartImg from '../../assets/30682992.jpg'
import {Link} from 'react-router-dom';

import '../Search/style.css'
export default function Home(){
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
                    
                    <div className="search">
                        <p>Encontre seu Imóvel</p>
                        <form action="/" method="POST">
                            <input type="text" name="reference" placeholder="Referência"/>
                            <input type="text" name="price" placeholder="Preço"/>
                            <a href="http://www.google.com"><img src="../images/searchlogo.svg" alt="Pesquisar"/></a>
                        </form>
                    </div>

                    <p className="destacado">Apartamentos</p>

                    <section className="propertiesSearch">
                        <Link to="/immobile">
                            <div className="immobileSearch" style={{backgroundImage:`url(${apartImg})`}}>
                                
                                <p className="immobileTitle">Apartamento</p><p className="immobilePrice">R$2.000.000,00</p>
                            </div>
                        </Link>
                        <Link to="/immobile">
                            <div className="immobileSearch" style={{backgroundImage:`url(${apartImg})`}}>
                                
                                <p className="immobileTitle">Apartamento</p><p className="immobilePrice">R$2.000.000,00</p>
                            </div>
                        </Link>
                        <Link to="/immobile">
                            <div className="immobileSearch" style={{backgroundImage:`url(${apartImg})`}}>
                                
                                <p className="immobileTitle">Apartamento</p><p className="immobilePrice">R$2.000.000,00</p>
                            </div>
                        </Link>
                        <Link to="/immobile">
                            <div className="immobileSearch" style={{backgroundImage:`url(${apartImg})`}}>
                                
                                <p className="immobileTitle">Apartamento</p><p className="immobilePrice">R$2.000.000,00</p>
                            </div>
                        </Link>
                        <Link to="/immobile">
                            <div className="immobileSearch" style={{backgroundImage:`url(${apartImg})`}}>
                                
                                <p className="immobileTitle">Apartamento</p><p className="immobilePrice">R$2.000.000,00</p>
                            </div>
                        </Link>
                        <Link to="/immobile">
                            <div className="immobileSearch" style={{backgroundImage:`url(${apartImg})`}}>
                                
                                <p className="immobileTitle">Apartamento</p><p className="immobilePrice">R$2.000.000,00</p>
                            </div>
                        </Link>
                        <Link to="/immobile">
                            <div className="immobileSearch" style={{backgroundImage:`url(${apartImg})`}}>
                                
                                <p className="immobileTitle">Apartamento</p><p className="immobilePrice">R$2.000.000,00</p>
                            </div>
                        </Link>
                        <Link to="/immobile">
                            <div className="immobileSearch" style={{backgroundImage:`url(${apartImg})`}}>
                                
                                <p className="immobileTitle">Apartamento</p><p className="immobilePrice">R$2.000.000,00</p>
                            </div>
                        </Link>
                        <Link to="/immobile">
                            <div className="immobileSearch" style={{backgroundImage:`url(${apartImg})`}}>
                                
                                <p className="immobileTitle">Apartamento</p><p className="immobilePrice">R$2.000.000,00</p>
                            </div>
                        </Link>
                        <Link to="/immobile">
                            <div className="immobileSearch" style={{backgroundImage:`url(${apartImg})`}}>
                                
                                <p className="immobileTitle">Apartamento</p><p className="immobilePrice">R$2.000.000,00</p>
                            </div>
                        </Link>
                        
                    </section>

                </div>
            </main>

            <footer>
                <p>Desenvolvido por Allan Cruvinel</p>
            </footer>




        </div>
    )
};