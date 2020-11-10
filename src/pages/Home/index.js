import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SearchComponent from '../../components/SearchComponent'
import apartImg from '../../assets/30682992.jpg'
import backgroundImg from '../../assets/rivierabackground.jpg'
import '../Home/style.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Header />

            <main>
                <div className="postcard">
                    <p>Seu Imóvel na Riviera de São Lourenço</p>
                </div>

                <div className="container">

                    <SearchComponent />

                    <p className="destacado">DESTAQUES</p>

                    <section className="propertiesSearch">
                        <Link to={`/apartments`}>
                            <div className="immobileSearch" style={{ backgroundImage: `url("${apartImg}")` }}>

                                <p className="immobileTitle">Lindo Apartamento</p><p className="immobilePrice">R$2.000.000</p>
                            </div>
                        </Link>
                        <Link to={`/apartments`}>
                            <div className="immobileSearch" style={{ backgroundImage: `url("${apartImg}")` }}>

                                <p className="immobileTitle">Lindo Apartamento</p><p className="immobilePrice">R$2.000.000</p>
                            </div>
                        </Link>
                        <Link to={`/apartments`}>
                            <div className="immobileSearch" style={{ backgroundImage: `url("${apartImg}")` }}>

                                <p className="immobileTitle">Lindo Apartamento</p><p className="immobilePrice">R$2.000.000</p>
                            </div>
                        </Link>
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
                                e tratamento de esgotos.</p><img src={backgroundImg} alt="" />
                    </div>

                </div>
            </main>


            <Footer />



        </div>
    )
};