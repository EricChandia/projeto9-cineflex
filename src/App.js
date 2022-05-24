import {BrowserRouter, Routes, Route } from "react-router-dom";
import Init from "./components/Init.js"
import Header from "./components/Header.js"
import "./assets/css/reset.css"
import "./assets/css/style.css"
import Filme from "./components/Filme.js";
import Footer from "./components/Footer.js";
import { useState } from "react";
import Sessoes from "./components/Sessoes.js";
import Sucesso from "./components/Sucesso.js"

export default function App(){

    const [filmeNome, setFilmeNome] = useState(0);
    const [filmeImg, setFilmeImg] = useState("");
    const [filmeDia, setFilmeDia] = useState("");
    const [filmeHorario, setFilmeHorario] = useState();
    const [filmeWeek, setFilmeWeek] = useState();
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const [displayFooter, setDisplayFooter] = useState(false);
    const [selAssento, setSelAssento] = useState([]);
    const [selAssentoName, setSelAssentoName] = useState([]);


    function setarFilme(filme){
        setFilmeImg(filme.posterURL);
        setFilmeNome(filme.title);
        setDisplayFooter(!displayFooter);
    }

    return(

        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Init setarFilme={setarFilme}/>}/>


            <Route path="/filme/:idFilme" element={<Filme filmeNome={filmeNome} filmeImg={filmeImg} setFilmeDia={setFilmeDia} setFilmeHorario={setFilmeHorario} setFilmeWeek={setFilmeWeek}/>}></Route>
            
            <Route path="/filme/:idFilme/sessao/:idSessao" element={<Sessoes nome={nome} cpf={cpf} setNome={setNome} setCPF={setCPF} selAssento={selAssento} setSelAssento={setSelAssento} selAssentoName={selAssentoName} setSelAssentoName={setSelAssentoName} />}></Route>  

            <Route path="/filme/:idFilme/sessao/:idSessao/sucesso" element={<Sucesso filmeNome={filmeNome} filmeDia={filmeDia} filmeHorario={filmeHorario} selAssentoName={selAssentoName} nome={nome} cpf={cpf} setDisplayFooter={setDisplayFooter}/>}></Route>  

        </Routes>
        {displayFooter ? <Footer filmeNome={filmeNome} filmeImg={filmeImg} filmeHorario={filmeHorario} filmeWeek={filmeWeek}/> : <></>}
        
        </BrowserRouter>


    );
}