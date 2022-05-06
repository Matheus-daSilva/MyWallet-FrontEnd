import { Link } from "react-router-dom";
import { useState } from 'react';
import styled from 'styled-components';

export default function SingIn() {
    const [userInfos, setUserInfos] = useState({
        email: '',
        password: ''
    })
    const [load, setLoad] = useState(false);

    return !load ? (
        <Main>
            <H1>MyWallet</H1>
            <Form>
                <input type='text' placeholder='E-mail' onChange={e => setUserInfos({ ...userInfos, email: e.target.value })}></input>
                <input type='password' placeholder='Senha' onChange={e => setUserInfos({ ...userInfos, password: e.target.value })}></input>
                <button>Entrar</button>
            </Form>
            <Link to="/singup">
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </Main>
    ) : (
        <p>oiioii</p>
    )

}

const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;

p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    margin-top: 36px;
    color: #FFFFFF;
}
`

const H1 = styled.h1`
display: flex;
justify-content: center;
width: 100%;
height: 50px;
margin-top: 159px;
font-family: 'Saira Stencil One';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 50px;
color: #FFFFFF;
`

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 24px;

input {
    width: 326px;
    height: 58px;
    margin-bottom: 13px;
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #8C11BE;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 15px;
}

input::placeholder {
    color: #000000;
}

button {
    width: 326px;
    height: 46px;
    color: #FFFFFF;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: 1px solid #8C11BE;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
}
`