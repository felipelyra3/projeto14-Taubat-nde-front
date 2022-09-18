import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import UserContext from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Homepage/Footer";
import Header from "../Homepage/Header";
import iconecart from "../../Assets/remover-do-carrinho.png"

function ProductsJSX({ name, description, image, price, id, navigate, deleteRemoveFromCart, getGetCart, setProducts, setLoading }) {
    return (
        <Product>
            <div className="image"><img src={image} alt="Plastic" /></div>
            <div className="information">
                <h1>{name}</h1>
                <h2>{description}</h2>
                <h3>R$ {price}</h3>
            </div>
            <img className="iconecart" onClick={() => RemoveFromCart(id, navigate, deleteRemoveFromCart, getGetCart, setProducts, setLoading)} src={iconecart}/>
        </Product>
    );
};

function RemoveFromCart(id, navigate, deleteRemoveFromCart, getGetCart, setProducts, setLoading) {
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
            const get = axios.get(getGetCart, config);

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
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardSecureCode, setCardSecureCode] = useState('');
    const [totalPurchase, setTotalPurchase] = useState(() => 0 + 0);
    //const [paymentMethod, setPaymentMethod] = useState();
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

    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total = total + products[i].price;
    }

    useEffect(() => {
        setTotalPurchase(total);
    }, [products]);


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

        const body = {
            cardName,
            cardNumber,
            cardSecureCode,
            totalPurchase
        };

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const post = axios.post(context.deleteEmptyCart, body, config);

        post.then((answer) => {
            setProducts(answer.data.cart);
            console.log(answer.data.cart)
            setLoading(false);
            alert('Compra finalizada com sucesso');
            navigate('/homepage');
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
                    {products.map((product, key) => <ProductsJSX key={key} name={product.name} description={product.description} image={product.image} price={product.price} id={product._id} navigate={navigate} deleteRemoveFromCart={context.deleteRemoveFromCart} getGetCart={context.getGetCart} setProducts={setProducts} setLoading={setLoading} />)}
                </ContainerProducts>

                <Product>
                    <Form onSubmit={handleForm}>
                        <h1>Finalizar Compra</h1>
                       

                        <input type="text" id="cardname" placeholder="Nome no cartão de crédito" value={cardName} onChange={(e) => { setCardName(e.target.value) }} required></input>
                        <input type="number" id="cardnumber" placeholder="Número do cartão de crédito" value={cardNumber} onChange={(e) => { setCardNumber(e.target.value) }} required></input>
                        <input type="text" id="cardsecurecode" placeholder="Número de segurança do cartão" value={cardSecureCode} onChange={(e) => { setCardSecureCode(e.target.value) }} required></input>
                        {/* <h2>Forma de pagamento:</h2>
                        <Radio>
                            <label><input type='radio' name="pix" value="Pix" onChange={e => setPaymentMethod(e.target.value)} />Pix</label>
                            <label><input type='radio' name="credit" value="Credit" onChange={e => setPaymentMethod(e.target.value)} />Crédito</label>
                            <label><input type='radio' name="debit" value="Debit" onChange={e => setPaymentMethod(e.target.value)} />Débito</label>
                        </Radio>

                        {paymentMethod === 'Pix' ? <p><input type="text" id="pixreceipt" placeholder="Comprovante de pix" required></input></p> : <></>}
                        {paymentMethod === 'Debit' || paymentMethod === 'Credit' ? <><p><input type="text" id="cardname" placeholder="Nome no cartão" required></input></p><p><input type="text" id="cardnumber" placeholder="Número do Cartão" required></input></p><p><input type="text" id="securecode" placeholder="Código de Segurança" required></input></p></> : <></>} */}
                         <h2>Total da compra: R$ {totalPurchase}</h2>
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
    margin-top: 80px;
    background: #f706b6;
    min-height: 100vh;
    //height: 100vh;
`;

const ContainerProducts = styled.div`
    width: 100vh;
`;

const Product = styled.div`
    display: flex;
    margin-bottom: 24px;
    background-color: #383838;
    padding: 12px;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    max-width: 620px;
    max-height: 400px;
    margin-top: 50px;

    img {
        height: 200px;
        width: 200px;
        margin-right: 20px;
        margin-top: 15px;
        
    }

    h1 {
        margin: 6px;
        font-size: 28px;
        font-weight: 700;
        color: #9C9E9D;
        line-height: 40px;
    }
    
    h2 {
        margin: 10px;
        font-size: 18px;
        font-weight: 700;
        color: white;
        line-height: 25px;
    }

    h3 {
        margin: 30px 6px 6px 6px;
        font-size: 24px;
        font-weight: 700;
        color: white;
    }

    .iconecart {
        width: 42px;
        height: 42px;
        align-self: flex-end;
        margin: 10px;
        cursor: pointer;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    h1 {
        margin-bottom: 10px;
    }

    h2 {
        font-size: 19px;
    }
    p {
        margin-top: 12px;
    }

    input[type=text], input[type=number] {
        height: 40px;
        width: 100%;
        max-width: 200px;
        margin-bottom: 15px;
        border: none;
        border-radius: 4px;
        outline: none;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
`;

/* const Radio = styled.div``; */

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 46px;
    background: #fa7cd9;
    border-radius: 5px;
    border: none;
    margin-top: 15px;
    cursor: pointer;


    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: white;
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
    margin-top: 25px;

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