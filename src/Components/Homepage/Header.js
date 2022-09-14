import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../../Assets/logo.png"
import sacola from "../../Assets/sacola.png"
import usuarioicon from "../../Assets/usuario-icon.png"

export default function(){
    let navigate = useNavigate()
    return(
        <HeaderStyled>
            <div className="logo">
                <img onClick={() => {navigate("/homepage")}} src={logo}/>
            </div>
            <div className="links">
                <ul>
                    <li>Pano</li>
                    <li>Latex</li>
                    <li>Plástico</li>
                    <li>Gel</li>
                </ul>
            </div>
            <div className="area_usuario">
                <img src={sacola} />
                <img onClick={()=> {navigate("/configuser")}} src={usuarioicon} />
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
        color: white;
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
        gap: 30px;
    }
    .area_usuario img {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
`