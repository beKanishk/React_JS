import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //here we are using context, this is a hook. We have used setUser because this is the same name 
    //we have used in UserContextProvider
    const {setUser} = useContext(UserContext)//this is both returning and accepting the value from and to UserContextProvider

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password}) //setUser will pass value to UserContextProvider
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

