import React, { useEffect, useState } from 'react';

import logoImg from '../../assets/logo.png';
import apartImg from '../../assets/30682992.jpg';
import areaIcon from '../../assets/area_icon.svg';
import bedIcon from '../../assets/bed_icon.svg';
import carIcon from '../../assets/car_icon.svg';
import toiletIcon from '../../assets/toilet_icon.svg';
import mailIcon from '../../assets/mail_icon.svg';
import whatsappIcon from '../../assets/whatsapp_icon.svg';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';

import './style.css';



export default function Immobile() {
    const { id } = useParams();
    const [apartment, setApartment] = useState();
    useEffect(() => {
        api.get(`apartments/${id}`).then(response => {
            setApartment(response.data);

        })
    }, []);

    if (!apartment) {
        return <p>carregando...</p>;
    }




    return (
        <div>
            <header>
                {console.log(apartment.images[0].url)}

                <div className="topo">
                    <div className="container" >
                        <p>(13) 9 9718 5549</p>
                        <p>tanaka@ramonalvares.com.br</p>
                    </div>
                </div>
                <div className="menu">
                    <div className="container">
                        <img src={logoImg} alt="logo" />
                        <p>Creci: 2352:56</p>
                        <Link className="botao_menu" to="/about">SOBRE</Link>
                        <Link className="botao_menu" to="/search">IMÓVEIS</Link>
                        <Link className="botao_menu" to="/">HOME</Link>
                    </div>
                </div>
            </header>

            <main>
                <div className="container">
                    <div className="immobileContent">
                        <section className="immobileleftSection">
                            <div className="immobileDivTitle">
                                <h1 className="immobileTitle">{apartment.titulo}</h1>
                                <h1 className="immobileRef">ref {apartment.id}</h1>
                            </div>

                            <div className="immobilePhotoSection">
                                <img src={apartment.images[0].url} alt="logo" />
                            </div>
                            <p className="immobileDescription"> {apartment.descricao} </p>
                        </section>
                        <section className="immobileRightSection">
                            <div className="immobileInfo">
                                <h1 className="immobilePrice">R${apartment.preco}</h1>
                                <table>
                                    <tr>
                                        <td className="columnName">cond</td>
                                        <td>R$ {apartment.cond}</td>
                                    </tr>
                                    <tr>
                                        <td className="columnName">IPTU</td>
                                        <td>R$  {apartment.iptu}</td>
                                    </tr>
                                    <tr>
                                        <td className="columnName">Permuta</td>
                                        <td>Não</td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={areaIcon} alt="" /> </td>
                                        <td className="columnName2"> {apartment.aUtil}m²</td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={carIcon} alt="" /> </td>
                                        <td className="columnName2">{apartment.vGaragem}</td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={bedIcon} alt="" /> </td>
                                        <td className="columnName2">{apartment.dorm}</td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={toiletIcon} alt="" /> </td>
                                        <td className="columnName2">{apartment.banh}</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="immobileContact">
                                <h1 className="immobilePrice">Contato</h1>
                                <div className="contactIcons">
                                    <a href=""><img className="contactIcon" src={mailIcon} alt="email" /></a>
                                    <a href=""><img className="contactIcon" src={whatsappIcon} alt="whatsapp" /></a>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </main>

            <footer>
                <p>Desenvolvido por Allan Cruvinel</p>
            </footer>




        </div>
    )
}