import GlobalStyle from "../../Styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Homepage from "../Homepage/Homepage";
import "../../Styles/globalStyles"
import Configuser from "../ConfigUser/Configuser";
import Fabric from "../Categories/Fabric";
import Plastic from "../Categories/Plastic";
import Gel from "../Categories/Gel";
import Latex from "../Categories/Latex";
import Cart from "../Cart/Cart";

export default function App() {
    const [userInfo, setUserInfo] = useState({});
    const postSignUp = "http://localhost:5000/signup";
    const postLogin = "http://localhost:5000/login";
    const getMaisVendidos = "http://localhost:5000/maisvendidos"
    const getProducts = "http://localhost:5000/products";
    const postAddCart = "http://localhost:5000/addcart";
    const getGetCart = "http://localhost:5000/getcart";
    const deleteRemoveFromCart = "http://localhost:5000/removefromcart";
    const deleteEmptyCart = "http://localhost:5000/emptycart";
    const logout = "http://localhost:5000/logout";

    return (
        <>
            <UserContext.Provider value={{ logout, getMaisVendidos, userInfo, setUserInfo, postSignUp, postLogin, getProducts, postAddCart, getGetCart, deleteRemoveFromCart, deleteEmptyCart }}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/homepage" element={<Homepage />} />
                        <Route path="/configuser" element={<Configuser />} />
                        <Route path="/fabric" element={<Fabric />} />
                        <Route path="/plastic" element={<Plastic />} />
                        <Route path="/gel" element={<Gel />} />
                        <Route path="/latex" element={<Latex />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}