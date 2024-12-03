import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context'

const SingupPage = () => {

    const {login} = useAppContext()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = (e) => { 
        e.preventDefault()
        if(username) {
            login(username)
            alert(`User ${username} успешно зарегистрированы`)
        }
    }

  return (
    <>
    <section className="login">
        <div className="container">
            <h2 className="login-title">Зарегистрировать аккаунт</h2>
            <form action="" onSubmit={handleSignup}>
                <input
                 placeholder='Username'
                 type="text"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 />
                <input
                 placeholder='Password'
                 type="text"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 />
                <button>Sign up</button>
                <Link to={'/login'}>Уже есть аккаунт</Link>
            </form>
        </div>
    </section>
    </>

    )
}

export default SingupPage