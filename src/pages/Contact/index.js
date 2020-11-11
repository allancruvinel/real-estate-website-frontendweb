import React from 'react';
import Header from '../../components/Header';
import '../Contact/style.css';
import tanakaImg from  '../../assets/tanaka.jpg';

export default function Contact(){
    return (
        <div> 
            
            <Header />
            <main>

                <div className="container">

                    <form action="">
                        <input type="text" placeholder="nome"/>
                        <input type="email" name="email" id="" placeholder="email"/>
                        <input type="tel" name="telefone" id="" placeholder="telefone"/>
                        <input type="text" placeholder="nome"/>
                    </form>

                </div>
            </main>

            




        </div>
    )
};