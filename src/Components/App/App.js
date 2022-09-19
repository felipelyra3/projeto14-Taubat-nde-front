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
    const postSignUp = "https://taubatende-back.herokuapp.com/signup";
    const postLogin = "https://taubatende-back.herokuapp.com/login";
    const getMaisVendidos = "https://taubatende-back.herokuapp.com/maisvendidos"
    const getProducts = "https://taubatende-back.herokuapp.com/products";
    const postAddCart = "https://taubatende-back.herokuapp.com/addcart";
    const getGetCart = "https://taubatende-back.herokuapp.com/getcart";
    const deleteRemoveFromCart = "https://taubatende-back.herokuapp.com/removefromcart";
    const deleteEmptyCart = "https://taubatende-back.herokuapp.com/emptycart";
    const logout = "https://taubatende-back.herokuapp.com/logout";
    const configUser = "https://taubatende-back.herokuapp.com/configuser";

    return (
        <>
            <UserContext.Provider value={{ logout, getMaisVendidos, userInfo, setUserInfo, postSignUp, postLogin, getProducts, postAddCart, getGetCart, deleteRemoveFromCart, deleteEmptyCart, configUser }}>
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
