import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { Link, useHistory } from 'react-router-dom';
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
    const [apartment, setApartment] = useState();
    const [isLogged, setIsLogged] = useState(false);
    const [parametro, setParametro] = useState('');
    const [referencia, setReferencia] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (cookies.get('aut') === `${process.env.REACT_APP_TOKEN_AUT}`) {
            setIsLogged(true);

        }

        api.get('search/' + parametro).then(response => {
            if (!isLogged) {
                setApartments(response.data.filter(response => response.ativo === true && Date.now() < Date.parse(response.dtVenc)))
            }
            else {
                setApartments(response.data);
            }
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

    async function applySearch(e) {
        e.preventDefault()
        console.log("enviou " + parametro);
        setApartments(null);

        if (referencia !== '') {
            try {
                await api.get('apartments/' + referencia).then(response => {
                    setApartment(response.data);
                })

                if (!isLogged) {
                    history.push('/apartments/' + referencia);
                }
                else{
                    history.push('/update/' + referencia);
                }

            }
            catch (e) {
                alert('Apartamento não encontrado com esse numero de referencia');
            }

        }

        try {
            await api.get('search/' + parametro).then(response => {
                if (!isLogged) {
                    setApartments(response.data.filter(response => response.ativo === true && Date.now() < Date.parse(response.dtVenc)))
                }
                else {
                    setApartments(response.data);
                }
            })


            //setApartments(apartments.filter(apartments=> apartments.dtVenc < Date.now()));

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
                        <form onSubmit={applySearch}>
                            <label htmlFor="">Encontre seu Imóvel</label>
                            <input type="number" name="reference" placeholder="Número de referência" onChange={e => setReferencia(e.target.value)} /> <label htmlFor="">OU</label>
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

                                                    <p className="immobileTitle">{apartment.titulo}</p><p className="immobilePrice">R${apartment.preco}</p>
                                                    {isLogged ? (
                                                        <div>
                                                            <Link className="immobileErase" onClick={() => handleDeleteApartment(apartment.id)} type="button">
                                                                <FiTrash2 size={30} color="white" />
                                                            </Link>
                                                            <Link className="immobileEdit" to={`/update/${apartment.id}`} type="button">
                                                                <FiEdit size={30} color="white" />
                                                            </Link>
                                                            {apartment.ativo === true && Date.now() < Date.parse(apartment.dtVenc) ? (
                                                                <div></div>

                                                            ) : (
                                                                    <h2>{console.log('dataVence é ' + Date.parse(apartment.dtVenc) + ' data atual é ' + Date.now())}VENCIDO OU INATIVO</h2>

                                                                )}

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