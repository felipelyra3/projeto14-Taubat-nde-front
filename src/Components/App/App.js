import GlobalStyle from "../../Styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Homepage from "../Homepage/Homepage";
import Fabric from "../Categories/Fabric";
import Plastic from "../Categories/Plastic";
import Gel from "../Categories/Gel";
import Latex from "../Categories/Latex";

export default function App() {
    const [userInfo, setUserInfo] = useState({});
    const postSignUp = "http://localhost:5000/signup";
    const postLogin = "http://localhost:5000/login";
    const getProducts = "http://localhost:5000/products";
    const postAddCart = "http://localhost:5000/addcart";

    return (
        <>
            <UserContext.Provider value={{ userInfo, setUserInfo, postSignUp, postLogin, getProducts, postAddCart }}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/homepage" element={<Homepage />} />
                        <Route path="/fabric" element={<Fabric />} />
                        <Route path="/plastic" element={<Plastic />} />
                        <Route path="/gel" element={<Gel />} />
                        <Route path="/latex" element={<Latex />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}