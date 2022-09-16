import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components"
import logo from "../../Assets/logo.png"
import sacola from "../../Assets/sacola.png"
//import usuarioicon from "../../Assets/usuario-icon.png"

export default function Header() {
    let navigate = useNavigate()
    const usuarioicon = localStorage.getItem("avatar")
    return (
        <HeaderStyled>
            <div className="logo">
                <img onClick={() => { navigate("/homepage") }} src={logo} alt="Taubatende" />
            </div>
            <div className="links">
                <ul>
                    <Link to={'/fabric'}><li>Pano</li></Link>
                    <Link to={'/latex'}><li>Latex</li></Link>
                    <Link to={'/plastic'}><li>Plástico</li></Link>
                    <Link to={'/gel'}><li>Gel</li></Link>
                </ul>
            </div>
            <div className="area_usuario">
                <Link to={'/cart'}><img src={sacola} alt="Cart" /></Link>
                <div className="iconuser"><img onClick={() => { navigate("/configuser") }} src={usuarioicon} alt="Taubatende" /></div>
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
        width: 32px;
        height: 32px;
        cursor: pointer;
    }

    .iconuser {
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