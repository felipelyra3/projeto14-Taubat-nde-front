import GlobalStyle from "../../Styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Homepage from "../Homepage/Homepage";
import "../../Styles/globalStyles"
import Configuser from "../ConfigUser/Configuser";
export default function App() {
    const [userInfo, setUserInfo] = useState({});
    const postSignUp = "http://localhost:5000/signup";
    const postLogin = "http://localhost:5000/login";
    const getMaisVendidos = "http://localhost:5000/maisvendidos"
    return (
        <>
            <UserContext.Provider value={{getMaisVendidos, userInfo, setUserInfo, postSignUp, postLogin }}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/homepage" element={<Homepage />} />
                        <Route path="/configuser" element={<Configuser />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}