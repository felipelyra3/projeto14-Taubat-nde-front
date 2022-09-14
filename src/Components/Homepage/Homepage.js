import Header from "./Header";
import Categories from "./Categories";
import BestSellers from "./BestSellers";
import Footer from "./Footer";
import styled from "styled-components";


export default function Homepage() {

    return (
        <HomePageStyled>
            <Header/>
            <Categories/>
            <BestSellers />
            <Footer/>
        </HomePageStyled>
    );
}

const HomePageStyled = styled.div`
    background-color: #ECECEC; //#feabda
`