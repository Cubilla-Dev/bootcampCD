import React, { useState } from 'react'
import style from './form.module.css'

const Formulario = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confPass, setConfPass] = useState('')

    return (
        <form >
            <div className={style.forms}>
                <div>
                    <p>First Name</p>
                    <input type='text' onChange={(e)=>setName(e.target.value)}/>
                </div>
                    {
                        name.length > 2 
                            ? null 
                            : <p>First Name must be at least 2 characters</p> 
                    }
                <div>
                    <p>Last Name</p>
                    <input type='text' onChange={(e)=>{setLastName(e.target.value)}}/>
                </div>
                    {
                        lastName.length > 2
                            ? null 
                            : <p>Last Name must be at least 2 characters</p> 
                    }
                <div>
                    <p>email</p>
                    <input type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                    {
                        email.length > 5
                            ? null 
                            : <p>Email must be at least 2 characters</p> 
                    }
                <div>
                    <p>Password</p>
                    <input type='password' onChange={(e)=>{setPass(e.target.value)}}/>
                </div>
                    {
                        pass.length > 8
                            ? null 
                            : <p>Password must be at least 8 characters</p> 
                    }
                <div>
                    <p>Confirm Password</p>
                    <input type='password' onChange={(e)=>{setConfPass(e.target.value)}}/>
                </div>
                    {
                        pass === confPass
                            ? null 
                            : <p>Password must match</p> 
                    }
                    {
                        confPass.length > 8
                            ? null 
                            : <p>Password must be at least 8 characters</p> 
                    }
            </div>
        </form>
    )
}

export default Formulario