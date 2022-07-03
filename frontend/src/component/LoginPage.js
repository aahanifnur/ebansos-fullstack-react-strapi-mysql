import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import SetCookie from '../hooks/SetCookies'
import '../App.css'

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(false)
    
    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 100);
        console.log('page to reload')
    }

    const handleLogin = async value => {
        console.log('login handeled')
        value.preventDefault()

        const loginInfo = {
            identifier: email,
            password: password
        }

        const login = await fetch('http://localhost:1337/api/auth/local', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })

        const loginRes = await login.json()
        if (loginRes.jwt) {
            SetCookie('jwt', loginRes.jwt)
        }
        if (loginRes.user) {
            SetCookie('role', loginRes.user.confirmed)
            SetCookie('nama', loginRes.user.username)
        }
        loginRes.jwt ? setToken(true) : setToken(false)
        console.log(loginRes)

    }
    
    
    
    if (token) {
        return <Navigate to='/auth'/>
    }


    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={handleLogin}>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" value={email} onChange={value => setEmail(value.target.value)} requiredc="true" />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" value={password} onChange={value => setPassword(value.target.value)}  requiredc="true" />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/" onClick={refreshPage}>Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
