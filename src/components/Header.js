import React from "react";
import styled from "styled-components";

export default function Header(){

    return(<>
    <CINEFLEX>
        CINEFLEX
    </CINEFLEX>
    <Espaco></Espaco>
    </>
  )


}

const Espaco = styled.div`
    width: 100%;
    height: 10%;   
`

const CINEFLEX = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index:1;

    width: 100%;
    height: 10%;
    background-color: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content:center;


    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #E8833A
`