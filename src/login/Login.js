
import "./Login.css"
import { useState, useEffect } from 'react';
import { useNavigate,  } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { addEmail } from "../redux/LoginSlice";


const Login = () => {
  const [email, setEmail] = useState("")
  const[password , setPassword] = useState("")
  const [toHome, setToHome] = useState()
  const loginEmail =(e)=>{
    setEmail(e.target.value)

  }
  const loginPassword =(e)=>{
    setPassword(e.target.value)

  }

  const navigate= useNavigate()
  const loginSubmitForm=(e)=>{
    e.preventDefault()

   
    navigate("/Home ")
    const sendEmail =(value , index)=>{
      dispatch(addEmail(email))
    }
    sendEmail()
  
  }

  const dispatch = useDispatch()
 
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm' onSubmit={loginSubmitForm}>
        <label for="">Email</label>
        <input type="email" placeholder="Enter your email" required value={email} onChange={loginEmail} />
        <label for="">Password</label>
        <input type="password" placeholder="Enter your password" required value={password} onChange={loginPassword}  />
        <button className='loginButton' >LOGIN</button>

      </form>
      
    </div>
  )
}

export default Login;