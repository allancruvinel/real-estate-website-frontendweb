import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import SearchComponent from '../../components/SearchComponent'
import apartImg from '../../assets/30682992.jpg'



import '../Search/style.css'
import { useState } from 'react';



export default function Home() {

    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        api.get('apartments').then(response => {
            setApartments(response.data)
        })
    }, []);

    if (!apartments) {
        return <p>carregando...</p>;
    }

    return (
        <div>

            <Header />
            <main>
                <div className="container">

                    <SearchComponent />

                    <p className="destacado">Apartamentos</p>

                    <section className="propertiesSearch">
                        {
                            apartments.map(apartment => {
                                console.log(apartment);
                                return (

                                    <Link to={`/apartments/${apartment.id}`}>
                                        <div className="immobileSearch" style={{ backgroundImage: `url("${apartment.images[0].url}")` }}>
                                            {console.log(apartment.images[0].url)}
                                            <p className="immobileTitle">{apartment.titulo}</p><p className="immobilePrice">R${apartment.preco}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
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

                </div>
            </main>

            <footer>
                <p>Desenvolvido por Allan Cruvinel</p>
            </footer>




        </div>
    )
};