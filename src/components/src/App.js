
import React from 'react'
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import './styles/style.scss'
import Carrousel from './components/Carrousel';
const App = () =>{
    return (
      <>
        <Container fluid id="mainCont"> 
        <Header/>
        <Carrousel/>
        </Container>
      </>
    )
}

export default App