import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';
import Cookies from 'universal-cookie';
import {useHistory} from 'react-router-dom';
import '../Login/style.css';

export default function Contact() {
    const cookies = new Cookies();
    const history = useHistory();
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    
    async function checkLogin(e){
        e.preventDefault();
        if(username===''||password===""){
            return alert('Preencha todos os campos');
        }
        try {
            const values = await api.post('/login',{username,password});
            const cookies = new Cookies();
            console.log(values.data.aut);
            cookies.set('aut',values.data.aut);
            history.push('/');
        }catch(e){
           return alert('Login ou Senha Incorreto');
        }
    }

    
    if (cookies.get('aut')===`${process.env.REACT_APP_TOKEN_AUT}`) {
        history.push('/');
    }

    return (
        <div>

            <Header />
            <main>
                <div className="contactSection">
                    <div className="container">
                        <p>Log in</p>
                        <form onSubmit={checkLogin}>
                            <input className="campoInputLogin" onChange={e => setUsername(e.target.value)} name="login" type="text" placeholder="login" />
                            <input className="campoInputLogin" onChange={e => setPassword(e.target.value)} name="password" type="password" placeholder="senha"/>
                            <input className="btnInput" type="submit" value="Entrar"/>
                        </form>
                    </div>
                </div>


            </main>

            <Footer />






        </div>
    )
};