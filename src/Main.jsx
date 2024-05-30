import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Container from './share/Container'
import Nav from './share/Nav'
import Dashboard from './pages/Dashboard'
import Order from './pages/Order'
import LogOut from './pages/LogOut'



const Main = ({ token }) => {
  const [chosenCom, setChosenCom] = useState('dasboard')

  const menus = [
    { key: 'dasboard', label: 'Dasboard', component: <Dashboard token={token} /> },
    { key: 'orders', label: 'Orders', component: <Order token={token} /> },
    { key: 'logout', label: 'Logout', component: <LogOut /> },
  ]
  
  const componet = menus.filter(item => item.key === chosenCom)

  return (
    <BrowserRouter>
    <div style={{backgroundColor: 'rgb(234, 234, 234)'}}>
        
        <div className='container'>
            <Nav items = {menus} selected={chosenCom} setChosenCom={setChosenCom} />          
            <Container>
              {
                componet[0].component
              }
            </Container>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Main