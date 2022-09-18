import Header from "./Header";
import Categories from "./Categories";
import BestSellers from "./BestSellers";
import Footer from "./Footer";
import styled from "styled-components";
import banner from "../../Assets/Banner.png";


export default function Homepage() {

    return (
        <HomePageStyled>
            <Header />
            <Banner><img src={banner} alt="banner" /></Banner>
            <Categories />
            <BestSellers />
            <Footer />
        </HomePageStyled>
    );
}

const HomePageStyled = styled.div`
    background-color: #f706b6;
   //background-color: #ECECEC; //#feabda
`

const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;

    img {
        border-radius: 10px;
    }
`;