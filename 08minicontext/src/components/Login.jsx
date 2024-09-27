import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [pass, setpass] = useState('')
    const {setuser} = useContext(UserContext)

    const handlesubmit = (e)=> {
        e.preventDefault()
        setuser({username, pass})
    }

  return (
      <>
      <h2>Log-In</h2>
      <input
      value={username}
      onChange={(e)=> setusername(e.target.value)}
      type="text" placeholder='Username'/>
      <input 
      value={pass}
      onChange={(e)=> setpass(e.target.value)}
      type="text" placeholder='Password'/>
      <button onClick={handlesubmit}>Submit</button>
      </>
)
}

export default Login