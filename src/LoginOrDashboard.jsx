import React, { useState } from 'react'
import './App.css'
import Main from './Main'
import Login from './pages/Login'


const LoginOrDashboard = () => {



  const [loginData, setLoginData] = useState({
    userName: '',
    password: '',
    token: '',
    refreshToken: ''
  })

  // if(loginData.token === ''){
  //   return (
  //     <Login 
  //       loginData={loginData}
  //       setLoginData={setLoginData}
  //     />
  //   )
  // }

  return (
    <Main 
      token={loginData.token}
      refreshToken={loginData.refreshToken}
    />
  )
}

export default LoginOrDashboard