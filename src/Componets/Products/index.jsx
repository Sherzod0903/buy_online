import React from "react";
import { useContext } from "react";
import {FlowersContext} from "../../context/Flowers";

import { Container,Card,Wrapper} from "./style";

export const Products=()=>{
const [state,dispatch]=useContext(FlowersContext)


    return(
        <Container>
            <Wrapper>
            {
                state.map((value)=>{
                    return(

            <Card key={value.id} >
                  <Card.Image src={value.img}/>
                  <Card.Title>{value.name}</Card.Title>
                  <Card.Price>{value.price}</Card.Price>
                <Card.Added> 
                <Card.Button> Add to Cart</Card.Button>      </Card.Added>  
            </Card>
                    )
                })
            }
           
            </Wrapper>
            
            </Container>
    )
}