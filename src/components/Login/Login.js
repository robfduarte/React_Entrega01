import './Login.css'
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAuth()

    const handleLogin = (e) => {
        e.preventDefault()

        login(username, password)
    }

    return (
        <div className='login-container'>
            <h1 className='login-tittle'>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Username: 
                    <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Password: 
                    <input type="password" minlength="8" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button className="login-button">Login</button>
                
            </form>
        </div>
    )
}

export default Login