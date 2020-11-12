import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../Contact/style.css';
import { useParams,useHistory } from 'react-router-dom';
import { useState } from 'react';
import api from '../../services/api'

export default function Contact() {


    const history = useHistory();
    const { id } = useParams();
    const [message, setMessage] = useState('Olá, gostaria de mais informações sobre o empreendimento de referência ' + id + '.');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [btn,setBtn] = useState(true);
    var defaultText;
    if (id !== undefined) {
        defaultText = 'Olá, gostaria de mais informações sobre o empreendimento de referência ' + id + '.';
    }
    useEffect(() => {
        if(id === undefined){
            setMessage('');
        }
    }, []);

    //setDefaultText('olá gostaria de saber mais sobre o empreendimento de referencia '+id);



    async function sendMail(e) {
        e.preventDefault();
        document.getElementsByClassName('btnInput')
        if(name===''||email===""||tel===""||message===""){
            return alert('preencha todos os campos!');
        }
        setBtn(false);
        try {
            await api.post('/sendmail',{name,email,tel,message});
            alert('Obrigado pelo contato! responderemos em breve');
            history.push('/');
        }catch(e){
           return alert('Login ou Senha Incorreto');
        }

        

    }



    return (
        <div>

            <Header />
            <main>

                <div className="postcard">
                    <p>Seu Imóvel na Riviera de São Lourenço</p>
                </div>
                <div className="contactSection">
                    <div className="container">
                        <p>Preencha seus dados</p>
                        <form onSubmit={sendMail}>
                            <input className="campoInput" name="name" type="text" placeholder="Nome" onChange={e => setName(e.target.value)} />
                            <input className="campoInput" name="email" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                            <input className="campoInput" name="tel" type="text" placeholder="Telefone" onChange={e => setTel(e.target.value)} />
                            <textarea className="campoInputMessage" name="mensagem" id="mensagem" cols="30" rows="10" placeholder="Mensagem" onChange={e => setMessage(e.target.value)}>{defaultText}</textarea>
                            <input disabled={!btn} className="btnInput" type="submit" value="Enviar" />

                        </form>
                    </div>
                </div>


            </main>

            <Footer />






        </div>
    )
};