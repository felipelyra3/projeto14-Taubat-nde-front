import styled from "styled-components"
import barrigapano from "../../Assets/barriga-de-pano.png"
import barrigalatex from "../../Assets/2Latex.png"
import barrigaplastico from "../../Assets/3Plástico.png"
import barrigagel from "../../Assets/4Gel.png"


export default function Categories(){
    
    return(
        <CategoriesStyled>
            <h2>Categorias</h2>
            <div className="container">
                <div className="coluna-esquerda">
                    <div className="linha1">
                        <img src={barrigapano}/>
                    </div>
                    <div className="linha2">
                        <img src={barrigalatex}/>
                    </div>
                </div>
                <div className="coluna-direita">
                    <div className="linha3">
                        <img src={barrigagel}/>
                    </div>
                    <div className="linha4">                        
                        <img src={barrigaplastico}/>
                    </div>
                </div>
            </div>
        </CategoriesStyled>
    )
}


const CategoriesStyled = styled.div`
    margin-top: 80px;
    padding: 0 140px;
    h2{
        padding-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px 0;
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        text-decoration: underline;
    }
    .container {
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }

    .container img {
        cursor: pointer;
    }

    .container .coluna-esquerda .linha1 {
        margin-bottom: 30px;
    }

    .container .coluna-direita .linha3 {
        margin-bottom: 30px;
    }
`