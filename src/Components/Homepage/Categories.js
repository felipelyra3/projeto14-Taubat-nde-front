import styled from "styled-components"
import barrigapano from "../../Assets/barriga-de-pano.png"
import barrigalatex from "../../Assets/2Latex.png"
import barrigaplastico from "../../Assets/3Plástico.png"
import barrigagel from "../../Assets/4Gel.png"
import { Link } from "react-router-dom";


export default function Categories() {

    return (
        <CategoriesStyled>
            {/* <h2>Categorias</h2> */}
            <div className="container">
                <div className="coluna-esquerda">
                    <div className="linha1">
                        <Link to={'/fabric'}><img src={barrigapano} alt="fabric" /></Link>
                    </div>
                    <div className="linha2">
                        <Link to={'/latex'}><img src={barrigalatex} alt="latex" /></Link>
                    </div>
                </div>
                <div className="coluna-direita">
                    <div className="linha3">
                        <Link to={'/gel'}><img src={barrigagel} alt="gel" /></Link>
                    </div>
                    <div className="linha4">
                        <Link to={'/plastic'}><img src={barrigaplastico} alt="plastic" /></Link>
                    </div>
                </div>
            </div>
        </CategoriesStyled>
    )
}


const CategoriesStyled = styled.div`
    margin-top: 24px;
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
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        
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
