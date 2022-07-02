import React from 'react'
import styled from 'styled-components'

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
        <ItemText>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </ItemText>
        <Buttons>
        <ButtonGroup>
            <LeftButton>
               {props.leftBtnText}
            </LeftButton>
            <RightButton>
               {props.rightBtnText}
            </RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
       
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vx;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/images/model-s.jpg');
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px){
    flex-direction: column;
  }
`

const LeftButton = styled.div`
    background-color: #171A20;
    height: 40px;
    color: white;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bolder;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled.div`
background-color: #171A20;
height: 40px;
color: white;
width: 256px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
font-weight: bolder;
cursor: pointer;
margin: 8px;
background: white;
color: black;
opacity: 0.65;
`

const DownArrow = styled.img`
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
     
`

