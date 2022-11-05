import React from "react";
import { Navbar } from "../Componets/Navbar";
import { Products } from "../Componets/Products";
import { Footer } from "../Componets/Footer";




export const Root=()=>{


    return(
        <div>
            <Navbar/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default Root;