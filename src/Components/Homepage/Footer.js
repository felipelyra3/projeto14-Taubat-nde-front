import logo from "../../Assets/logo.png"
import twitter from "../../Assets/twitter.png"
import facebook from "../../Assets/facebook.png"
import instagram from "../../Assets/instagram.png"
import styled from "styled-components"

export default function(){
    return(
        <FooterStyle>
            <img src={logo}/>
            <p>© 2022 Copyright - TaubateStore </p>
            <div className="redes">
                <img src={twitter}/>
                <img src={facebook}/>
                <img src={instagram }/>
            </div>
        </FooterStyle>
    )
}

const FooterStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    //margin-top: 30px;
    height: 70px;
    background-color: #f70071;

    //background-color: #1f1f1f;

    > img{
        width: 200px;
        cursor: pointer;
    }

    > p {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: white;
    }

    .redes {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 25px;
        cursor: pointer;
    }

`   

    