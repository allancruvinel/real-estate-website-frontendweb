import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import areaIcon from '../../assets/area_icon.svg';
import bedIcon from '../../assets/bed_icon.svg';
import carIcon from '../../assets/car_icon.svg';
import toiletIcon from '../../assets/toilet_icon.svg';
import mailIcon from '../../assets/mail_icon.svg';
import whatsappIcon from '../../assets/whatsapp_icon.svg';
import { useParams } from 'react-router-dom';
import firstPhoto from '../../assets/30682992.jpg';
import api from '../../services/api';

import './style.css';



export default function Immobile() {
    const { id } = useParams();
    const [apartment, setApartment] = useState();

    /*
    useEffect(() => {
        
        api.get(`apartments/${id}`).then(response => {
            setApartment(response.data);
        
        })
    }, []);
    */

    /*
    if (!apartment) {
        return <p>carregando...</p>;
    }
    */




    return (
        <div>
            <Header />

            <main>
                <div className="container">
                    <div className="immobileContent">
                        <section className="immobileleftSection">
                            <div className="immobileDivTitle">
                                <h1 className="immobileTitle">Lindo ap</h1>
                                <h1 className="immobileRef">ref 500</h1>
                            </div>

                            <div className="immobilePhotoSection">
                                <img src={firstPhoto} alt="logo" />
                            </div>
                            <p className="immobileDescription"> Lindo ap </p>
                        </section>
                        <section className="immobileRightSection">
                            <div className="immobileInfo">
                                <h1 className="immobilePrice">R$2.000.000,00</h1>
                                <table>
                                    <tr>
                                        <td className="columnName">cond</td>
                                        <td>R$ 600,00</td>
                                    </tr>
                                    <tr>
                                        <td className="columnName">IPTU</td>
                                        <td>R$ 1.250,00</td>
                                    </tr>
                                    <tr>
                                        <td className="columnName">Permuta</td>
                                        <td>Não</td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={areaIcon} alt="" /> </td>
                                        <td className="columnName2"> 400m²</td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={carIcon} alt="" /> </td>
                                        <td className="columnName2">3</td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={bedIcon} alt="" /> </td>
                                        <td className="columnName2">8</td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={toiletIcon} alt="" /> </td>
                                        <td className="columnName2">4</td>
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