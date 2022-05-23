import {BrowserRouter, Routes, Route } from "react-router-dom";
import Init from "./components/Init.js"
import Header from "./components/Header.js"
import "./assets/css/reset.css"
import "./assets/css/style.css"
import Filme from "./components/Filme.js";
import Footer from "./components/Footer.js";
import { useState } from "react";
import Sessoes from "./components/Sessoes.js";

export default function App(){

    const [filmeId, setFilmeId] = useState(0);
    const [filmeNome, setFilmeNome] = useState(0);
    const [filmeImg, setFilmeImg] = useState("");
    const [filmeDia, setFilmeDia] = useState("");
    const [filmeHorario, setFilmeHorario] = useState();
    const [filmeWeek, setFilmeWeek] = useState();
    const [comprador, setComprador] = useState("");
    const [cpf, setCpf] = useState("");
    const [displayFooter, setDisplayFooter] = useState(false);


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
            <Route path="/filme/:idFilme/sessao/:idSessao" element={<Sessoes/>}></Route>  
        </Routes>
        {displayFooter ? <Footer filmeNome={filmeNome} filmeImg={filmeImg} filmeHorario={filmeHorario} filmeWeek={filmeWeek}/> : <></>}
        
        </BrowserRouter>


    );
}