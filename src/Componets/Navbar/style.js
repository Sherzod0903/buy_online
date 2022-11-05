import styled from "styled-components";
import { ReactComponent as basket} from '../../Assets/icon/basket.svg';
import { ReactComponent as logo} from '../../Assets/icon/logo.svg';


export const Container=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width: 100%;
height:80px;
background-color: white;
color :black;
padding: 0px 150px;
`

export const Logo=styled.div`

font-weight: 400;
font-size: 25px;
line-height: 19px;
margin-right:20px;
color: #3D3D3D;
`
Logo.Icon=styled(logo)`

`
export const Wrapper=styled.div`
position:relative;
`

export const Basket=styled.p`
position:absolute;
display:flex;
justify-content:center;
align-items:center;

width: 20px;
height: 20px;
left:25px;
top: -3px;

background: #46A358;
border: 2px solid #FFFFFF;
border-radius:50%;
`
Basket.Icon=styled(basket)`
width: 40px;
height: 30px;





`