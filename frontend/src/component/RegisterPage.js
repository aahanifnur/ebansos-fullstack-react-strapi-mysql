import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'


export default function SignUpPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async value => {
        console.log('login handeled')
        value.preventDefault()

        const registerInfo = {
            username: username,
            email: email,
            password: password
        }

        const register = await fetch('http://localhost:1337/api/auth/local/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })

        const registerRes = await register.json()
        console.log(registerRes)
    }


    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={handleRegister}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" value={username} onChange={value => setUsername(value.target.value)} requiredc="true" />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" value={email} onChange={value => setEmail(value.target.value)} requiredc="true" />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={password} onChange={value => setPassword(value.target.value)}  requiredc="true" />
                </p>
                <p>
                    <input type="checkbox" name="checkbox"id="checkbox" requiredc="true" /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
