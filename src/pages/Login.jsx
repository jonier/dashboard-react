import React from 'react'

const Login = ({ loginData, setLoginData }) => {

    const handlerChange = (e) => {
        e.preventDefault()
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const handlerLogin = (e) => {
        e.preventDefault()

        // const data = {
        //     username: loginData.userName,
        //     password: loginData.password
        // }

        // fetch(`https://freddy.codesubmit.io/login`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data),
        // }).then((res) => {
        //    return res.json()
        // }).then((data) => {
            
        //     setLoginData({
        //         ...loginData,
        //         token: data.access_token,
        //         refreshToken: data.refresh_token
        //     })

        // })
    }


    return (
        <div className="loginPage">
            <div className='loginTitle'>
                <h4>Freddy's Artisanal Halloween Candy Shop</h4>
                <img src="Freddys_Logo.svg" alt="" />
            </div>
            <div className='credentials'>
                <input type="text" placeholder='username' name="userName" onChange={e => handlerChange(e)} />
                <input type="password" placeholder='password' name="password" onChange={e => handlerChange(e)} />

                <button onClick={ e => handlerLogin(e)}>Login</button>
            </div>
        </div>
    )
}

export default Login