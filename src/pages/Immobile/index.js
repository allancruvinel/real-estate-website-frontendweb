import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Slide, Fade } from 'react-slideshow-image'
import Header from '../../components/Header';
import areaIcon from '../../assets/area.svg';
import bedIcon from '../../assets/bed_icon.svg';
import carIcon from '../../assets/car_icon.svg';
import toiletIcon from '../../assets/toilet_icon.svg';
import mailIcon from '../../assets/mail_icon.svg';
import whatsappIcon from '../../assets/whatsapp_icon.svg';
import { useParams } from 'react-router-dom';
import firstPhoto from '../../assets/30682992.jpg';
import secondPhoto from '../../assets/second.jpg';
import thirdPhoto from '../../assets/third.jpg'
import api from '../../services/api';

import './style.css';
import 'react-slideshow-image/dist/styles.css'



export default function Immobile() {
    const { id } = useParams();
    const [apartment, setApartment] = useState();
    const history = useHistory();
    
    useEffect(() => {
        
        api.get(`apartments/${id}`).then(response => {
            setApartment(response.data);
        
        })
    }, []);
    

    
    if (!apartment) {
        return <p>carregando...</p>;
    }

    function contactAbout(e){
        e.preventDefault()
        history.push(`/contact/${apartment.id}`);
    }
    




    return (
        <div>
            <Header />

            <main>
                <div className="container">
                    <div className="immobileContent">
                        <section className="immobileleftSection">


                            <div className="immobilePhotoSection">
                                <Fade >
                                    {apartment.images.map(apartment=>{
                                        return (
                                            <img className="immobilePhotos" src={apartment.url} alt="logo" />
                                        )
                                    })}
                                
                                </Fade>

                            </div>
                            <div className="immobileDivTitle">
                                <h1 className="immobileTitle">{apartment.titulo}</h1>
                                <h1 className="immobileRef">ref {apartment.id}</h1>
                            </div>
                            <p className="immobileDescription">{apartment.descricao}</p>
                        </section>
                        <section className="immobileRightSection">
                            <div className="immobileInfo">

                                <table>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={toiletIcon} alt="" /> </td>
                                        <td className="columnName2"><p>{apartment.banh} banheiros</p></td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={carIcon} alt="" /> </td>
                                        <td className="columnName2"><p>{apartment.vGaragem} vagas de garagem</p></td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={bedIcon} alt="" /> </td>
                                        <td className="columnName2"><p>{apartment.dorm} dormitórios</p></td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={areaIcon} alt="" /> </td>
                                        <td className="columnName2"><p>{apartment.aUtil}m²</p></td>
                                    </tr>
                                </table>

                                <p className="tituloAtributo">cond</p>
                                <p className="valorAtributo">R${apartment.cond}</p>


                                <p className="tituloAtributo">IPTU</p>
                                <p className="valorAtributo">R${apartment.iptu}</p>

                                <p className="tituloAtributo">Valor:</p>
                                <p className="immobilePrice">R${apartment.preco}</p>
                                <div className="contatarAnunciante">
                                    <button onClick={contactAbout}><p>Contatar anunciante</p></button>
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