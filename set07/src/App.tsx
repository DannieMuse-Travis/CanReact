import React from 'react'
import styled from 'styled-components'
import Image from "./assets/impact.96c4c843.webp"
import nimg from './assets/love.4e24b9a9.svg'
const App = () => {
  return (
    <div>
      <Container>
        <Main>
          
        <BigText>
        Digital Transformation for Individuals and Businesses.
          </BigText>
          <SmallText>
          We are a Technology Workforce Development company that helps 
people learn premium technology skills virtually and partners
 with companies to hire the best talents and invest in workforce
  development. Currently with learners from 19 countries.
          
          </SmallText>
         
          

          <Div>
          
            <Right>
              <NImg src ={nimg}/>
            <Big>For Individual</Big>
           <Small>
            on the Utiva PLatform access the 
            the best tech skill
            training that comes with deep dive mentoring
            coaching and real project
           </Small>
            </Right>
           <Left>
           <Img src={Image} alt=''/>
           <Card></Card>
           </Left>
          </Div>
       
       </Main>
      </Container>
    </div>
  )
}

const NImg = styled.img``

export default App
const Right = styled.div`
margin-left:20px;
`
const  Left = styled.div`
  /* position: absolute; */
  margin-left:20px;

`

const  Card = styled.div`
  /* border:1px solid black; */
  background-color:green;
  height:180px;
width:500px;
border-radius:5px 5px;
margin-left:20px;
position: absolute;
bottom: 20px;
right: 20px;
`

const Div = styled.div`
display:flex;
/* justify-content:space-between; */
align-items:center;
width:1200px;
background-color:white;
position: relative;
`
const Big = styled.div`
width:50%;
height:20;

font-size:30px;
font-weight:500;
padding:10px 0px;
`
const Small = styled.div``

const Img = styled.img`
width:30;
align-items:center;
height:400px;
justify-content:center;
/* margin-left:100px; */
`

const Container = styled.div`

width:100%;
height:98%;
background: #d3d3d373;
display:flex;

`

const Main = styled.div`
`

const BigText = styled.div`
width:45%;
height:20;
margin:5px;
font-size:40px;
font-weight:900;
padding:10px 15px;
`

const SmallText = styled.div`
  width:40%;
  margin:5px;
  padding:10px 15px;
`
