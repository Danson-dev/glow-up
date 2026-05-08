import { createUserWithEmailAndPassword } from 'firebase/auth'
import react, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from '../firebase'
import { toast, Toaster } from 'react-hot-toast';


function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isloading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate=useNavigate()
  async function handleSignUp(e) {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      if (!email || !password || !name) return

     const userCredential= await createUserWithEmailAndPassword(auth, email, password)
     if(userCredential.user){
     console.log(userCredential);
      
      navigate('/main')
      toast.success('signup Successful')
     
 
     }
      
    } catch (err) {
      setError(err.message)
    toast.error('signup failed')
    } finally {
    setIsLoading(false)
    }
  }
  return (
    <div>
      <Toaster position='top-center' reverseOrder={false} />
        <div className='main-frst'>
       <form className='signin-form' onSubmit={handleSignUp}>
        <div className='signin-pg'>
          <h3>We are happy to see you again</h3>
          <h3>Enter Name</h3>
          <input type='text'placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} />
          <h2>Enter  Your Email</h2>
          <input type="email" placeholder='Enter-email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <h2>Enter Your Password</h2>
          <input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <hr />
           <button style={
            { width:'149px' ,padding:'10px',backgroundColor:'powderblue',border:'none',borderRadius:'9px' }
            }>Create account</button>
          <p>OR</p>
          {/* <button className='continyu'><FcGoogle className='goog' />Continue with GOOGLE</button> */}
          <p>Have an account?<Link to="/signin">log in</Link> </p>
        </div>

      </form>

    </div>
    </div>
  )
}

export default Signup