import styled from "styled-components";
import logo from "../../Assets/logo.png";
import { useState, useContext } from "react";
import UserContext from "../Contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const context = useContext(UserContext);

    function handleForm(e) {
        e.preventDefault();
        const body = {
            email,
            password
        }

        const post = axios.post(context.postLogin, body);

        post.then((answer) => {
            context.setUserInfo(answer.data);
            console.log(answer.data);
            navigate('/latex');
            //navigate('/homepage');
        });

        post.catch((error) => {
            console.log(error);
            setError('E-mail ou senha não encontrado(s)');
            //alert('E-mail ou senha não encontrado(s)');
        });

    }

    return (
        <Page>
            <ContainerLogin>
                <img src={logo} alt="Taubatende" />
                <Form onSubmit={handleForm}>
                    <input type="email" id="email" placeholder="E-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} required></input><br />
                    <input type="password" id="password" placeholder="Senha" value={password} onChange={(e) => { setPassword(e.target.value) }} required></input>
                    <Button>Entrar</Button>
                </Form>
                <Error>{error}</Error>
                <StyledLink to={`/SignUp`} >Primeira vez? Cadastre-se!</StyledLink>
            </ContainerLogin>
        </Page>
    );
};

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: #EBF1EF;

    img {
        width: 290px;
        height: 80px;
        margin-bottom: 100px;
    }
`;

const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FBF7F6;
    width: 500px;
    height: 600px;
    border-radius: 2%;
`;

const Form = styled.form`
    border: none;

    input {
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        margin-bottom: 15px;
        padding-left: 15px;
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 326px;
    height: 46px;
    background: #EBF1EF;
    border-radius: 5px;
    border: none;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #A9ACB1;
    margin-bottom: 24px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #A9ACB1;
`;

const Error = styled.span`
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: red;
    margin-bottom: 15px;
`;