import React, { useContext } from "react";

import { FlowersContext } from "../../context/Flowers";
import { Basket, Container ,Logo,Wrapper} from "./style";
export const Navbar=()=>{
const [state,dispatch]=useContext(FlowersContext)

    return(
       <Container>
        <Logo.Icon/>
        <Logo>Products</Logo>
        <Wrapper>
        <Basket.Icon/>
        <Basket>{state.length}</Basket>
        </Wrapper>
       
       </Container>
    )
}