import GlobalStyle from "../../Styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

export default function App() {
    const [userInfo, setUserInfo] = useState({});
    const postSignUp = "http://localhost:5000/signup";

    return (
        <>
            <UserContext.Provider value={{ userInfo, setUserInfo, postSignUp }}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}