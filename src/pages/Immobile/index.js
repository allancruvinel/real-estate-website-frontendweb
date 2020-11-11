import React, { useEffect, useState } from 'react';
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


                            <div className="immobilePhotoSection">
                                <Fade >
                                    <img className="immobilePhotos" src={firstPhoto} alt="logo" />
                                    <img className="immobilePhotos" src={secondPhoto} alt="logo" />
                                    <img className="immobilePhotos" src={thirdPhoto} alt="logo" />
                                </Fade>

                            </div>
                            <div className="immobileDivTitle">
                                <h1 className="immobileTitle">Apartamento frente ao mar Riviera</h1>
                                <h1 className="immobileRef">ref 500</h1>
                            </div>
                            <p className="immobileDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Donec suscipit aliquet justo, quis consequat nisl lacinia vel. Maecenas volutpat pharetra
                              laoreet. Suspendisse rhoncus nulla quis ipsum mattis tristique. Quisque ac diam ac augue 
                              facilisis suscipit. Fusce eleifend massa sed elit congue pharetra sit amet id massa. Praesent 
                              pharetra augue et quam tempus laoreet eu sed odio. <br /> In sem tortor, pulvinar in aliquet sed, 
                              scelerisque eget nulla. Vivamus luctus consequat nunc vel eleifend. Lorem ipsum dolor sit amet,
                              onsectetur adipiscing elit. Donec venenatis purus quis pharetra fringilla. <br /> Nulla in dictum 
                              elit. Donec eu orci mauris. Pellentesque condimentum mattis imperdiet. Proin et ligula et augue
                               pulvinar viverra. Nam vel ultrices lectus. Proin eget velit a sem finibus sodales a at augue. 
                               Nam facilisis dolor ultrices, laoreet sapien sed, vulputate purus. Integer hendrerit tristique 
                               pulvinar. Cras mattis, tortor eu rutrum faucibus, nibh felis ultricies quam, in vehicula urna 
                               dolor vitae sapien. Maecenas risus neque, pretium a sodales eget,  <br />lobortis vitae augue. 
                               Fusce bibendum pulvinar ornare. Ut tincidunt nunc a felis dignissim consectetur. In a egestas 
                               dolor, mattis tincidunt orci. Donec cursus magna non quam vulputate bibendum. Etiam in mi in 
                               lorem vehicula gravida.  <br />Duis dui orci, fringilla eu ultricies eu, maximus pretium massa. Nulla
                                non laoreet arcu, et interdum ipsum. Maecenas viverra lacus libero, fermentum ultricies metus 
                                pulvinar at. Donec leo diam, ultrices nec sem et, pretium pellentesque nisl. Vivamus elementum 
                                id arcu in iaculis. Cras tempus blandit lorem ut ornare. Nullam ornare ac enim eu venenatis.
                                 Cras interdum ornare arcu, ac dapibus augue tincidunt sit amet. <br />Nulla a felis commodo, 
                                 cursus neque sed, ultrices nisl. Cras ut ligula purus.</p>
                        </section>
                        <section className="immobileRightSection">
                            <div className="immobileInfo">

                                <table>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={toiletIcon} alt="" /> </td>
                                        <td className="columnName2"><p>4 banheiros</p></td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={carIcon} alt="" /> </td>
                                        <td className="columnName2"><p>3 vagas de garagem</p></td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={bedIcon} alt="" /> </td>
                                        <td className="columnName2"><p>4 dormitórios</p></td>
                                    </tr>
                                    <tr className="beginOfIcons">
                                        <td className="columnName"> <img className="immobileIcon" src={areaIcon} alt="" /> </td>
                                        <td className="columnName2"><p>142,5m²</p></td>
                                    </tr>
                                </table>

                                <p className="tituloAtributo">cond</p>
                                <p className="valorAtributo">R$20.000,00</p>


                                <p className="tituloAtributo">IPTU</p>
                                <p className="valorAtributo">R$5.000,00</p>

                                <p className="tituloAtributo">Valor:</p>
                                <p className="immobilePrice">R$2.000.000,00</p>
                                <div className="contatarAnunciante">
                                    <button><p>Contatar anunciante</p></button>
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