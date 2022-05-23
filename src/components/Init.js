import React from "react";
import styled from "styled-components";
import ListaFilmes from "./ListaFilmes";





export default function Init({setarFilme}){
    return(
        <SelecioneFilmes>
            <Selecione>Selecione o filme</Selecione>
            <ContainerFilmes>
               <ListaFilmes setarFilme={setarFilme}/>
            </ContainerFilmes>
        </SelecioneFilmes>
        );
}

const ContainerFilmes = styled.div`
    width: 100%;
    padding: 0 5%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`


/* Styles */
const SelecioneFilmes = styled.div` 
    width: 100%
`

const Selecione = styled.div`
    height: 100px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color:#293845;
`

