import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Assentod({assento, selAssento, setSelAssento, selAssentoName, setSelAssentoName}){

    const [selecionado, setSelecionado] = useState(false);

    function selecionaAssento(assento){
        console.log(assento.id);
    
        if(selAssento.includes(assento.id)){
            console.log("retira");
            const index = selAssento.indexOf(assento.id);
            if (index > -1) {
                selAssento.splice(index, 1);
                selAssentoName.splice(index, 1);
                setSelAssento([...selAssento]);
                setSelAssentoName([...selAssentoName]);
              }
        }else{
            setSelAssento([...selAssento, assento.id]);
            setSelAssentoName([...selAssentoName, assento.name]);
        }


        setSelecionado(!selecionado);
    }


    return(
        <Assento onClick={assento.isAvailable ? () => selecionaAssento(assento) : () => {alert("Esse assento não está disponível")}} cor={assento.isAvailable ? (selecionado ? "green" : "cyan") : "pink"}>{assento.name}</Assento>

    );
}

function ListaAssentos({idSessao, selAssento, setSelAssento, selAssentoName, setSelAssentoName}){

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
            
            <Assentod assento={assento} selAssento={selAssento} setSelAssento={setSelAssento} selAssentoName={selAssentoName} setSelAssentoName={setSelAssentoName}/>


            )}
        </>           
    );
    

}


export default function Sessoes({nome, cpf, setNome, setCPF, selAssento, setSelAssento, selAssentoName, setSelAssentoName}){
    const { idSessao } = useParams();


    const reserva = {
        ids: selAssento,
        name: nome,
        cpf: cpf
    } 
    
    function validaInformacoes(){

        if(nome === "" || cpf === "" || selAssento.length === 0){
            return(false);
        }else{
            return(true);
        }
    }

    // if(nome === ""){
    //     alert("Nome inválido!");
    //     return(false);
    // }else if(cpf === ""){
    //     alert("Cpf inválido!");
    //     return false;
        
    // }else if(selAssento.length === 0){
    //     alert("Quantidade de assentos inválida!");
    //     return false;
    // }else{
    //     return(true);
    // }

    function reservarAssento(){
        console.log(nome + " " + cpf);
        console.log(selAssento);

        if(validaInformacoes() === false){
            alert("Informações inválidas!")
        }else{

            console.log("Reserva: " + reserva);

            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", reserva);

            promise.then(resposta => {console.log("Resposta: " + resposta.data)});
        }



    }

    return(
    <SelecioneAssento>
        <Selecione>Selecione o(s) assento(s)</Selecione>
        <Lista>
            <ListaAssentos idSessao={idSessao} selAssento={selAssento} setSelAssento={setSelAssento} selAssentoName={selAssentoName} setSelAssentoName={setSelAssentoName}/>
        </Lista>
            <Opcoes>
                <Selecionado><Bolinha cor={"green"}></Bolinha> Selecionado </Selecionado>
                <Disponivel><Bolinha cor={"cyan"}></Bolinha> Disponível</Disponivel>
                <Indisponivel><Bolinha cor={"pink"}></Bolinha> Indisponível</Indisponivel>
            </Opcoes>
            <Formulario>
                Nome do comprador:
                <input value={nome}  onChange={e => setNome(e.target.value)} placeholder="Digite seu nome..."></input>
                CPF do comprador:
                <input value={cpf}  onChange={e => setCPF(e.target.value)}  placeholder="Digite seu CPF..."></input>
            </Formulario>
            {validaInformacoes() ? 
                    <Link style={{  textDecoration: 'none' }} to={`sucesso`}>
                        <ReservarAssento onClick={reservarAssento}>Reservar assento(s)</ReservarAssento>
                    </Link>
                :
                    <></>
            }

            
            <Espaco></Espaco>
        
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
    width: 95%;
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