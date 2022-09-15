import styled from "styled-components";
import logo from "../../Assets/logo.png";
import { useState, useContext } from "react";
import UserContext from "../Contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const context = useContext(UserContext);
    const navigate = useNavigate();

    function handleForm(e) {
        e.preventDefault();

        if (avatar === "") {
            setAvatar('https://www.pikpng.com/pngl/m/16-168770_user-iconset-no-profile-picture-icon-circle-clipart.png');
        }
        const body = {
            name,
            avatar,
            email,
            password
        };

        console.log(context.postSignUp);
        const post = axios.post('http://localhost:5000/signup', body);

        post.then(() => {
            alert('Conta criada com sucesso!');
            navigate('/');
        });

        post.catch((error) => {
            alert('Erro! Tente novamente');
            console.log(error);
        });

    }

    return (
        <Page>
            <ContainerSignup>
                <img src={logo} alt="Taubatende" />
                <Form onSubmit={handleForm}>
                    <input type="text" id="name" placeholder="Nome" value={name} onChange={(e) => { setName(e.target.value) }} required></input><br />
                    <input type="text" id="avatar" placeholder="Avatar (URL)" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} required></input><br />
                    <input type="email" id="email" placeholder="E-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} required></input><br />
                    <input type="password" id="password" placeholder="Senha" value={password} onChange={(e) => { setPassword(e.target.value) }} required></input>
                    <Button>Cadastrar</Button>
                </Form>
                <Error>{error}</Error>
                <StyledLink to={`/`} >Já tem uma conta? Entre agora!</StyledLink>
            </ContainerSignup>
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
        margin-bottom: 50px;
    }
`;

const ContainerSignup = styled.div`
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