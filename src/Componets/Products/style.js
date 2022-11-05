import styled from "styled-components";

export const Container=styled.div`



`

export const Wrapper=styled.div`
display:grid;
grid-template-columns:repeat(4,auto);
grid-gap:40px;
box-sizing:border-box;
margin-top:40px;
`

export const Card=styled.div`

width:300px;
height:400px;
background-color:none;
border:2px solid black;
margin-left:20px;

`

Card.Image=styled.img`
width:100%;
height:250px;
background-color:cadetblue;

`

Card.Title=styled.h3`
text-align:center;
margin-top:15px;

`
Card.Price=styled.h3`
text-align:center;
margin-left:200px;
margin-top:10px;
color:red;  
`
Card.Button=styled.button`

width:280px;
height:40px;
margin-top:20px;
border-style:none;
background: #46A358;
text-transform:uppercase;
font-weight:700;
color:white;
transition:transform .3s ease-in-out;
:active{
    transform:scale(0.97)
}
border-radius: 6px 6px 6px 6px;

`
Card.Added=styled.div`
display:flex;
justify-content:center;
align-items:center;

`