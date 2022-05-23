import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";


export default function ListaFilmes({setarFilme}){
    const [filmes, setFilmes] = useState([{}]);
    
    useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    
        promise.then(resposta => {setFilmes(resposta.data)});            
        
    }, []);

    return(filmes.map(filme => 
    <Filme onClick={() => setarFilme(filme)}> 
        <Link to={`filme/${filme.id}`}>/
        <img src={filme.posterURL} alt={filme.title}/>
        </Link>
    </Filme>));
}



const Filme = styled.div`
    width:40%;
    height: 200px;
    margin: 5% 5%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    img{
    width:95%;
    height: 95%;
    }
`