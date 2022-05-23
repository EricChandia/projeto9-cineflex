import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function Datas({data, setFilmeDia, setFilmeHorario, setFilmeWeek}){

    function setarDataHorario(showtimeName){
        setFilmeDia(data.date);
        setFilmeHorario(showtimeName);
        setFilmeWeek(data.weekday);
    }

    return(
        <>
            <DataHorario>
            <div className="dia">{data.weekday}</div>
            <div className="data">&nbsp;- {data.date}</div>
            </DataHorario>
            <Horarios>
                {data.showtimes.map(showtime =>
                <Link style={{  textDecoration: 'none' }} to={`sessao/${showtime.id}`}>
                    <Horario onClick={() => setarDataHorario(showtime.name)}>{showtime.name}</Horario>
                </Link>
                )
                }
            </Horarios>
        </>
    );
}

function ListaDatas({idFilme, setFilmeDia, setFilmeHorario, setFilmeWeek}){
    
    const [horarios, setHorarios] = useState([]);

    useEffect(() => {
        
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        promise.then((resposta) => {
            setHorarios([...resposta.data.days]);
        });

    }, []);
    
    
    return(
        <>
            {horarios.length === 0 ? "Carregando..." : horarios.map(horario =>  <Datas data={horario} setFilmeDia={setFilmeDia} setFilmeHorario={setFilmeHorario} setFilmeWeek={setFilmeWeek}/>)}
        </>           
    );
}


export default function Filme({filmeNome, filmeImg, setFilmeDia, setFilmeHorario, setFilmeWeek}){
    const { idFilme } = useParams();

    console.log(idFilme);

    return(
        <SelecioneHorario>
            <Selecione>Selecione o horário</Selecione>
            <Lista>
                <ListaDatas idFilme={idFilme} setFilmeDia={setFilmeDia} setFilmeHorario={setFilmeHorario} setFilmeWeek={setFilmeWeek}/>
                <Espaco></Espaco>
            </Lista>
        </SelecioneHorario>
    );
}




/* Styles */

const SelecioneHorario = styled.div`
    width: 100%;
    padding: 0 5%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`

const Selecione = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
`

const Lista = styled.div`
    width: 100%;
`

const DataHorario = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;

`

const Horarios = styled.div`
    display: flex;
`
const Horario = styled.div`
    height: 35px;
    width: 60px;
    margin: 10px 10px;

    background-color: #E8833A;
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;

`
const Espaco = styled.div`
    width: 100%;
    height: 130px;
`