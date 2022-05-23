import styled from "styled-components";

export default function Footer({filmeNome, filmeImg, filmeHorario, filmeWeek}){


    return(

        <Escolha>
            <ImagemFilme><img src={filmeImg} alt={filmeNome} /></ImagemFilme>
            <InfFilme>
                <Titulo>{filmeNome}</Titulo>
                {filmeHorario ? <WeekdayHour>{filmeWeek} - {filmeHorario}</WeekdayHour> : <></>}    
            </InfFilme>
        </Escolha>

    );
}

const InfFilme = styled.div`
     margin-left: 5%;
`

const WeekdayHour = styled.div`
   

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: #293845;
`

const ImagemFilme = styled.div`
    width:20%;
    height: 90%;
    background-color: white;

    display:flex;
    align-items: center;
    justify-content: center;
`

const Titulo = styled.div`

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: #293845;

`

const Escolha = styled.div`
    width: 100%;
    height: 117px;
    bottom:0;
    left: 0;
    z-index: 1;
    position: fixed;

    padding: 10px 10px;

    background-color: #DFE6ED;
    border: 1px solid #9EADBA;

    display: flex;
    align-items: center;

    img{
        width:70%;
        height:80%;
    }
`