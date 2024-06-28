import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const router = useNavigate();

  return (
    <div>
        <h1>Login</h1>

        <form>
        {/* UserName */}
            <label>UserName : </label>
            <input type="text" /> <br /><br />

            {/* Password */}
            <label>Password : </label>
            <input type="password"/> <br /><br />

            <button type="submit" onClick={()=> router('/home')}>Login</button>
        </form>

    </div>
  )
}

export default Login