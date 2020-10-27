import React from 'react';
import {Link} from 'react-router-dom';
import '../Home/style.css'
import logoImg from '../../assets/logo.png';
import apartImg from '../../assets/30682992.jpg'
import backgroundImg from  '../../assets/rivierabackground.jpg'

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
                <div className="postcard">
                    <p>Seu Imóvel na Riviera de São Lourenço</p>
                </div>

                <div className="container">

                    <div className="search">
                        <p>Encontre seu Imóvel</p>
                        <form action="/" method="POST">
                            <input type="number" name="reference" placeholder="Referência"/> 
                            <input type="text" name="price" placeholder="Preço"/>
                            <a href="http://www.google.com"><img src="../images/searchlogo.svg" alt="Pesquisar"/></a>
                        </form>
                    </div>

                    <p className="destacado">Destaques</p>

                    <section className="properties">
                        <div className="immobile">
                            <a href="http://www.google.com"><img src={apartImg} alt="foto"></img></a>
                            <p>Apartamento</p><p>R$2.000.000,00</p>
                        </div>
                        <div className="immobile">
                            <a href="http://www.google.com"><img src={apartImg} alt="foto"/></a>
                            <p>Apartamento</p><p>R$2.000.000,00</p>
                        </div>
                        <div className="immobile">
                            <a href="http://www.google.com"><img src={apartImg} alt="foto"/></a>
                            <p>Apartamento</p><p>R$2.000.000,00</p>
                        </div>
                        <div className="immobile">
                            <a href="http://www.google.com"><img src={apartImg} alt="foto"/></a>
                            <p>Apartamento</p><p>R$2.000.000,00</p>
                        </div>
                    </section>

                    <div className="mensagembonita">
                        <h1>Sobre a Riviera</h1>
                        <p>A Riviera de São Lourenço é um bairro aberto e 100% planejado, integrado á malha 
                            viária do Município de Bertioga, a apenas 120 km da Capital do Estado de São Paulo.
                            Trata-se de um projeto de loteamento  aprovado em 1979 e em execução há 33 anos.  
                            Situada no Km 212 da Rodovia Rio-Santos, o projeto  compreende uma área total de 8.849.164,64m². 
                            Hoje, a Riviera conta com cerca de 60% de seu projeto implantado, com 11 mil unidades habitacionais, 
                            shopping Center, centro comercial e de serviços, hipermercado, restaurantes, escolas, atendimento médico 
                            e odontológico, flats e hotéis, postos de abastecimento e serviços, clube hípico, 
                            complexo tenístico, clube de golfe, além de toda a infra estrutura de saneamento
                            básico, como sistemas de captação, tratamento e distribuição de água e coleta
                                e tratamento de esgotos.</p><img src={backgroundImg} alt=""/>
                    </div>

                </div>
            </main>

            <footer>
                <p>Desenvolvido por Allan Cruvinel</p>
            </footer>




        </div>
    )
};