import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import UserContext from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Homepage/Footer";
import Header from "../Homepage/Header";

function ProductsJSX({ name, description, image, price, id, navigate, deleteRemoveFromCart, setProducts, setLoading }) {
    return (
        <Product>
            <div className="image"><img src={image} alt="Plastic" /></div>
            <div className="information">
                <h1>{name}</h1>
                <h2>{description}</h2>
                <h3>{price}</h3>
                <h4 onClick={() => RemoveFromCart(id, navigate, deleteRemoveFromCart, setProducts, setLoading)}>Remover do carrinho</h4>
            </div>
        </Product>
    );
};

function RemoveFromCart(id, navigate, deleteRemoveFromCart, setProducts, setLoading) {
    const token = localStorage.getItem("token");
    console.log(token);
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

        const del = axios.post(deleteRemoveFromCart, body, config);
        del.then(() => {
            const get = axios.get("http://localhost:5000/getcart", config);

            get.then((answer) => {
                setProducts(answer.data.cart);
                setLoading(false);
            });

            get.catch((error) => {
                console.log(error);
            });
            alert('Produto removido com sucesso no carrinho com sucesso');
        });

        del.catch((error) => {
            alert('Erro');
            console.log(error);
        });
    }
};

export default function Cart() {
    const [products, setProducts] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [paymentMethod, setPaymentMethod] = useState();
    const context = useContext(UserContext);
    const navigate = useNavigate();

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

        const get = axios.get(context.getGetCart, config);

        get.then((answer) => {
            setProducts(answer.data.cart);
            setLoading(false);
        });

        get.catch((error) => {
            console.log(error);
        });
    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    if (Object.keys(products).length === 0) {
        return (
            <>
                <Header />
                <Page>
                    <EmptyCart>
                        <p>Diferente da barriga da grávida de Taubaté, seu carrinho está vazio! ☹️</p>
                        <p>Comece agora a comprar suas barriguinhas falsas!</p>
                        <img src="https://segredosdomundo.r7.com/wp-content/uploads/2017/09/2-42.jpg" alt="Legend" />
                    </EmptyCart>
                </Page>
                <Footer />
            </>
        );
    }

    function handleForm(e) {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if (Object.keys(token).length === 0) {
            navigate('/');
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        console.log(config);

        const post = axios.post(context.deleteEmptyCart, { id: 0 }, config);

        post.then((answer) => {
            setProducts(answer.data.cart);
            setLoading(false);
            alert('Compra finalizada com sucesso');
        });

        post.catch((error) => {
            console.log(error);
            alert('Erro');
        });
    }

    return (
        <>
            <Header />
            <Page>
                <ContainerProducts>
                    {products.map((product, key) => <ProductsJSX key={key} name={product.name} description={product.description} image={product.image} price={product.price} id={product._id} navigate={navigate} deleteRemoveFromCart={context.deleteRemoveFromCart} setProducts={setProducts} setLoading={setLoading} />)}
                </ContainerProducts>

                <Product>
                    <Form onSubmit={handleForm}>
                        <h1>Finalizar Compra</h1>
                        <h2>Forma de pagamento:</h2>
                        <Radio>
                            <label><input type='radio' name="pix" value="Pix" onChange={e => setPaymentMethod(e.target.value)} />Pix</label>
                            <label><input type='radio' name="credit" value="Credit" onChange={e => setPaymentMethod(e.target.value)} />Crédito</label>
                            <label><input type='radio' name="debit" value="Debit" onChange={e => setPaymentMethod(e.target.value)} />Débito</label>
                        </Radio>

                        {paymentMethod === 'Pix' ? <p><input type="text" id="pixreceipt" placeholder="Comprovante de pix" required></input></p> : <></>}
                        {paymentMethod === 'Debit' || paymentMethod === 'Credit' ? <><p><input type="text" id="cardname" placeholder="Nome no cartão" required></input></p><p><input type="text" id="cardnumber" placeholder="Número do Cartão" required></input></p><p><input type="text" id="securecode" placeholder="Código de Segurança" required></input></p></> : <></>}

                        <Button>Finalizar Compra</Button>
                    </Form>
                </Product>
            </Page>
            <Footer />
        </>
    );
};

const Page = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`;

const ContainerProducts = styled.div`
    margin: 24px;
    width: 100vh;
`;

const Product = styled.div`
    display: flex;
    margin-bottom: 24px;
    background-color: #F1F1F1;
    padding: 12px;
    border-radius: 10px;

    img {
        height: 300px;
        width: 200px;
    }

    h1 {
        margin: 6px;
        font-size: 28px;
        font-weight: 700;
        color: #9C9E9D;
    }
    
    h2 {
        margin: 6px;
        font-size: 18px;
        font-weight: 700;
        color: #191816;
    }

    h3 {
        margin: 50px 6px 6px 6px;
        font-size: 24px;
        font-weight: 700;
        color: #191816;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin-bottom: 24px;
    }
    p {
        margin-top: 12px;
    }
`;

const Radio = styled.div``;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 46px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    margin-top: 24px;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #A9ACB1;
    margin-bottom: 24px;
`;

const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    background-color: #F1F1F1;
    padding: 12px;
    border-radius: 10px;
    height: 80vh;

    img {
        margin-top: 24px;
        height: 500px;
        width: 500px;
    }

    p {
        margin: 6px;
        font-size: 28px;
        font-weight: 700;
        color: #9C9E9D;
    }
`;