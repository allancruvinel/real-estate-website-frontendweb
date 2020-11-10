import React from 'react';
import {Link} from 'react-router-dom';
import '../About/style.css'
import Header from '../../components/Header';
import apartImg from '../../assets/30682992.jpg'

export default function Adm(){
    return (
        <div> 
            <Header />

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
                        
                    </section>

                </div>
            </main>

            <footer>
                <p>Desenvolvido por Allan Cruvinel</p>
            </footer>




        </div>
    )
};