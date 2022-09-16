import React, {useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import{toast} from 'react-toastify'
const SignUp = (props)=>{
    const navigate= useNavigate()
    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')
    const[name,setName]=useState('')
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    //Toast Functions
    const notifyA= (msg)=> toast.error(msg)
    const notifyB=(msg)=> toast.success(msg)

    const postData = ()=>{

        if (!emailRegex.test(email)) {
            notifyA("Invalid email")
            return
          } else if (!passRegex.test(pass)) {
            notifyA("Password must contain at least 8 characters, including at least 1 number and 1 includes both lower and uppercase letters and special characters for example #,?,!")
            return
          }
        //sending data to server
        fetch("http://localhost:5000/SignUp",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                email:email,
                password:pass
             })

        }).then(res=>res.json())
        .then(data =>{
            if(data.error){
                notifyA(data.error)

            }else{
                notifyB(data.message)
                navigate('/')
            }
            console.log(data)})
    }
    const handleSub = (event)=>{
        event.preventDefault()
    }
    
    return(
        <div className="auhto-form-container">
        <h1>Register</h1>
        <form className="regContainer"onSubmit={handleSub}>
            <label htmlFor='name' >Full Name</label>
            <input  type = 'name' value={name} name='name' id='name' onChange={(event)=>setName(event.target.value)} placeholder='FullName'/>
            <label htmlFor="email"> email </label>
            <input value = {email} onChange={(event)=> setEmail(event.target.value)}type="email" placeholder="firstname.lastname@gmail.com" id="email" name="email" />
            <label htmlFor="password"> password </label>
            <input value = {pass} onChange={(event)=> setPass(event.target.value)}type="password" placeholder="***hidden***" id="password" name="password" />
            <input type="submit" id="login-btn" value="Sign Up" onClick={()=>{postData()}} />
             </form>

          <Link to="/">Already have an account? Login here!</Link>
        </div>
       
    )
}
export default SignUp