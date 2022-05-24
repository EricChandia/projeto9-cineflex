import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom"



export default function Sucesso({filmeNome, filmeDia, filmeHorario, selAssentoName, nome, cpf, setDisplayFooter}){
    const navigate = useNavigate();
    
    function voltarHome(){

        setDisplayFooter(false);
        navigate("/");
    }

    return(
        <ReservaSucesso>
            <Pedido>Pedido feito com sucesso!</Pedido>
            <Titulo>Filme e Sessão</Titulo>
            <p><Sub>{filmeNome}</Sub></p>
            <p><Sub>{filmeDia} {filmeHorario}</Sub></p>
            <Titulo>Ingressos</Titulo>
            {selAssentoName.map(assento => 
                <p><Sub>Assento {assento}</Sub></p>
            )}
            <Titulo>Comprador</Titulo>
            <p><Sub>Nome: {nome}</Sub></p>
            <p><Sub>CPF: {cpf}</Sub></p>
            <BotaoHome onClick={() => voltarHome()}>Voltar para Home</BotaoHome>
        </ReservaSucesso>
    );
}

const ReservaSucesso = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Pedido = styled.div`
    width: 100%;
    height: 110px;
    padding: 0 25%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
`

const Titulo = styled.div`
    width: 100%;
    margin-top: 20px;


    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #293845;


`
const Sub = styled.div`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color:#293845;
`

const BotaoHome = styled.div`
    width: 60%;
    height: 42px;
    margin-top: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #E8833A;
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

    color: #FFFFFF;
`