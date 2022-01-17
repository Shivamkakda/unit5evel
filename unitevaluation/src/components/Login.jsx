import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import "./Login.css"
export const Login = () => {
    const [name , setName] = useState("");
    
    const [email, setEmail] = useState("")
    
    const [password , setPassword] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(
            Login({
            name: name,
            email:email,
            password:password,
            loggedin: true,
        })
        )
    }
    return (
        <div className='login'>
            <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login</h1>
                <input type= "text" placeholder =" Enter Name" value={name} className="form-control" onChange={(e) => setName(e.target.value)}/>
                
                <input type= "email" placeholder ="Enter Email Address" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                
                <input type=  "password" placeholder ="Enter Password" value={password} className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                <input type= "submit" className='btn' placeholder='Submit'/>
            </form>
            
        </div>
    )
}

