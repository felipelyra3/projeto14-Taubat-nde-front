import styled from "styled-components"
import axios from "axios"
import { useEffect } from "react"
import { useState, useContext } from "react";
import UserContext from "../Contexts/UserContext";

export default function BestSellers(){

     const [bestsellers, setBestSellers] = useState([])
     const context = useContext(UserContext);

     async function rendersMoreBuyers(){
         try {
             const request = await axios.get(context.getMaisVendidos, {
                 headers: {
                     Authorization: `Bearer ${localStorage.getItem("token")}`
                 }
             })
            
             setBestSellers(request.data)
         } catch (error) {
             console.log(error)
         }
     }

     useEffect(() => {
	 	rendersMoreBuyers()
	 }, [])

    return(
        
        <BestSellersStyled>
            <>  
                <h2>Mais Vendidos</h2>
                <>{bestsellers.length > 0 
                ? <div className="best">{
                    bestsellers.map((bestseller) => (
                        <img src={bestseller.image}/>
                    ))
                }</div> 
                : "Não há lista de mais vendidos"}</>
            </>
        </BestSellersStyled> 
    )

}

const BestSellersStyled = styled.div`
    
    h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px 0;
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        text-decoration: underline;
    }
    .best {
        margin-bottom: 50px;
        padding: 0 140px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img {
        cursor: pointer;
        width: 33.3%;
        width: 300px;
    }
`