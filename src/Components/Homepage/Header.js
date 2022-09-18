import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components"
import logo from "../../Assets/logo.png"
import sacola from "../../Assets/sacola.png"
import logouticon from "../../Assets/logout.png"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/UserContext";


export default function Header() {
    let navigate = useNavigate()
    const [avatar, setAvatar] = useState("");
    const [bestSellers, setBestSellers] = useState({});
    const context = useContext(UserContext);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (Object.keys(token).length === 0) {
            navigate('/');
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const get = axios.get(context.getMaisVendidos, config);

        get.then((answer) => {
            setBestSellers(answer.data);
            setAvatar(answer.data.usuario.avatar);
            localStorage.setItem("avatar", answer.data.usuario.avatar);
            console.log(avatar);
        });

        get.catch((error) => {
            console.log(error);
        });

    }, [avatar]);

    /* useEffect(() => {
        localStorage.setItem("avatar", bestSellers.usuario.avatar);
    }, [bestSellers]); */

    console.log(avatar);
    //localStorage.setItem("avatar", bestSellers.usuario.avatar);


    /* useEffect(() => {
        setAvatar(bestSellers.usuario.avatar);
    }, [bestSellers]); */

    /* async function getAvatar(){
        try {
            const request = await axios.get(context.getMaisVendidos, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setAvatar(request.data.usuario.avatar)
            localStorage.setItem("avatar", request.data.usuario.avatar)
        } catch (error) {
            console.log(error)
        }
    }

    
    useEffect(() => {
         getAvatar()
    }, [avatar]); */

    async function Deslogar() {

        /* const resp = prompt("Gostaria mesmo de deslogar ?")
        if (resp === "Sim" || resp === "sim") { */

        try {
            await axios.delete(context.logout, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            localStorage.clear();
            navigate("/")

        } catch (error) {
            console.log(error)
        }
        //}
    }
    //const usuarioicon = 
    return (
        <HeaderStyled>
            <div className="logo">
                <img onClick={() => { navigate("/homepage") }} src={logo} alt="Taubatende" />
            </div>
            <div className="links">
                <ul>
                    <li onClick={() => navigate("/fabric")}>Pano</li>
                    <li onClick={() => navigate("/latex")}>Latex</li>
                    <li onClick={() => navigate("/plastic")}>Plástico</li>
                    <li onClick={() => navigate("/gel")}>Gel</li>
                </ul>
            </div>
            <div className="area_usuario">
                <img onClick={() => navigate("/cart")} src={sacola} alt="Cart" />
                <div className="iconuser"><img onClick={() => { navigate("/configuser") }} src={localStorage.getItem("avatar")} alt="Taubatende" /></div>
                <img onClick={() => { Deslogar() }} src={logouticon} />
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`

    width: 100%;
    height: 80px;
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: white; //#f70071
    .logo img {
        cursor: pointer;
    }

    .links ul {
        font-size: 20px;
        width: 100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
    }

    .links ul li {
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
    }

    .area_usuario {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
    .area_usuario img {
        width: 38px;
        height: 38px;
        cursor: pointer;
    }

    .iconuser {
        display: flex; 
        justify-content: space-between;
        align-items: center;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    
    .iconuser img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        object-fit: fill;
  }
`