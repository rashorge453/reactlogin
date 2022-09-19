import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import{toast} from 'react-toastify'

const SignIn = (props)=>{
    const navigate= useNavigate()
    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')
    const handleSub = (event)=>{
      event.preventDefault()
     
    }
    const notifyA = (msg) => toast.error(msg)
  const notifyB = (msg) => toast.success(msg)

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const postData = () => {
    //checking email
    if (!emailRegex.test(email)) {
      notifyA("Invalid email")
      return
    }
    // Sending data to server
    fetch("http://localhost:5000/SignIn", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: pass

      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          notifyA(data.error)
        } else {
          notifyB(data.message)
          navigate("/Welcome")
        }
        console.log(data)
      })
  }
 
    return(
        <div className="auhto-form-container">
        <h1>Login</h1>
        <form className="logContainer" onSubmit={handleSub}>
            <label htmlFor="email"> email </label>
            <input value = {email} onChange={(event)=> setEmail(event.target.value)}type="email" placeholder="firstname.lastname@gmail.com" id="email" name="email" />
            <label htmlFor="password"> password </label>
            <input value = {pass} onChange={(event)=> setPass(event.target.value)}type="password" placeholder="***hidden***" id="password" name="password" />
           <input type="submit" id="login-btn" value="Sign In" onClick={()=>{postData()}}/> 
             </form>
         <Link to="/signup">Don't have an account? Register here!</Link>
        
        </div>

    
        
    )
}
export default SignIn