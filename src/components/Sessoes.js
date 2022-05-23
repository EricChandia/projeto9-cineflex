import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ListaAssentos({idSessao}){

    const [assentos, setAssentos] = useState([]);

    useEffect(() => {
        
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise.then((resposta) => {
            setAssentos([...resposta.data.seats]);
        });

    }, []);

        
    return(
        <>
            {assentos.length === 0 ? "Carregando..." : assentos.map(assento => 
            <Assento cor={assento.isAvailable ? "cyan" : "pink"}>{assento.name}</Assento>)}
        </>           
    );
    

}


export default function Sessoes(){
    const { idSessao } = useParams();


    return(
    <SelecioneAssento>
        <Selecione>Selecione o(s) assento(s)</Selecione>
        <Lista>
            <ListaAssentos idSessao={idSessao}/>
            <Opcoes>
                <Selecionado><Bolinha cor={"green"}></Bolinha> Selecionado </Selecionado>
                <Disponivel><Bolinha cor={"cyan"}></Bolinha> Disponível</Disponivel>
                <Indisponivel><Bolinha cor={"pink"}></Bolinha> Indisponível</Indisponivel>
            </Opcoes>
            <Formulario>
                Nome do comprador:
                <input placeholder="Digite seu nome..."></input>
                CPF do comprador:
                <input placeholder="Digite seu CPF..."></input>
            </Formulario>
            <ReservarAssento>Reservar assento(s)</ReservarAssento>
            <Espaco></Espaco>
        </Lista>
    </SelecioneAssento>

    );
}

const ReservarAssento = styled.div`
    width: 225px;
    height: 42px;
    margin-top: 10px;
    
    background-color: #E8833A;
    color: white;
    border-radius: 3px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

`

const Formulario = styled.div`
    width: 100%;
    margin-top: 10px;


    input{
    width: 90%;
    height: 45px;

    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #AFAFAF;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    }
`

const SelecioneAssento = styled.div`
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
    display: flex;
    flex-wrap: wrap;
`

const Espaco = styled.div`
    width: 100%;
    height: 130px;
`

const Assento = styled.div`
    width: 22px;
    height: 22px;
    margin: 5px 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    border-radius: 100%;
    background-color: ${props => props.cor};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
`


const Opcoes = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;


`

const Selecionado = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    
`


const Disponivel = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

`


const Indisponivel = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;  

`

const Bolinha = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 100%;

    background-color: ${props => props.cor}
`