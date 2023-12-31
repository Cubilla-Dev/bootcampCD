import React, { useState } from 'react';
import style from './form.module.css';

const Formulario = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confPass, setConfPass] = useState('');

    const isNotEmpty = (value) => value.trim() !== '';

    return (
        <form>
            <div className={style.forms}>
                <div>
                    <p>First Name</p>
                    <input type='text' onChange={(e) => setName(e.target.value)} />
                </div>
                    {isNotEmpty(name) && name.length <= 2 && <p>First Name must be at least 2 characters</p>}
                <div>
                    <p>Last Name</p>
                    <input type='text' onChange={(e) => setLastName(e.target.value)} />
                </div>
                    {isNotEmpty(lastName) && lastName.length <= 2 && <p>Last Name must be at least 2 characters</p>}
                <div>
                    <p>Email</p>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                    {isNotEmpty(email) && email.length <= 5 && <p>Email must be at least 5 characters</p>}
                <div>
                    <p>Password</p>
                    <input type='password' onChange={(e) => setPass(e.target.value)} />
                    </div>
                    {isNotEmpty(pass) && pass.length <= 8 && <p>Password must be at least 8 characters</p>}
                <div>
                    <p>Confirm Password</p>
                    <input type='password' onChange={(e) => setConfPass(e.target.value)} />
                </div>
                    {isNotEmpty(confPass) && confPass.length <= 8 && <p>Password must be at least 8 characters</p>}
                    {pass !== confPass && <p>Passwords must match</p>}
            </div>
        </form>
    );
};

export default Formulario;
