import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useToken } from "../context/Token";
import styled from 'styled-components';
import axios from 'axios';

export default function SingIn() {
    const [userInfos, setUserInfos] = useState({
        email: '',
        password: ''
    })
    const [load, setLoad] = useState(false);
    const { setToken } = useToken();
    const navigate = useNavigate();

    function login(event) {
      event.preventDefault(); 
      setLoad(true);
      const promisse = axios.post("http://localhost:5000/login", userInfos);
      promisse.then(response => {
          const { data } = response;
          console.log(data);
          setToken(data.token);
          navigate("/wallet");
          setLoad(false);
      })
      promisse.catch(() => {
          setLoad(false);
          warning()
      })
  }

  function warning() {
      alert('Não foi possível fazer o login');
  }
    return !load ? (
        <Main>
            <H1>MyWallet</H1>
            <Form onSubmit={login}>
                <input type='text' placeholder='E-mail' onChange={e => setUserInfos({ ...userInfos, email: e.target.value })}></input>
                <input type='password' placeholder='Senha' onChange={e => setUserInfos({ ...userInfos, password: e.target.value })}></input>
                <button type='submit'>Entrar</button>
            </Form>
            <Link to="/singup">
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </Main>
    ) : (
        <Main>
            <H1>MyWallet</H1>
            <Form>
                <input type='text' placeholder='E-mail' onChange={e => setUserInfos({ ...userInfos, email: e.target.value })}></input>
                <input type='password' placeholder='Senha' onChange={e => setUserInfos({ ...userInfos, password: e.target.value })}></input>
                <Button>
                    <DivLoading>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </DivLoading>
                </Button>
            </Form>
            <p>Já tem uma conta? Entre agora!</p>
        </Main>
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
    background: #A328D6;
    border-radius: 5px;
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

const DivLoading = styled.div`
display: inline-block;
position: relative;
width: 80px;
height: 80px;
 
div {
    position: absolute;
    top: 14px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #cef;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`

const Button = styled.button`
width: 326px;
height: 46px;
background: #A328D6;
border-radius: 5px;
border: 1px solid #8C11BE;
`