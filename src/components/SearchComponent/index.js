
import React from 'react';
import logoImg from '../../assets/sss@2x.png';
import { Link } from 'react-router-dom';

import '../SearchComponent/style.css';
import { useState } from 'react';

export default function Header() {

    const [parametro, setParametro] = useState('');

    function texte(e) {
        e.preventDefault()
        console.log("enviou " + parametro);
    }

    return (
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
    )
}