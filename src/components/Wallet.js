import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useToken } from "../context/Token";
import singout from "./../assets/img/singout.png";
import add from "./../assets/img/add.png";
import remove from "./../assets/img/remove.png";
import styled from 'styled-components';
import axios from 'axios';

export default function Wallet() {
    const { token } = useToken();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [controler, setControler] = useState(0)
    const [value, setValue] = useState({
        cash: '',
        cescription: ''
    })
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const request = axios.get("http://localhost:5000/wallet", config);
        request.then(response => {
            const { data } = response;
            setItems(data);
        });
        request.catch(warning);
    }, [])

    function warning() {
        alert("Não foi possível fazer essa requisição");
    }

    function logOut() {
        const promisse = axios.delete("http://localhost:5000/wallet", {token});
        promisse.then(response => {
            setControler(0);
            navigate("/wallet");
        });
        promisse.catch(warning);
    }

    if (items.length === 0 && controler === 0) {
        return (
            <Section>
                <Header>
                    <p>Olá, ${ }</p>
                    <img src={singout} alt="botão de saida" onClick={() => logOut()}></img>
                </Header>
                <Notes>
                    <p>Não há registros de entrada ou saída</p>
                </Notes>
                <Buttons>
                    <Button onClick={() => setControler(1)}>
                        <img src={add} alt="adicionar saldo"></img>
                        <p>Nova entrada</p>
                    </Button>
                    <Button onClick={() => setControler(2)}>
                        <img src={remove} alt="remover saldo"></img>
                        <p>Nova saída</p>
                    </Button>
                </Buttons>
            </Section>
        )
    }

    if (controler === 1) {
        return (
            <Section>
                <P>Nova Entrada</P>
                <Form onSubmit={() => setControler(0)}>
                    <input type='text' placeholder='Valor' onChange={e => setValue({ ...value, cash: e.target.value })}></input>
                    <input type='text' placeholder='Descrição' onChange={e => setValue({ ...value, description: e.target.value })}></input>
                    <button type="submit">Salvar entrada</button>
                </Form>
            </Section>
        )
    }

    if (controler === 2) {
        return (
            <Section>
                <P>Nova Saída</P>
                <Form onSubmit={() => setControler(0)}>
                    <input type='text' placeholder='Valor' onChange={e => setValue({ ...value, cash: e.target.value })}></input>
                    <input type='text' placeholder='Descrição' onChange={e => setValue({ ...value, description: e.target.value })}></input>
                    <button type="submit">Salvar saída</button>
                </Form>
            </Section>
        )
    }

}

const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 25px;
width: 326px;
height: 31px;

p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
}

img {
    width: 23px;
    height: 24px;
    color: #FFFFFF;
}
`

const Notes = styled.div`
width: 326px;
height: 426px;
margin-top: 22px;
display: flex;
justify-content: center;
align-items: center;
background-color: #FFFFFF;
border-radius: 5px;
border: 1px solid #8C11BE;

p {
    width: 180px;
    height: 46px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
}
`

const Buttons = styled.div`
display: flex;
justify-content: space-between;
width: 326px;
height: 114px;
`

const Button = styled.div`
width: 155px;
height: 114px;
margin-top: 13px;
background: #A328D6;
border-radius: 5px;
border: 1px solid #8C11BE;

img {
    width: 21.88px;
    height: 21.88px;
    margin-left: 10px;
    margin-top: 11px;
}

p {
    width: 64px;
    height: 40px;
    margin-left: 10px;
    margin-top: 32px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
}
`

const P = styled.p`
display: flex;
align-items: center;
justify-content: left;
margin-top: 25px;
width: 326px;
height: 31px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
`

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 40px;

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