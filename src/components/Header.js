import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';



function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
        <a>
            <img src='/images/logo.svg'/>
        </a>
        <Menu>
        <p><a href='#'>Model S</a></p>
        <p><a href='#'>Model 3</a></p>
        <p><a href='#'>Model X</a></p>
        <p><a href='#'>Model Y</a></p>
        <p><a href='#'>Solar Roof</a></p>
        <p><a href='#'>Solar Panels</a></p>
        </Menu>
        <RightMenu>
            <a href='#'>Shop</a>
            <a href=''>Account</a>
            <CustomMenu onClick={()=>setBurgerStatus(true)}>Menu</CustomMenu>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
            <CustomClose onClick={()=>setBurgerStatus(false)}/>
            </CloseWrapper>
            
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Used Inventory</a></li>
            <li><a href='#'>Trade-in</a></li>
            <li><a href='#'>Test Drive</a></li>
            <li><a href='#'>Insurance</a></li>
            <li><a href='#'>Cybertruck</a></li>
            <li><a href='#'>Semi</a></li>
            <li><a href='#'>Charging</a></li>
            <li><a href='#'>Powerwall</a></li>
            <li><a href='#'>Commercial Energy</a></li>
            <li><a href='#'>Utilities</a></li>
            <li><a href='#'>Find Us</a></li>
            <li><a href='#'>Support</a></li>
            <li><a href='#'>Investor Relations</a></li>
        </BurgerNav>

    </Container>
  ) 
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index:1;
`

const RightMenu = styled.div`
display: flex;
align-items: center;
a {
    font-weight: 600;
    margin-right: 10px;
}
`

const Menu = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: center;

a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
}

@media(max-width: 768px){
    display: none;
}
`

const CustomMenu = styled.div`
cursor: pointer;
font-weight: 600;
`

const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
transition: transform 0.2s ease-in;
li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2)
    a {
        font-weight: 600;
    }
}
`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`