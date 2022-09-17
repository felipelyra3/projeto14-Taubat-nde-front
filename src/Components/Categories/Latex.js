import styled from "styled-components";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import UserContext from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Header from "../Homepage/Header";
import Footer from "../Homepage/Footer";
import iconecart from "../../Assets/adicionar-ao-carrinho.png"


function ProductsJSX({ name, description, image, price, id, navigate, postAddCart }) {
    return (
        <Product>
            <div className="image"><img src={image} alt="Latex" /></div>
            <div className="information">
                <h1>{name}</h1>
                <h2>{description}</h2>
                <h3>{price}</h3>
            </div>
            <img className="iconecart" onClick={() => AddCart(id, navigate, postAddCart)} src={iconecart} />
        </Product>
    );
}

function AddCart(id, navigate, postAddCart) {
    const token = localStorage.getItem("token");
    if (Object.keys(token).length === 0) {
        navigate('/');
    } else {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const body = {
            id
        };

        const post = axios.post(postAddCart, body, config);
        post.then(() => {
            alert('Produto adicionado no carrinho com sucesso');
        });

        post.catch((error) => {
            alert('Erro');
            console.log(error);
        });
    }
};

export default function Latex() {
    const [products, setProducts] = useState({});
    const context = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const getProducts = axios.get(context.getProducts);

        getProducts.then((answer) => {
            setProducts(answer.data);
        });

        getProducts.catch((error) => {
            console.log(error);
        });
    }, []);

    const latexProducts = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].type === 'latex') {
            latexProducts.push(products[i]);
        }
    }

    return (
        <>
            <Header />
            <Page>
                <ContainerProducts>

                    {latexProducts.map((product, key) => <ProductsJSX key={key} name={product.name} description={product.description} image={product.image} price={product.price} id={product._id} navigate={navigate} postAddCart={context.postAddCart} />)}

                </ContainerProducts>
            </Page>
            <Footer />
        </>
    );
};

const Page = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
    background: #f706b6;
    height: 100vh;
`;

const ContainerProducts = styled.div`
    margin: 24px;
    width: 100vh;
`;

const Product = styled.div`
    display: flex;
    margin-bottom: 24px;
    background: #383838;
    padding: 12px;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;

    img {
        height: 200px;
        width: 200px;
        margin-right: 20px;
    }

    h1 {
        margin: 6px;
        font-size: 25px;
        font-weight: 700;
        color: #9C9E9D;
    }
    
    h2 {
        margin: 6px;
        font-size: 18px;
        font-weight: 700;
        color: white;
        
    }

    h3 {
        margin: 50px 6px 6px 6px;
        font-size: 24px;
        font-weight: 700;
        color: white;
    }

    .iconecart {
        width: 42px;
        height: 42px;
        align-self: flex-end;
        margin: 20px;
        cursor: pointer;
    }
`;