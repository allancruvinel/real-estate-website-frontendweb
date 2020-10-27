import React from 'react';

import logoImg from '../../assets/logo.png';
import apartImg from '../../assets/30682992.jpg';
import areaIcon from '../../assets/area_icon.svg';
import bedIcon from '../../assets/bed_icon.svg';
import carIcon from '../../assets/car_icon.svg';
import toiletIcon from '../../assets/toilet_icon.svg';
import mailIcon from '../../assets/mail_icon.svg';
import whatsappIcon from '../../assets/whatsapp_icon.svg';
import {Link} from 'react-router-dom';

import './style.css';

export default function Immobile(){
    let linkexterno = 'http://www.google.com.br';
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
                    <div className="immobileContent">
                        <section className="immobileleftSection">
                            <div className="immobileDivTitle">
                                <h1 className="immobileTitle">Lindo apartamento em riviera de são lourenço</h1>
                                <h1 className="immobileRef">Ref 3652</h1>
                            </div>

                            <div className="immobilePhotoSection">
                                <img src={apartImg} alt="logo"/>
                            </div>
                            <p className ="immobileDescription"> Bla bla bla bla bla bla bla bla
                             bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                               bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                 bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                   bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                     bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
                        </section>
                        <section className="immobileRightSection">
                            <div className="immobileInfo">
                                <h1 className="immobilePrice">R$1.350.000,00</h1>
                                <table>
                                    <tr>
                                        <td className="columnName">cond</td>
                                        <td>R$ 5.000,00</td>
                                    </tr>
                                    <tr>
                                        <td className="columnName">IPTU</td>
                                        <td>R$ 5.000,00</td>
                                    </tr>
                                    <tr>
                                        <td className="columnName">Permuta</td>
                                        <td>Não</td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={areaIcon} alt=""/> </td>
                                        <td className="columnName2">495m²</td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={carIcon} alt=""/> </td>
                                        <td className="columnName2">2</td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={bedIcon} alt=""/> </td>
                                        <td className="columnName2">3</td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={toiletIcon} alt=""/> </td>
                                        <td className="columnName2">4</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="immobileContact">
                                <h1 className="immobilePrice">Contato</h1>
                                <div className="contactIcons">
                                    <a href={linkexterno}><img className="contactIcon" src={mailIcon} alt="email"/></a>
                                    <a href={linkexterno}><img className="contactIcon" src={whatsappIcon} alt="whatsapp"/></a>
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