import styled from "styled-components"
import Header from "../Homepage/Header"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Configuser() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [avatar, setAvatar] = useState("")


    let navigate = useNavigate()


    async function fazerCadastro(event) {
        event.preventDefault();
  
          try{
            const requisicao = await axios.put("http://localhost:5000/", {
                  email: email,
                  nome: nome,
                  senha: senha  
            });
            console.log(requisicao)
            //navigate("/")
          
            }catch {
                console.log("deu ruim na requisição")
                return
            }  
    }


    return(
        <>
            <Header />
            <ConfiguserStyled>
                <form onSubmit={fazerCadastro}>
                <h1>Edite Suas informações de usuário</h1>
                    <input required type="email" id="campoEmail" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
                    
                    <input required type="number" id="camposenha" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} /><br/>
                    
                    <input required type="text" id="campoNome" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} /><br/>
                    
                    <input required type="text" id="campoavatar" placeholder="Avatar" value={avatar} onChange={e => setAvatar(e.target.value)} /><br/>

                    <button>Atualizar</button>
                </form>
            </ConfiguserStyled>
        </>
    )
}

const ConfiguserStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f706b6;
  height: 100vh;
  
  h1{
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 50px;
    margin-bottom: 24px;
    color: #FFFFFF;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  input[type=email]{
    width: 350px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-bottom: 13px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: #000000;
    padding-left: 15px;
  }
  
  input{
        width: 100%;
        max-width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 13px;
        outline: none;
        border: none;
        padding-left:15px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #000000;
    }
    //esconde as setinhas de escolher o número no input type=number
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }


 button{
    width: 100%;
    max-width: 375px;
    height: 46px;
    background: #fa7cd9;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 36px;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    text-align: center;
    cursor: pointer;
  }
`;