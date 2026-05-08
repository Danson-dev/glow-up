import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast, Toaster } from 'react-hot-toast'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isloading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()

    try {
      setIsLoading(true)
      setError('')
      if (!email || !password) return

      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if (userCredential.user) {
        navigate('/main')
               toast.success('Successfully logged in')

      }
    } catch (err) {
      setError(err.message)
      toast.error('Login failed')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div> 
       <Toaster position='top-left' reverseOrder={false}/> 
 <div className='signin-main'>
 
<div className='login-pg'>
  <form className='signin-form' onSubmit={handleLogin}> 
    
   <h3>Welcome Back</h3>
    <h2>Enter  Your Email</h2>
    <input  className='email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <h2>Enter Your Password</h2>
    <input type="password" placeholder='Enter password' className='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <p></p>
     <button className='continyu'>
    Log In 
  </button>
  <hr />
  <p>OR</p>
 <p>Dont have an account? <Link to="/signup">Sign up</Link></p> 

   </form>
 
  
</div>

<div>
    <img src="ieswhite.jpg" alt="" className='img-frst'/>
</div>

  </div>
    </div>
  )
}

export default Login