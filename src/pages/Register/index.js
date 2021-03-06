import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header';
import '../Register/style.css'
import api from '../../services/api';
import Cookies from 'universal-cookie';


export default function Register() {




    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [nrApto, setNrApto] = useState('');
    const [nmPredio, setNmPredio] = useState('');
    const [nrTorre, setNrTorre] = useState('');
    const [preco, setPreco] = useState('');
    const [cond, setCond] = useState('');
    const [iptu, setIptu] = useState('');
    const [bairro, setBairro] = useState('');
    const [dtVenc, setDtVenc] = useState(Date);
    const [aUtil, setAUtil] = useState('');
    const [vGaragem, setVGaragem] = useState('');
    const [banh, setBanh] = useState('');
    const [suite, setSuite] = useState('');
    const [dorm, setDorm] = useState('');
    const [churras, setChurras] = useState(false);
    const [piscina, setPiscina] = useState(false);
    const [playground, setPlayground] = useState(false);
    const [poli, setPoli] = useState(false);
    const [sFestas, setSFestas] = useState(false);
    const [sauna, setSauna] = useState(false);
    const [sJogos, setSJogos] = useState(false);
    const [ativo, setAtivo] = useState(false);
    const [btn,setBtn] = useState(false);
    const [images, setImages] = useState([])

    function handleSelectedImages(event) {
        console.log(event.target.files);
        if (!event.target.files) {
            console.log('entrounoNull')
            return;
        }

        const imagesrendered = event.target.files

        setImages(imagesrendered)

        console.log(images);
    }

    async function createAp(e) {
        e.preventDefault();
        
        console.log(dtVenc);
        if (titulo === '' || descricao === '' || nrApto === '' || nmPredio === '' || nrTorre === '' || preco === '' || cond === '' || iptu === '' || bairro === '' || dtVenc === '' || aUtil === '' || vGaragem === '' || banh === '' || suite === '' || dorm === '') {
            alert('preencha todos os campos!')
            return null;
        }
        if(images.length===0){
            alert('Insira ao menos uma imagem');
            return null;
        }

        setBtn(true);


        const dataraw = {
            titulo,
            descricao,
            nrApto,
            nmPredio,
            nrTorre,
            preco,
            cond,
            iptu,
            bairro,
            dtVenc,
            aUtil,
            vGaragem,
            banh,
            suite,
            dorm,
            churras,
            piscina,
            playground,
            poli,
            sFestas,
            sauna,
            sJogos,
            ativo,
            images
        }

        console.log(dataraw);

        const data = new FormData();

        data.append('titulo', titulo)
        data.append('descricao', descricao)
        data.append('nrApto', nrApto)
        data.append('nmPredio', nmPredio)
        data.append('nrTorre', nrTorre)
        data.append('preco', preco)
        data.append('cond', cond)
        data.append('iptu', iptu)
        data.append('bairro', bairro)
        data.append('dtVenc', dtVenc)
        data.append('aUtil', aUtil)
        data.append('vGaragem', vGaragem)
        data.append('banh', banh)
        data.append('suite', suite)
        data.append('dorm', dorm)
        data.append('churras', String(churras))
        data.append('piscina', String(piscina))
        data.append('playground', String(playground))
        data.append('poli', String(poli))
        data.append('sFestas', String(sFestas))
        data.append('sauna', String(sauna))
        data.append('sJogos', String(sJogos))
        data.append('ativo', String(ativo))

        for (var i = 0; i < images.length; i++) {
            data.append('images', images[i])
        }

        console.log(data);

        try {
            await api.post('/register', data, {
                headers: {
                    Authorization: "teste"
                }
            })
            alert('cadastrado com sucesso!')
            setBtn(false);
            history.push('/search')



        } catch (err) {
            alert('Erro ao tentar cadastrar usuario tente novamente ' + err);
            console.log(dataraw)
        }
    }

    const handleClickChurras = () => setChurras(!churras);
    const handleClickPiscina = () => setPiscina(!piscina);
    const handleClickPlayground = () => setPlayground(!playground);
    const handleClickPoli = () => setPoli(!poli);
    const handleClickSFestas = () => setSFestas(!sFestas);
    const handleClickSauna = () => setSauna(!sauna);
    const handleClickSJogos = () => setSJogos(!sJogos);
    const handleClickAtivo = () => setAtivo(!ativo);




    /*state = {
        selectedFile: null
    }
    
    
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
        console.log(this.state);
    }



    fileUploadHandler = () =>{
        alert("entrou aqui")
        
        const fd = new FormData();
        fd.append('image',this.state.selectedFile,this.state.selectedFile.name);
        console.log(fd);
        alert("SAINDO DAQUI")
        axios.post('https://api.imgur.com/3/image',fd);
    } */
    const cookies = new Cookies();
    const history = useHistory();
    if (cookies.get('aut') !== `${process.env.REACT_APP_TOKEN_AUT}`) {
        history.push('/login');
    }


    return (
        <div>
            <Header />

            <main>
                <div className="container">
                    <div className="register">
                        <form onSubmit={createAp}>
                            <p>Informações escondidos</p>
                            <input type="text" name="bairro" value={bairro} onChange={e => setBairro(e.target.value)} placeholder="Bairro" />
                            <input type="text" name="nmPredio" value={nmPredio} onChange={e => setNmPredio(e.target.value)} placeholder="Nome do Prédio" />
                            <input type="number" name="nrTorre" value={nrTorre} onChange={e => setNrTorre(e.target.value)} placeholder="Numero da Torre" />
                            <input type="text" name="nrApto" value={nrApto} onChange={e => setNrApto(e.target.value)} placeholder="Numero do Apartamento" />
                            <label htmlFor="dtVenc">Vencimento</label>
                            <input type="date" name="dtVenc" value={dtVenc} onChange={e => setDtVenc(e.target.value)} />
                            <label htmlFor="ativo">Venda ativa</label>
                            <input type="checkbox" name="ativo" onClick={handleClickAtivo} checked={ativo} />


                            <p>Informações publicas</p>

                            <input type="text" name="titulo" value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Titulo do Anuncio" />
                            <textarea name="descricao" value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Descrição do Anuncio"></textarea>

                            <input type="number" name="preco" value={preco} onChange={e => setPreco(e.target.value)} placeholder="Preço" />
                            <input type="number" name="cond" value={cond} onChange={e => setCond(e.target.value)} placeholder="Condominio" />
                            <input type="number" name="iptu" value={iptu} onChange={e => setIptu(e.target.value)} placeholder="IPTU" />
                            <input type="number" name="aUtil" value={aUtil} onChange={e => setAUtil(e.target.value)} placeholder="Área Util" />
                            <input type="number" name="banh" value={banh} onChange={e => setBanh(e.target.value)} placeholder="Banheiro" />
                            <input type="number" name="suite" value={suite} onChange={e => setSuite(e.target.value)} placeholder="Suite" />
                            <input type="number" name="dorm" value={dorm} onChange={e => setDorm(e.target.value)} placeholder="Dormitórios" />
                            <input type="number" name="vGaragem" value={vGaragem} onChange={e => setVGaragem(e.target.value)} placeholder="Vagas de Garagem" />


                            <p>Informacoes Adicionais</p>

                            <label htmlFor="churras">Churrasqueira</label>
                            <input type="checkbox" name="churras" onClick={handleClickChurras} checked={churras} />
                            <label htmlFor="piscina">Piscina</label>
                            <input type="checkbox" name="piscina" onClick={handleClickPiscina} checked={piscina} />
                            <label htmlFor="playground">Playground</label>
                            <input type="checkbox" name="playground" onClick={handleClickPlayground} checked={playground} />
                            <label htmlFor="poli">Quadra Poliesportiva</label>
                            <input type="checkbox" name="poli" onClick={handleClickPoli} checked={poli} />
                            <label htmlFor="sFestas">Salão de Festas</label>
                            <input type="checkbox" name="sFestas" onClick={handleClickSFestas} checked={sFestas} />
                            <label htmlFor="sauna">Sauna</label>
                            <input type="checkbox" name="sauna" onClick={handleClickSauna} checked={sauna} />
                            <label htmlFor="sJogos">Salão de Jogos</label>
                            <input type="checkbox" name="sJogos" onClick={handleClickSJogos} checked={sJogos} />



                            <input type="file" name="images" multiple onChange={handleSelectedImages} />

                            <button disabled={btn} className="button" type="submit">Cadastrar</button>

                        </form>
                    </div>

                </div>
            </main>

            <footer>
                <p>Desenvolvido por Allan Cruvinel</p>
            </footer>




        </div>
    )

};