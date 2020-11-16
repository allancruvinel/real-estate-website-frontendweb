import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import SearchComponent from '../../components/SearchComponent'
import noImage from '../../assets/no-image-available.png';
import Cookies from 'universal-cookie';
import { FiTrash2, FiEdit } from 'react-icons/fi'



import '../Search/style.css'
import { useState } from 'react';



export default function Home() {
    const cookies = new Cookies();
    const [apartments, setApartments] = useState([]);
    const [isLogged, setIsLogged] = useState(false);
    const [parametro, setParametro] = useState('');

    useEffect(() => {
        if (cookies.get('aut') === `${process.env.REACT_APP_TOKEN_AUT}`) {
            setIsLogged(true);

        }
        
        api.get('search').then(response => {
            setApartments(response.data)
        })
    }, []);



    async function handleDeleteApartment(id) {
        const valor = window.confirm('tem certeza que deseja excluir?');
        if (valor && isLogged) {
            try {
                await api.delete('apartments/' + id);
                window.location.reload();
            }
            catch (e) {
                alert('nao foi possivel excluir ' + e);
            }

        }


    }

    async function texte(e) {
        e.preventDefault()
        console.log("enviou " + parametro);
        setApartments(null);
        try {
            await api.get('search/' + parametro).then(response => {
                setApartments(response.data)
            })

        }
        catch (e) {
            alert('nao foi possivel ' + e);
        }

    }

    return (
        <div>

            <Header />
            <main>
                <div className="container">

                    <div className="search">
                        <form onSubmit={texte}>
                            <label htmlFor="">Encontre seu Imóvel</label>
                            <input type="number" name="reference" placeholder="Número de referência" /> <label htmlFor="">OU</label>
                            <select name="preco" value={parametro} onChange={e => setParametro(e.target.value)}>
                                <option value="">Selecione um preço</option>
                                <option value="400000">até R$400.000,00</option>
                                <option value="800000">até R$800.000,00</option>
                                <option value="1200000">até R$1.200.000,00</option>
                                <option value="1200000000">acima de R$1.200.000,00</option>
                            </select>

                            <input type="submit" value="Pesquisar" />
                        </form>
                    </div>

                    <p className="destacado">Apartamentos</p>

                    <section className="propertiesSearch">

                        {!apartments ? (
                            <div className="loadingData">
                                <h1>Loading</h1>
                            </div>
                        ) : (



                                apartments.map(apartment => {
                                    return (

                                        <Link to={`/apartments/${apartment.id}`}>
                                            {apartment.images.length > 0 ? (
                                                <div className="immobileSearch" style={{ backgroundImage: `url("${apartment.images[0].url}")` }}>
                                                    {console.log(apartment.images[0].url)}
                                                    <p className="immobileTitle">{apartment.titulo}</p><p className="immobilePrice">R${apartment.preco}</p>
                                                    {isLogged ? (
                                                        <div>
                                                            <Link className="immobileErase" onClick={() => handleDeleteApartment(apartment.id)} type="button">
                                                                <FiTrash2 size={30} color="white" />
                                                            </Link>
                                                            <Link className="immobileEdit" to={`/update/${apartment.id}`} type="button">
                                                                <FiEdit size={30} color="white" />
                                                            </Link>
                                                        </div>
                                                    ) : (<div></div>)}
                                                </div>
                                            ) : (
                                                    <div className="immobileSearch" style={{ backgroundImage: `url("${noImage}")` }}>

                                                        <p className="immobileTitle">{apartment.titulo}</p><p className="immobilePrice">R${apartment.preco}</p>
                                                        {isLogged ? (
                                                            <div>
                                                                <Link className="immobileErase" onClick={() => handleDeleteApartment(apartment.id)} type="button">
                                                                    <FiTrash2 size={30} color="white" />
                                                                </Link>
                                                                <Link className="immobileEdit" to={`/update/${apartment.id}`} type="button">
                                                                    <FiEdit size={30} color="white" />
                                                                </Link>
                                                            </div>
                                                        ) : (<div></div>)}
                                                    </div>
                                                )}



                                        </Link>

                                    )
                                })


                            )}




                    </section>

                </div>
            </main>

            <footer>
                <p>Desenvolvido por Allan Cruvinel</p>
            </footer>




        </div>
    )
};